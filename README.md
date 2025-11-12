# Ali Nor - Full Stack Developer

## Overview

This is my professional portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. The site is built with React and Vite for optimal performance and user experience.

## Technologies Used

- **Frontend**: React.js, Vite
- **AI Integration**: Google Gemini 2.0 Flash API
- **Styling**: CSS with custom styling system
- **State Management**: React Context API
- **Deployment**: Netlify, Vercel, GitHub Pages
- **Other Tools**: React Icons, react-router-dom, @google/generative-ai

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Mode**: Theme toggle for user preference
- **AI Chatbot**: Intelligent assistant powered by Google Gemini 2.0 Flash that can answer questions about skills, projects, and experience
- **Project Showcase**: Detailed project cards with links to live demos and code
- **Contact Form**: Direct communication channel
- **Smooth Animations**: Enhanced user experience with smooth transitions

## Projects Featured

- **MediaMatch**: Movie discovery application based on user preferences
- **DashMaster**: Modern admin dashboard with authentication
- **Donezo**: Professional task management landing page
- **Blood Management System**: Healthcare application for blood donation management
- **Task Management System**: PHP-based task organization solution
- **TaskTracker Pro**: Comprehensive task management built with MERN stack
- **Personal Blog Platform**: Blog website with authentication and management features
- **Somalia Language Tutor**: Interactive language learning mobile application

> **Note:** This is just a selection of highlighted projects. Visit my [GitHub profile](https://github.com/alidiamond1) to discover many more amazing projects that demonstrate my full range of skills and expertise. The projects showcase in this portfolio is dynamically rendered from the `src/pages/Projects.jsx` file which features an elegant, responsive grid layout with interactive project cards.

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/alidiamond1/ali-diamond-portfolio.git
   cd ali-diamond-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   
   📖 **For detailed chatbot setup instructions, see [CHATBOT_SETUP.md](./CHATBOT_SETUP.md)**

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```
   
   **Note**: Don't forget to add `VITE_GEMINI_API_KEY` to your deployment platform's environment variables.

## Project Structure

```
src/
├── assets/           # Static assets (images, fonts)
├── components/       # Reusable UI components
│   └── AIChatbot.jsx # AI-powered chatbot component
├── contexts/         # React context providers
├── data/             # Portfolio data and context
│   └── portfolioContext.js # AI chatbot knowledge base
├── pages/            # Page components
├── styles/           # CSS styles
└── App.jsx           # Main application component
```

## Contact

- **GitHub**: [alidiamond1](https://github.com/alidiamond1)
- **Email**: Calilucky3@gmail.com
- **LinkedIn**: [Alidiamond](https://www.linkedin.com/in/ali-diamond-19b8052b9/)


## License

This project is licensed under the MIT License - see the LICENSE file for details.
