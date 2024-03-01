// Ketika humberger-menu di KLik 
const navbarNav = document.querySelector
('.navbar-nav');
document.querySelector('#hamburger-menu').
onclick = () =>{
    navbarNav.classList.toggle('active');
};

// KLik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});