// requires: navbar.js

var Button = function(context) {

    this.registerEvent = function(event, callback) {
        context.addEventListener(event, callback);
    }
}

var navbarButton = new Button(document.querySelector('.js-button--navbar'));
navbarButton.registerEvent('click', navbar.toggleMenu);
