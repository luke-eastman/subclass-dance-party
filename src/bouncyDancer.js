var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy-dancer');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.bounce();

};

BouncyDancer.prototype.bounce = function() {
  this.$node.animate({
    marginTop: '-=' + 15
  }, 1000).animate({
    marginTop: '+=' + 15
  }, 1000);
};
