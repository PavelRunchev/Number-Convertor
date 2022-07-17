
let ul = document.querySelector('.unordered-list');
let lists = document.querySelectorAll('.unordered-list > .list-item');
let isClick = false;
document.querySelector('.fa-bars').addEventListener('click', showNavigation);
const mediaQuery = window.matchMedia('(max-width: 899px)');
anime(ul);

window.addEventListener('resize', function() {
    anime(ul);
});

function showNavigation(e) {
    e.preventDefault();
    isClick = isClick == false ? true : false;
    anime(ul);
}

function anime(ul) {
    if(mediaQuery.matches) {
        if(isClick) {
            ul.style.display = 'flex';
            ul.style.opacity = '1';
        } else {
            ul.style.display = 'none';
            ul.style.opacity = '0';
        }
    } else {
        if(ul.style.display == 'none') {
            ul.style.display = 'flex';
            ul.style.opacity = '1';
        }
    }
}