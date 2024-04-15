    // Select the menu button and the dropdown menu container
    const menuButton = document.querySelector('.fa-bars');
    const dropdownMenu = document.querySelector('.md:flex');

    // Add event listener to the menu button
    menuButton.addEventListener('click', function() {
        // Toggle the visibility of the dropdown menu
        dropdownMenu.classList.toggle('hidden');
    });
