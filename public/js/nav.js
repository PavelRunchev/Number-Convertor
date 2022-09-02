
(function() {
    "use strict";
    
    let navUnderMenu = document.querySelector('.navigation-under-container');
    let btnBars = document.querySelector('.fa-bars');
    btnBars.addEventListener('click', showHideNavigation);
    let ul = document.querySelector('.unordered-list');
    let listItems = Array.from(ul.querySelectorAll('li'));

    //show / hide - bars btn and navigation!
    window.addEventListener('resize', showBars);
    function showBars() {
        const isMatch = window.matchMedia('(max-width: 992px)');
        hideNavigationItems(listItems, '0');
        if(isMatch.matches) {
            if(ul.style.display != 'none') {
                btnBars.style["display"] = "block";
                ul.style["display"] = "none";
                animationNavigation(listItems, '1', '0', 100, 20);
            }
            
        } else { 
            if(ul.style.display != 'flex') {
                btnBars.style["display"] = "none";
                ul.style["display"] = "flex";
                ul.style.opacity = '1';
                animationNavigation(listItems, '0', '1', 500, 200);
            }
        }
    }

    //refresh page!
    window.addEventListener('load', (event) => {
        showBars();
    });

    async function showHideNavigation(e) {
        e.preventDefault();

        if(ul.style.display == 'none') {
            ul.style.display = "flex";
            await animationNavigation(listItems, '0', '1', 500, 200);
        } else { 
            await animationNavigation(listItems, '1', '0', 100, 20);
            ul.style.display = "none";
        }
    }

    function hideNavigationItems(listItems, index) {
        listItems.map(li => li.style.opacity = `${index}`);
    }

    function animationNavigation(colection, fromIdex, toIndex, duration, delay) {
        colection.map((li, i) => {
            li.animate([
                { opacity: fromIdex },
                { opacity: toIndex }
                ], {
                    duration: duration,
                    easeing: "ease-out",
                    delay: delay * i,
                    fill: "forwards",
            });
        });
    }

    //hidden menu
    let btnIspiration = document.querySelector('.inspiration-link');
    btnIspiration.addEventListener('click', showInnerMenu);

    navUnderMenu.style.display = 'none';
    let angleDown = document.querySelector('.fa-caret-down');
    let angleUp = document.querySelector('.fa-caret-up');

    function showInnerMenu(e) {
        e.preventDefault();

        if(navUnderMenu.style.display == 'none') {
            angleUp.style.display = 'inline-block';
            angleDown.style.display = 'none';
            navUnderMenu.style.display = 'flex';
            navUnderMenu.animate([
                { opacity: '0' },
                { opacity: '1' }
                ], {
                    duration: 500,
                    easeing: "ease-out",
                    delay: 100,
                    fill: "forwards",
            });
        } else if(navUnderMenu.style.display == 'flex') {
            angleUp.style.display = 'none';
            angleDown.style.display = 'inline-block';
            navUnderMenu.animate([
                { opacity: '1' },
                { opacity: '0' }
                ], {
                    duration: 300,
                    easeing: "ease-out",
                    delay: 100,
                    fill: "forwards",
            });
        
            setTimeout(function() {
                navUnderMenu.style["display"] ="none";
            }, 500);
        }
    }

    //search my toastr
    document.querySelector('.btn-search').addEventListener('click', search);
    function search(e) {
        e.preventDefault();
        let inpout = document.querySelector('.search-input');
        let toastr = document.querySelector('.my-toastr');

        if(inpout.value == '') return;

        toastr.style.display = 'block';
        document.querySelector('.my-toast-header').innerHTML = `Result: ${inpout.value}`;
        inpout.value = '';
        toastr.animate([
            { opacity: 0 },
            { opacity: 1 }
            ], {
                duration: 500,
                easeing: "ease-out",
                delay: 100,
                fill: "forwards",
        });

        setTimeout(function() {
            toastr.animate([
                { opacity: 1 },
                { opacity: 0 }
                ], {
                    duration: 300,
                    easeing: "ease-out",
                    delay: 0,
                    fill: "forwards",
            });
        }, 2500);

        setTimeout(function() {
            toastr.style.display = 'none';
        }, 3000);
    }
})(window);