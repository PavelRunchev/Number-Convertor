
(function() {
    "use strict";

    let fromStorage = localStorage.getItem('isAccpetCookie');
    let allCookies = document.cookie.split(' ').some(c => c == 'isAccpetCookie=true');

    if(fromStorage == 'true' || allCookies == true) { } 
    else {
        cookieInfo();
    }

    function cookieInfo() {

        let btnAccept = document.querySelector('.btn-cookies-accept');
        let btnLearnMore = document.querySelector('.btn-cookies-learn-more');
        let btnBackToCookieInfo = document.querySelector('.btn-cookies-info-learn-more-back');
        let cookieContainer = document.querySelector('.cookies-info-container');
        let learnMoreInfoCookieContainer = document.querySelector('.cookies-info-learn-more-container');

        if(btnAccept == null || btnLearnMore == null || btnBackToCookieInfo == null 
            || cookieContainer == null || learnMoreInfoCookieContainer == null)
            globalFunc.ErrorDOMElement();

        setTimeout(function() {
            showCookie(cookieContainer, 'flex');
        }, 1000);

        btnAccept.addEventListener('click', acceptCookies);
        btnLearnMore.addEventListener('click', learnMoreCookies);
        btnBackToCookieInfo.addEventListener('click', backToCookieInfo);

        function acceptCookies(e) {
            e.preventDefault();
            hideCookie(cookieContainer);
            localStorage.setItem('isAccpetCookie', 'true');
            document.cookie = 'isAccpetCookie=true; SameSite=none; secure=true';
        }

        function learnMoreCookies(e) {
            e.preventDefault();
            hideCookie(cookieContainer);
            showCookie(learnMoreInfoCookieContainer, 'block');
        }

        function backToCookieInfo(e) {
            e.preventDefault();
            hideCookie(learnMoreInfoCookieContainer);
            showCookie(cookieContainer, 'flex');
        }

        function hideCookie(element) {
            element.animate([
                { opacity: 1 },
                { opacity: 0 }
                ], {
                    duration: 300,
                    easeing: "ease-out",
                    delay: 0,
                    fill: "forwards",
            });

            setTimeout(function() {
                element.style.display = 'none';
            }, 300);
        }

        function showCookie(element, show) {
            element.style.display = show;
            setTimeout(function() {
                element.animate([
                    { opacity: 0 },
                    { opacity: 1 }
                    ], {
                        duration: 300,
                        easeing: "ease-out",
                        delay: 0,
                        fill: "forwards",
                });
            }, 200);
        }
    }
})(window);




