(function() {
    'use strict';

    var Slider = function(context) {
        var scrollStep = context.children[0].clientWidth;
        var scrollIncrement = 2;
        var index;
        var targetPosition;
        var buttonPrev = document.createElement('div'),
            buttonNext = document.createElement('div');
        Array.prototype.forEach.call(context.children, function(current) {
            current.className += " u-inline-block";
        });
        buttonPrev.className = "gallery__previous"
        buttonNext.className = "gallery__next"
        context.appendChild(buttonPrev);
        context.appendChild(buttonNext);
        buttonPrev.addEventListener('click', function() {
            this.slideView(-1);
        }.bind(this));
        buttonNext.addEventListener('click', function() {
            this.slideView(1);
        }.bind(this));

        var animate = function() {
            console.log(context.scrollLeft);
            if ((targetPosition - (context.scrollLeft +
                    scrollIncrement * index)) * index > 0) {
                context.scrollLeft += scrollIncrement * index;
                scrollIncrement += 1.2;
                requestAnimationFrame(animate);
            } else if (context.scrollLeft + scrollIncrement > targetPosition) {
                context.scrollLeft = targetPosition;
                console.log(context.scrollLeft);
                scrollIncrement = 2;
            }
        }

        this.slideView = function(newIndex) {
            index = newIndex;
            targetPosition = context.scrollLeft + scrollStep * index;
            console.log('target position is: ' + targetPosition);
            if (index == -1 && context.scrollLeft > 0)
                animate();
            else if (index == 1 && context.scrollLeft + context.clientWidth <
                    context.scrollWidth)
                animate();
        }
    }

    var slider = new Slider(document.querySelector('.js-gallery__container'));
})();
