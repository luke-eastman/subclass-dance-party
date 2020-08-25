var SizeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('size-dancer');
};

SizeDancer.prototype = Object.create(Dancer.prototype);
SizeDancer.prototype.constructor = SizeDancer;

SizeDancer.prototype.step = function() {
  this.oldStep = Dancer.prototype.step;
  this.oldStep();
  this.resize();

};

SizeDancer.prototype.resize = function() {
  this.$node.animate({
    borderWidth: '+=' + 15,
    borderRadius: '+=' + 15,
    color: 'red'
  }, 1000).animate({
    borderWidth: '-=' + 15,
    borderRadius: '-=' + 15,
    color: 'red'
  }, 1000);
};

