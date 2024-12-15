# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Brief Description of the Approach
The QuickRent Application was developed as a responsive platform to allow users to rent gadgets such as laptops, cameras, and gaming consoles. The development approach involved:

Component-Based Development:

The project uses React.js to create modular and reusable components such as HeroBanner, Features, GadgetListing, ContactUs, and SignUp.
Responsive Design:

Tailwind CSS was used to ensure responsiveness and a visually appealing UI across different screen sizes.
User-Friendly Features:

Implemented a Sign-Up functionality to manage user accounts and conditionally render the navbar based on authentication.
Included animations like hover effects and fade-ins to enhance the user experience.
Functional Features:

GadgetListing dynamically lists available gadgets with details like price, features, and a "Rent Now" button.
ContactUs includes a form for user queries and a placeholder for the office map.
Modern Best Practices:

Used state management with React hooks (e.g., useState, useNavigate).
Optimized navigation between pages using react-router-dom.


Instructions to Set Up and Run the Project
Prerequisites
Node.js and npm installed on your machine.
A code editor, such as Visual Studio Code (VS Code).
Steps to Set Up the Project
Clone the Repository:


git clone https://github.com/poshakbanger/QuickRent-Application.git
Navigate to the Project Directory:


cd QuickRent-Application
Install Dependencies: Install all the required packages using npm:

npm install
Start the Development Server: Run the project locally:


npm start
This will start the development server, and the application will be accessible at:


http://localhost:3000
Build and Deploy the Project
Build for Production: To create a production-ready build, run:


npm run build
Deploy to Hosting Platforms:

You can deploy the build folder to platforms like GitHub Pages, Netlify, or Vercel for live hosting.
Accessing the Application
Home Page: Displays the HeroBanner and navigates to other sections.
Sign-Up: Allows new users to register.
Features: Highlights platform features.
Gadget Listing: Lists gadgets available for rent.
Contact Us: Allows users to send queries.
