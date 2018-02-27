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
