(function() {
    var hamburgerButton = document.querySelector('.js-hamburger');
    var navBar = document.querySelector('.js-navbar');

    var toggleClass = function(element, targetClass) {
        var regex1 = new RegExp(targetClass);
        var regex2 = new RegExp('(.*)(' + targetClass + ')(.*)');
        if(regex1.test(element.className)) {
            element.className =
                element.className.replace(regex2, "$1 $3");
        }
        else
            element.className += " " + targetClass;
    };

    toggleClass(hamburgerButton, 'u-removed');
    toggleClass(navBar, 'u-removed');

    hamburgerButton.addEventListener('mousedown', function() {
        toggleClass(navBar, 'u-removed');
        toggleClass(hamburgerButton, 'u-bkgcolor-lining')
    })
})();
