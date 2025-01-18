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