const navLink = document.querySelector('.nav-link');
const pageTransition = document.querySelector('.page-transition');

navLink.addEventListener('click', function(event) {
    event.preventDefault();
    pageTransition.classList.add('active');

    setTimeout(() => {
    window.location.href = 'file:///C:/Users/srich/Desktop/WedTech/HTML/home_portfolio.html';
    }, 1000);
});