import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Creating visually appealing and user-friendly websites that are tailored to your brand and business goals.',
    },
    {
      id: 2,
      title: 'Point of Sale (POS)',
      description: 'Developing custom point of sale systems to streamline your business operations and improve customer experience.',
    },
    {
      id: 3,
      title: 'Full Stack Web Development',
      description: 'Building complete web applications from the ground up, including both front-end and back-end development.',
    },
  ];

  return (
    <div name="services" className="section">
      <div className="section-container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">Here's what I can do for you.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
