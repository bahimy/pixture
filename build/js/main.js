var Navbar = function(context) {
    var menu = context.querySelector('.js-navbar__menu');

    this.toggleMenu = function(e) {
        menu.classList.toggle('u-removed');
        e.target.classList.toggle('u-shadowed');
    };
};

var navbar = new Navbar(document.querySelector('.js-navbar'));

// requires: navbar.js

var Button = function(context) {

    this.registerEvent = function(event, callback) {
        context.addEventListener(event, callback);
    }
}

var navbarButton = new Button(document.querySelector('.js-button--navbar'));
navbarButton.registerEvent('click', navbar.toggleMenu);

var cards = [];

var Card = function(context) {
    this.toggleClass = function(clss) {
        classes = context.className.split(" ");
        if (classes.indexOf(clss) != -1) {
            classes.splice(classes.indexOf(clss), 1);
        } else {
            classes.push(clss);
        }
        context.className = classes.join(" ");
        return 0;
    };
    this.addClass = function(clss) {
        classes = context.className.split(" ");
        if (classes.indexOf(clss) == -1) {
            classes.push(clss);
        };
        context.className = classes.join(" ");
        return 0;
    }
    this.removeClass = function(clss) {
        classes = context.className.split(" ");
        if (classes.indexOf(clss) != -1) {
            classes.splice(classes.indexOf(clss), 1);
        };
        context.className = classes.join(" ");
        return 0;
    }
    this.reportWidth = function(clss) {
        return context.offsetWidth;
    }
};

Array.prototype.forEach.call(document.querySelectorAll('.js-card'), function(current, index) {
    cards.push(new Card(current));
});

var Button = function(className) {
    var element = document.createElement('div');
    element.className = className;
    this.addClass = function(clss) {
        classes = element.className.split(" ");
        if (classes.indexOf(clss) == -1) {
            classes.push(clss);
        };
        element.className = classes.join(" ");
        return 0;
    };
    this.removeClass = function(clss) {
        classes = element.className.split(" ");
        if (classes.indexOf(clss) != -1) {
            classes.splice(classes.indexOf(clss), 1);
        };
        element.className = classes.join(" ");
        return 0;
    };
    this.getElement = function() {
        return element;
    };
    this.addEvent = function(type, callback) {
        element.addEventListener(type, callback);
    };
};

var Slider = function(context) {
    var scrollStep = context.children[0].offsetWidth;
    var scrollIncrement = 2;
    var offsetIndex = 0;
    var slideDirection;
    var targetPosition = context.scrollLeft;
    var buttonPrev = new Button('gallery__previous');
    var buttonNext = new Button('gallery__next');
    Array.prototype.forEach.call(context.children, function(current) {
        current.className += " u-inline-block";
    });
    buttonPrev.className = "gallery__previous"
    buttonNext.className = "gallery__next"
    buttonPrev.addEvent('click', function() {
        this.slideView(-1);
    }.bind(this));
    buttonNext.addEvent('click', function() {
        this.slideView(1);
    }.bind(this));
    context.parentNode.appendChild(buttonPrev.getElement());
    context.parentNode.appendChild(buttonNext.getElement());

    var animate = function() {
        if ((targetPosition - (context.scrollLeft +
                scrollIncrement * slideDirection)) * slideDirection> 0) {
            context.scrollLeft += scrollIncrement * slideDirection;
            scrollIncrement += 1.2;
            requestAnimationFrame(animate);
        } else if (context.scrollLeft + scrollIncrement > targetPosition) {
            context.scrollLeft = targetPosition;
            scrollIncrement = 2;
        }
    };

    var updateScroll = function() {
        context.scrollLeft = offsetIndex * scrollStep;
        targetPosition = context.scrollLeft;
        return context.scrollLeft;
    };

    this.updateButtonsState = function() {
        if (targetPosition <= 0)
            buttonPrev.addClass('u-transparent');
        else
            buttonPrev.removeClass('u-transparent');
        if (targetPosition + context.offsetWidth >= context.scrollWidth)
            buttonNext.addClass('u-transparent');
        else
            buttonNext.removeClass('u-transparent');
        return null;
        /* return "" + targetPosition + " " + context.offsetWidth + " " +
            context.scrollWidth; */
    }

    this.updateButtonsState();

    this.slideView = function(newIndex) {
        slideDirection = newIndex;
        targetPosition = context.scrollLeft + scrollStep * slideDirection;
        if (slideDirection == -1 && context.scrollLeft > 0) {
            requestAnimationFrame(animate);
            offsetIndex--;
            this.updateButtonsState();
        } else if (slideDirection == 1 && context.scrollLeft +
                context.clientWidth < context.scrollWidth) {
            requestAnimationFrame(animate);
            offsetIndex++;
            this.updateButtonsState();
        }
        return null;
    };

    this.updateView = function() {
        scrollStep = context.children[0].clientWidth;
        updateScroll();
        return null;
    };
}

var slider = new Slider(document.querySelector('.js-gallery__container'));

window.addEventListener('resize', function() {
    slider.updateView();
    if (cards[0].reportWidth() <= 400) {
        cards.forEach(function(current) {
            current.addClass('card-narrow');
        })
    } else {
        cards.forEach(function(current) {
            current.removeClass('card-narrow');
        })
    }
    slider.updateButtonsState();
});

slider.updateView();
if (cards[0].reportWidth() <= 400) {
    cards.forEach(function(current) {
        current.addClass('card-narrow');
    })
} else {
    cards.forEach(function(current) {
        current.removeClass('card-narrow');
    })
}
slider.updateButtonsState();
