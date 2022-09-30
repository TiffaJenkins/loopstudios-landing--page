// nav toggle-----------------------------------------------------------

//capture classes in variables
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('nav-menu')[0]
let menuOpen = false;

//toggle event listener
toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')

    if (!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
});
