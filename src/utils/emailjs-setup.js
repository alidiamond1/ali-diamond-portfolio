// EmailJS Setup Instructions

/*
To make your contact form work with EmailJS, follow these steps:

1. Create an EmailJS account at https://www.emailjs.com/ (they have a free tier)

2. Create an Email Service:
   - Go to "Email Services" tab
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps

3. Create an Email Template:
   - Go to "Email Templates" tab
   - Click "Create New Template"
   - Design your email template with these variables:
     - {{from_name}} - The name of the person contacting you
     - {{from_email}} - Their email address
     - {{subject}} - The subject of their message
     - {{message}} - The content of their message
     - {{to_name}} - Your name (Ali Nor)

4. Get your EmailJS Public Key:
   - Go to "Account" tab
   - Find your "Public Key"

5. Update the Contact.jsx file with your actual IDs:
   - Replace 'service_portfolio' with your actual service ID
   - Replace 'template_contact' with your actual template ID
   - Replace 'YOUR_PUBLIC_KEY' with your actual public key

6. Initialize EmailJS in your main.jsx or index.js file:
   - Add the following code:
     
     import { init } from '@emailjs/browser';
     init("YOUR_PUBLIC_KEY");

*/

// Example EmailJS initialization code for main.jsx or index.js
import { init } from '@emailjs/browser';
init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
