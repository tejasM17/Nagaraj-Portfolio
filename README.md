# Nagaraj Portfolio

A personal portfolio website built with React.js to showcase skills, projects, and work experience.

## Setup Instructions

1. **Clone the Repository**  
   Open your terminal and run:  
   ```
   git clone https://github.com/tejasM17/Nagaraj-Portfolio.git
   ```

2. **Navigate to the Project Directory**  
   ```
   cd Nagaraj-Portfolio
   ```

3. **Install Dependencies**  
   Run the following commands in sequence to install all required packages:  
   ```
   npm install
   ```  
   ```
   npm install tailwindcss @tailwindcss/vite
   ```  
   ```
   npm install react-router-dom
   ```  
   ```
   npm install react-icons
   ```  
   ```
   npm install react-scroll
   ```  
   ```
   npm install react-typing-effect
   ```  
   ```
   npm install @emailjs/browser
   ```
   ```
   npm install dotenv
   ```

4. **Configure EmailJS (Important for Contact Form)**  
   - Sign up at [emailjs.com](https://www.emailjs.com/) and create an account.  
   - In your EmailJS dashboard, obtain your service ID, template ID, and public key.  
   - Create a `.env` file in the root of the project and add the following environment variables:  
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```  
     Replace `your_service_id`, `your_template_id`, and `your_public_key` with the values from your EmailJS dashboard.  
   - In `src/components/Contact.js` (or the relevant contact file), use these variables as follows: 

     ```
     emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
     ```  
     This enables the contact form to send emails.  
   - **Note**: Ensure the `.env` file is added to `.gitignore` to prevent exposing sensitive keys.

5. **Run the Development Server**  
   Start the app locally:  
   ```
   npm run dev
   ```  
   Your site will be available at `http://localhost:5173` (or the port shown in the terminal).

## Building for Production
To create an optimized production build:  
```
npm run build
```  
The output will be in the `dist` folder. Serve it with any static server (e.g., `npx serve -s dist`).

## Contributing
Feel free to fork and submit pull requests for improvements!

---

*Last updated: October 09, 2025*