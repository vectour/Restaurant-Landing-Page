// ============ SHOW MENU =========================

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            // We ass the show menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')


// ================ HIDE MENU =========================

const navLink = document.querySelectorAll('.nav__link')

function linkAction () {
    const navMenu = document.getElementById('nav-menu')
    // When we click each nav link, remove the nav menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))