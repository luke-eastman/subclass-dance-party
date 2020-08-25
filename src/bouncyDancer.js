var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy-dancer');
  this.$node.prepend('<img src="https://img.icons8.com/material-outlined/50/000000/stormtrooper.png" style="background-color:white"/>');
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

BouncyDancer.prototype.lineUp = function(index, noOfDancers) {
  this.oldLineUp = Dancer.prototype.lineUp;
  this.oldLineUp(index, noOfDancers);
  var styleSettings = {
    borderColor: 'green',
  };
  this.$node.css(styleSettings);
};