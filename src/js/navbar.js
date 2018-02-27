var Navbar = function(context) {
    var menu = context.querySelector('.js-navbar__menu');

    this.toggleMenu = function(e) {
        menu.classList.toggle('u-removed');
        e.target.classList.toggle('u-shadowed');
    };
};

var navbar = new Navbar(document.querySelector('.js-navbar'));
