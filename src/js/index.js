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
