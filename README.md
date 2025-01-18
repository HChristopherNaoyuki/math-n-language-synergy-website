# Math and Language Synergy Website

This repository contains the source code for the Math and Language Synergy website, which is a project to improve my skills in web development. The website includes several pages that present the services, vision, and contact information of Math and Language Synergy, an educational institution specializing in English, Japanese, and Mathematics courses.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Instructions for Use](#instructions-for-use)
- [Mobile Responsiveness](#mobile-responsiveness)
- [Hamburger Menu Implementation](#hamburger-menu-implementation)
- [Form Validation](#form-validation)
- [SEO Optimization](#seo-optimization)
- [Google Forms Integration](#google-forms-integration)

## Project Overview

The **Math and Language Synergy** website is designed to provide an engaging and informative user experience, highlighting the services and programs offered by the institution. It includes the following pages:

- **Home**: Overview of the institution and a call-to-action.
- **About Us**: The history, vision, and team of Math and Language Synergy.
- **Services**: A detailed list of the services provided, including language and mathematics courses.
- **News**: Latest updates and announcements from Math and Language Synergy.
- **Gallery**: Images showcasing the educational activities.
- **Contact Us**: Contact information and a form to ask questions.

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes.
- **Hamburger Menu**: A mobile-friendly hamburger menu that toggles navigation links on smaller screens.
- **Forms with Validation**: The **Contact Us** page includes a form with JavaScript-based validation for user inputs.
- **Smooth Scrolling**: Internal navigation links provide a smooth scrolling experience.
- **SEO Optimization**: SEO best practices have been applied to improve the website’s visibility in search engines.
- **Google Forms Integration**: A newsletter signup using Google Forms.

## Technologies Used

- **HTML5**: Structure and content of the website.
- **CSS3**: Styling and layout, including responsive design.
- **JavaScript**: Interactivity, such as the hamburger menu and form validation.
- **Google Forms**: For newsletter subscription integration.
- **Font**: Google Fonts (Roboto).

## File Structure

```
Code/
 ├── index.html
 ├── about.html 
 ├── services.html
 ├── news.html
 ├── gallery.html
 ├── contact.html
 ├── assets.html
 ├── styles.css
 ├── script.js
 └── form-validation.js
Gallery/
README.md
```

### Key Files:

- **`index.html`**: Homepage of the website.
- **`styles.css`**: Main stylesheet for the entire website.
- **`script.js`**: JavaScript for the hamburger menu and smooth scrolling.
- **`form-validation.js`**: JavaScript file that handles form validation on the contact page.
- **`Gallery/`**: Folder containing the images used on the website.

## Instructions for Use

1. **Clone the repository**: Download or clone the repository to your local machine.
2. **Open in a browser**: Open any of the `.html` files in a browser to view the website locally.
3. **Test the form validation**: Navigate to the **Contact Us** page and try submitting the form. The JavaScript validation will alert you if there are missing or incorrect fields.
4. **Responsive navigation**: Resize the browser window to see the hamburger menu on smaller screens.

## Mobile Responsiveness

The website is fully responsive, thanks to media queries that adjust the layout and styles based on the device width. The **hamburger menu** appears on screens narrower than 768px, allowing users to toggle navigation.

## Hamburger Menu Implementation

The **hamburger menu** is implemented using **CSS** and **JavaScript**. It is hidden on larger screens and only appears on mobile. When clicked, it toggles the display of the navigation links.

**Key Files**:
- **CSS**: The styling for the hamburger menu is found in `styles.css`.
- **JavaScript**: The toggle functionality is managed in `script.js`.

```js
document.addEventListener('DOMContentLoaded', function() 
{
    // Get the hamburger menu toggle button (menu-toggle)
    const hamburger = document.getElementById('menu-toggle'); 
    
    // Get the navigation list (ul) within the navigation (nav)
    const navList = document.querySelector('nav ul'); 

    // Add click event listener to the hamburger menu button.
    // When the button is clicked, the 'show' class is toggled 
    // on the navigation list, to show/hide it in mobile view.
    hamburger.addEventListener('click', function() 
    {
        // Toggle the 'show' class on the nav list 
        // This controls whether the mobile menu is visible.
        navList.classList.toggle('show');
        
        // Optional: Toggle 'active' class on the hamburger for animation
        this.classList.toggle('active');
    });

    // Get all navigation links inside the navigation list.
    // This allows us to automatically close the mobile menu 
    // once a link is clicked by the user.
    const navLinks = document.querySelectorAll('nav ul a'); 

    // Loop through each link and add a click event listener.
    navLinks.forEach(function(link) 
    {
        link.addEventListener('click', function() 
        {
            // When a link is clicked, remove the 'show' class 
            // from the nav list to close the mobile menu.
            navList.classList.remove('show');
        });
    });

    /*
     * Optional feature: Smooth scrolling for anchor links.
     * This section is used to enable smooth scrolling for internal page navigation
     * (when the user clicks a link that leads to another section of the same page).
     */
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]'); // Select all anchor links with href starting with '#'

    // Loop through each smooth scroll link and add a click event listener.
    smoothScrollLinks.forEach(function(link) 
    {
        link.addEventListener('click', function(e) 
        {
            // Prevent the default anchor link behavior (jump to the section instantly).
            e.preventDefault();

            // Get the target section ID from the link's href attribute (exclude the '#').
            const targetId = this.getAttribute('href').substring(1); 
            
            // Get the target element by ID (the section to scroll to).
            const targetElement = document.getElementById(targetId); 

            // Check if the target element exists on the page.
            if (targetElement) 
            {
                // Scroll to the target element smoothly over time.
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
```

## Form Validation

The **Contact Us** form has JavaScript-based validation to ensure that all required fields are filled out correctly.

**Validation Features**:
- Clears placeholder text on focus.
- Checks for valid email format.
- Alerts users when required fields are missing.

**JavaScript File**: `form-validation.js`

```js
// Class to handle form validation and interaction
class FormValidator
{
    constructor(formId)
    {
        // Store form elements using the provided form structure
        this.form = document.getElementById(formId);
        this.nameField = this.form.querySelector('#name');
        this.emailField = this.form.querySelector('#email');
        this.questionField = this.form.querySelector('#question');

        // Initialize event listeners for form
        this.init();
    }

    // Initialize event listeners
    init()
    {
        // Add focus event to clear placeholders
        this.nameField.addEventListener('focus', () => this.clearPlaceholder(this.nameField));
        this.emailField.addEventListener('focus', () => this.clearPlaceholder(this.emailField));
        this.questionField.addEventListener('focus', () => this.clearPlaceholder(this.questionField));

        // Add submit event for form validation
        this.form.addEventListener('submit', (event) => this.validateForm(event));
    }

    // Clears placeholder text when the field is focused
    clearPlaceholder(field)
    {
        field.placeholder = ''; // Clear the placeholder when field is focused
    }

    // Validates email format using a regular expression
    validateEmail(email)
    {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
        return emailPattern.test(email); // Returns true if the email is valid
    }

    // Main form validation logic
    validateForm(event)
    {
        const name = this.nameField.value.trim(); // Trim spaces from name input
        const email = this.emailField.value.trim(); // Trim spaces from email input
        const question = this.questionField.value.trim(); // Trim spaces from question input

        // Check if any fields are empty
        if (name === '' || email === '' || question === '')
        {
            alert('Please fill in all required fields.');
            event.preventDefault(); // Prevent form submission if fields are empty
            return;
        }

        // Check if the email is in a valid format
        if (!this.validateEmail(email))
        {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission if email is invalid
            return;
        }

        // If all validation passes, show success message
        alert('Form submitted successfully!');
    }
}

// Instantiate FormValidator when DOM is ready
document.addEventListener('DOMContentLoaded', function()
{
    const formValidator = new FormValidator('contactForm'); // Attach validation to the form with ID 'contactForm'
});
```

## SEO Optimization

The website follows **SEO best practices**, including:
- **Meta descriptions**: Added for each page.
- **Alt attributes**: Descriptive text for all images.
- **Semantic HTML**: Using proper headings (`<h1>`, `<h2>`, etc.), lists, and tags.

## Google Forms Integration

The **newsletter subscription** is implemented using **Google Forms**. The form allows users to enter their email and opt-in for the weekly newsletter.

### Steps to Embed Google Forms:
1. Create a form in **Google Forms**.
2. Get the **embed link** from Google Forms.
3. Add the embedded form in the appropriate section of the homepage.

Example:

```html
<section id="newsletter-signup">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfxxx/formResponse" width="100%" height="500"></iframe>
</section>
```
