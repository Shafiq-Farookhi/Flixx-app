const global = {
 currentPage: window.location.pathname,
}

//  Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = 'b477b4b0a5fb1d11acb63ff11c18bab2';
    const API_URL = 'https://api.themoviedb.org/3/';

    const
}

// Highlight active link
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage) {
            link.classList.add('active');
        }
    });
}

//  Init App
function init() {
    switch (global.currentPage) {
        case '/':
            case '/index.html':
            console.log('Home');            
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-datails.html':
            console.log('Movie Details'); 
            break;   
        case '/tv-datails.html':
            console.log('TV Details'); 
            break;   
        case '/search.html':
            console.log('Search'); 
            break;   
        default:
            break;
    }
    highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);