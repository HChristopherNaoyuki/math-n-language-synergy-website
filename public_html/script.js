/*
 * Wait until the DOM is fully loaded and ready.
 * All event listeners and DOM manipulations must occur
 * after the DOM is completely available.
 */
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

/* 
 * Additional event listener for DOMContentLoaded to ensure the page is fully loaded.
 * This part has redundancy, so we'll remove the extra lines and ensure all functionality
 * is covered in a single block above.
 * 
 * The 'show' class toggles for mobile navigation, ensuring the hamburger menu works as expected.
 */