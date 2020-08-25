// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();

  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var func = this.step.bind(this);
  setTimeout(func, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(index, noOfDancers) {
  var startingPoint = 15; // === '15%';
  var top = 85 / noOfDancers * index + startingPoint;
  top = top + '%';
  //convert to % before passing to setPosition
  var left = index % 2 ? '15%' : '85%';
  this.setPosition(top, left);
};

Dancer.prototype.moveAway = function(index) {
  var left = index % 2 ? '+=15px' : '-=15px';
  this.setPosition(this.top, left);
};