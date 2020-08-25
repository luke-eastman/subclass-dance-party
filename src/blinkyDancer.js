var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky-dancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function(index, noOfDancers) {
  this.oldLineUp = Dancer.prototype.lineUp;
  this.oldLineUp(index, noOfDancers);
  var styleSettings = {
    borderWidth: '+=5',
    borderRadius: '+=5'
  };
  this.$node.css(styleSettings);
};