import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SkillsSphere - Interactive 3D Skills Sphere Component
 * 
 * Displays skill icons in a rotating 3D sphere layout.
 * Click on any skill to see its description and proficiency level.
 */

// ==========================================
// MATH UTILITIES
// ==========================================

const SPHERE_MATH = {
    degreesToRadians: (degrees) => degrees * (Math.PI / 180),

    normalizeAngle: (angle) => {
        while (angle > 180) angle -= 360;
        while (angle < -180) angle += 360;
        return angle;
    }
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const SkillsSphere = ({
    skills = [],
    containerSize = 500,
    sphereRadius = 180,
    dragSensitivity = 0.5,
    momentumDecay = 0.95,
    maxRotationSpeed = 5,
    baseIconScale = 0.1,
    autoRotate = true,
    autoRotateSpeed = 0.3,
    isDarkMode = true,
    className = ''
}) => {

    // ==========================================
    // STATE & REFS
    // ==========================================

    const [isMounted, setIsMounted] = useState(false);
    const [rotation, setRotation] = useState({ x: 15, y: 15, z: 0 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [skillPositions, setSkillPositions] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const containerRef = useRef(null);
    const lastMousePos = useRef({ x: 0, y: 0 });
    const animationFrame = useRef(null);

    // ==========================================
    // COMPUTED VALUES
    // ==========================================

    const actualSphereRadius = sphereRadius || containerSize * 0.4;
    const baseIconSize = containerSize * baseIconScale;

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================

    const generateSpherePositions = useCallback(() => {
        const positions = [];
        const skillCount = skills.length;

        // Fibonacci sphere distribution for even coverage
        const goldenRatio = (1 + Math.sqrt(5)) / 2;
        const angleIncrement = 2 * Math.PI / goldenRatio;

        for (let i = 0; i < skillCount; i++) {
            const t = i / skillCount;
            const inclination = Math.acos(1 - 2 * t);
            const azimuth = angleIncrement * i;

            let phi = inclination * (180 / Math.PI);
            let theta = (azimuth * (180 / Math.PI)) % 360;

            // Better pole coverage
            const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35;
            if (phi < 90) {
                phi = Math.max(5, phi - poleBonus);
            } else {
                phi = Math.min(175, phi + poleBonus);
            }

            phi = 15 + (phi / 180) * 150;

            // Slight randomization
            const randomOffset = (Math.random() - 0.5) * 20;
            theta = (theta + randomOffset) % 360;
            phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10));

            positions.push({
                theta,
                phi,
                radius: actualSphereRadius
            });
        }

        return positions;
    }, [skills.length, actualSphereRadius]);

    const calculateWorldPositions = useCallback(() => {
        const positions = skillPositions.map((pos, index) => {
            const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
            const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
            const rotXRad = SPHERE_MATH.degreesToRadians(rotation.x);
            const rotYRad = SPHERE_MATH.degreesToRadians(rotation.y);

            // Initial position on sphere
            let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
            let y = pos.radius * Math.cos(phiRad);
            let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

            // Apply Y-axis rotation
            const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
            const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
            x = x1;
            z = z1;

            // Apply X-axis rotation
            const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
            const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
            y = y2;
            z = z2;

            // Calculate visibility
            const fadeZoneStart = -10;
            const fadeZoneEnd = -30;
            const isVisible = z > fadeZoneEnd;

            let fadeOpacity = 1;
            if (z <= fadeZoneStart) {
                fadeOpacity = Math.max(0, (z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd));
            }

            // Calculate scale based on position
            const isPoleSkill = pos.phi < 30 || pos.phi > 150;
            const distanceFromCenter = Math.sqrt(x * x + y * y);
            const maxDistance = actualSphereRadius;
            const distanceRatio = Math.min(distanceFromCenter / maxDistance, 1);

            const distancePenalty = isPoleSkill ? 0.4 : 0.7;
            const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);

            const depthScale = (z + actualSphereRadius) / (2 * actualSphereRadius);
            const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

            return {
                x,
                y,
                z,
                scale,
                zIndex: Math.round(1000 + z),
                isVisible,
                fadeOpacity,
                originalIndex: index
            };
        });

        // Collision detection
        const adjustedPositions = [...positions];

        for (let i = 0; i < adjustedPositions.length; i++) {
            const pos = adjustedPositions[i];
            if (!pos.isVisible) continue;

            let adjustedScale = pos.scale;
            const iconSize = baseIconSize * adjustedScale;

            for (let j = 0; j < adjustedPositions.length; j++) {
                if (i === j) continue;

                const other = adjustedPositions[j];
                if (!other.isVisible) continue;

                const otherSize = baseIconSize * other.scale;
                const dx = pos.x - other.x;
                const dy = pos.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const minDistance = (iconSize + otherSize) / 2 + 20;

                if (distance < minDistance && distance > 0) {
                    const overlap = minDistance - distance;
                    const reductionFactor = Math.max(0.4, 1 - (overlap / minDistance) * 0.6);
                    adjustedScale = Math.min(adjustedScale, adjustedScale * reductionFactor);
                }
            }

            adjustedPositions[i] = {
                ...pos,
                scale: Math.max(0.25, adjustedScale)
            };
        }

        return adjustedPositions;
    }, [skillPositions, rotation, actualSphereRadius, baseIconSize]);

    const clampRotationSpeed = useCallback((speed) => {
        return Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, speed));
    }, [maxRotationSpeed]);

    // ==========================================
    // PHYSICS & MOMENTUM
    // ==========================================

    const updateMomentum = useCallback(() => {
        if (isDragging) return;

        setVelocity(prev => {
            const newVelocity = {
                x: prev.x * momentumDecay,
                y: prev.y * momentumDecay
            };

            if (!autoRotate && Math.abs(newVelocity.x) < 0.01 && Math.abs(newVelocity.y) < 0.01) {
                return { x: 0, y: 0 };
            }

            return newVelocity;
        });

        setRotation(prev => {
            let newY = prev.y;

            if (autoRotate) {
                newY += autoRotateSpeed;
            }

            newY += clampRotationSpeed(velocity.y);

            return {
                x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(velocity.x)),
                y: SPHERE_MATH.normalizeAngle(newY),
                z: prev.z
            };
        });
    }, [isDragging, momentumDecay, velocity, clampRotationSpeed, autoRotate, autoRotateSpeed]);

    // ==========================================
    // EVENT HANDLERS
    // ==========================================

    const handleMouseDown = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
        setVelocity({ x: 0, y: 0 });
        lastMousePos.current = { x: e.clientX, y: e.clientY };
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - lastMousePos.current.x;
        const deltaY = e.clientY - lastMousePos.current.y;

        const rotationDelta = {
            x: -deltaY * dragSensitivity,
            y: deltaX * dragSensitivity
        };

        setRotation(prev => ({
            x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rotationDelta.x)),
            y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rotationDelta.y)),
            z: prev.z
        }));

        setVelocity({
            x: clampRotationSpeed(rotationDelta.x),
            y: clampRotationSpeed(rotationDelta.y)
        });

        lastMousePos.current = { x: e.clientX, y: e.clientY };
    }, [isDragging, dragSensitivity, clampRotationSpeed]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleTouchStart = useCallback((e) => {
        e.preventDefault();
        const touch = e.touches[0];
        setIsDragging(true);
        setVelocity({ x: 0, y: 0 });
        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    }, []);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging) return;
        e.preventDefault();

        const touch = e.touches[0];
        const deltaX = touch.clientX - lastMousePos.current.x;
        const deltaY = touch.clientY - lastMousePos.current.y;

        const rotationDelta = {
            x: -deltaY * dragSensitivity,
            y: deltaX * dragSensitivity
        };

        setRotation(prev => ({
            x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rotationDelta.x)),
            y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rotationDelta.y)),
            z: prev.z
        }));

        setVelocity({
            x: clampRotationSpeed(rotationDelta.x),
            y: clampRotationSpeed(rotationDelta.y)
        });

        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    }, [isDragging, dragSensitivity, clampRotationSpeed]);

    const handleTouchEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    // ==========================================
    // EFFECTS & LIFECYCLE
    // ==========================================

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        setSkillPositions(generateSpherePositions());
    }, [generateSpherePositions]);

    useEffect(() => {
        const animate = () => {
            updateMomentum();
            animationFrame.current = requestAnimationFrame(animate);
        };

        if (isMounted) {
            animationFrame.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [isMounted, updateMomentum]);

    useEffect(() => {
        if (!isMounted) return;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

    // ==========================================
    // RENDER HELPERS
    // ==========================================

    const worldPositions = calculateWorldPositions();

    const renderSkillNode = useCallback((skill, index) => {
        const position = worldPositions[index];

        if (!position || !position.isVisible) return null;

        const iconSize = baseIconSize * position.scale;
        const isHovered = hoveredIndex === index;
        const finalScale = isHovered ? Math.min(1.3, 1.3 / position.scale) : 1;

        // Get category color
        const getCategoryColor = (category) => {
            const colors = {
                'Frontend': '#3b82f6',
                'Backend': '#10b981',
                'Mobile': '#8b5cf6',
                'Database': '#f59e0b',
                'AI/ML': '#ec4899',
                'DevOps': '#06b6d4',
                'Version Control': '#f97316',
                'OS': '#14b8a6',
                'IDE': '#a855f7',
                'default': '#6366f1'
            };
            return colors[category] || colors.default;
        };

        const categoryColor = getCategoryColor(skill.category);

        return (
            <div
                key={skill.id || index}
                style={{
                    position: 'absolute',
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    left: `${containerSize / 2 + position.x}px`,
                    top: `${containerSize / 2 + position.y}px`,
                    opacity: position.fadeOpacity,
                    transform: `translate(-50%, -50%) scale(${finalScale})`,
                    zIndex: position.zIndex,
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-out'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedSkill(skill)}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isDarkMode
                            ? `linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)`
                            : `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.95) 100%)`,
                        border: `2px solid ${isHovered ? categoryColor : (isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)')}`,
                        boxShadow: isHovered
                            ? `0 8px 24px ${categoryColor}40, 0 0 0 3px ${categoryColor}30`
                            : isDarkMode
                                ? '0 4px 12px rgba(0,0,0,0.4)'
                                : '0 4px 12px rgba(0,0,0,0.15)',
                        transition: 'all 0.2s ease',
                        fontSize: `${iconSize * 0.45}px`,
                        color: isHovered ? categoryColor : (isDarkMode ? '#94a3b8' : '#64748b')
                    }}
                >
                    {skill.icon}
                </div>

                {/* Tooltip on hover */}
                {isHovered && (
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            marginBottom: '8px',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            background: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                            border: `1px solid ${categoryColor}50`,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            whiteSpace: 'nowrap',
                            fontSize: '13px',
                            fontWeight: '600',
                            color: isDarkMode ? '#e2e8f0' : '#1e293b',
                            zIndex: 9999,
                            pointerEvents: 'none'
                        }}
                    >
                        {skill.title}
                    </div>
                )}
            </div>
        );
    }, [worldPositions, baseIconSize, containerSize, hoveredIndex, isDarkMode]);

    // ==========================================
    // SKILL MODAL
    // ==========================================

    const renderSkillModal = () => {
        if (!selectedSkill) return null;

        const getCategoryColor = (category) => {
            const colors = {
                'Frontend': '#3b82f6',
                'Backend': '#10b981',
                'Mobile': '#8b5cf6',
                'Database': '#f59e0b',
                'AI/ML': '#ec4899',
                'DevOps': '#06b6d4',
                'Version Control': '#f97316',
                'OS': '#14b8a6',
                'IDE': '#a855f7',
                'default': '#6366f1'
            };
            return colors[category] || colors.default;
        };

        const categoryColor = getCategoryColor(selectedSkill.category);

        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(8px)'
                    }}
                    onClick={() => setSelectedSkill(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        style={{
                            background: isDarkMode
                                ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
                                : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                            borderRadius: '1.5rem',
                            maxWidth: '400px',
                            width: '100%',
                            overflow: 'hidden',
                            border: `2px solid ${categoryColor}40`,
                            boxShadow: `0 20px 50px ${categoryColor}20`
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with Icon */}
                        <div
                            style={{
                                background: `linear-gradient(135deg, ${categoryColor}20 0%, ${categoryColor}10 100%)`,
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setSelectedSkill(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: isDarkMode ? '#fff' : '#1e293b',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <X size={18} />
                            </button>

                            <div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                                    border: `3px solid ${categoryColor}`,
                                    boxShadow: `0 8px 24px ${categoryColor}40`,
                                    fontSize: '2.5rem',
                                    color: categoryColor,
                                    marginBottom: '1rem'
                                }}
                            >
                                {selectedSkill.icon}
                            </div>

                            <h3
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    color: isDarkMode ? '#ffffff' : '#1e293b',
                                    marginBottom: '0.5rem'
                                }}
                            >
                                {selectedSkill.title}
                            </h3>

                            <span
                                style={{
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '9999px',
                                    background: `${categoryColor}20`,
                                    color: categoryColor,
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                {selectedSkill.category}
                            </span>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '1.5rem' }}>
                            {/* Proficiency */}
                            <div style={{ marginBottom: '1.5rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '0.5rem'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: '0.875rem',
                                            fontWeight: '600',
                                            color: isDarkMode ? '#94a3b8' : '#64748b'
                                        }}
                                    >
                                        Proficiency
                                    </span>
                                    <span
                                        style={{
                                            fontSize: '0.875rem',
                                            fontWeight: '700',
                                            color: categoryColor
                                        }}
                                    >
                                        {selectedSkill.level}%
                                    </span>
                                </div>

                                <div
                                    style={{
                                        width: '100%',
                                        height: '10px',
                                        borderRadius: '9999px',
                                        background: isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${selectedSkill.level}%` }}
                                        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                                        style={{
                                            height: '100%',
                                            background: `linear-gradient(90deg, ${categoryColor} 0%, ${categoryColor}cc 100%)`,
                                            borderRadius: '9999px',
                                            boxShadow: `0 0 12px ${categoryColor}60`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            {selectedSkill.description && (
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        lineHeight: '1.6',
                                        color: isDarkMode ? '#cbd5e1' : '#475569'
                                    }}
                                >
                                    {selectedSkill.description}
                                </p>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        );
    };

    // ==========================================
    // EARLY RETURNS
    // ==========================================

    if (!isMounted) {
        return (
            <div
                style={{
                    width: containerSize,
                    height: containerSize,
                    background: isDarkMode ? 'rgba(15, 23, 42, 0.5)' : 'rgba(241, 245, 249, 0.5)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>Loading...</div>
            </div>
        );
    }

    if (!skills.length) {
        return (
            <div
                style={{
                    width: containerSize,
                    height: containerSize,
                    background: isDarkMode ? 'rgba(15, 23, 42, 0.3)' : 'rgba(241, 245, 249, 0.5)',
                    borderRadius: '1rem',
                    border: `2px dashed ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '0.5rem'
                }}
            >
                <div style={{ color: isDarkMode ? '#94a3b8' : '#64748b' }}>No skills provided</div>
                <div style={{ fontSize: '0.75rem', color: isDarkMode ? '#64748b' : '#94a3b8' }}>
                    Add skills to the skills prop
                </div>
            </div>
        );
    }

    // ==========================================
    // MAIN RENDER
    // ==========================================

    return (
        <>
            <div
                ref={containerRef}
                className={className}
                style={{
                    position: 'relative',
                    width: containerSize,
                    height: containerSize,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    perspective: '1000px'
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                {/* Glow effect in center */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: actualSphereRadius * 0.6,
                        height: actualSphereRadius * 0.6,
                        borderRadius: '50%',
                        background: isDarkMode
                            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)'
                            : 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
                        pointerEvents: 'none'
                    }}
                />

                <div style={{ position: 'relative', width: '100%', height: '100%', zIndex: 10 }}>
                    {skills.map((skill, index) => renderSkillNode(skill, index))}
                </div>
            </div>

            {renderSkillModal()}
        </>
    );
};

export default SkillsSphere;
