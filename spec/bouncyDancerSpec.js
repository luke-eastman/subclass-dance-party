describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 20, timeBetweenSteps);
    //blinkyDancer = makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node bounce', function() {
    sinon.spy(bouncyDancer, 'bounce');
    bouncyDancer.step();
    expect(bouncyDancer.bounce.called).to.be.true;
  });

  describe('bounce', function() {
    it('should call bounce at least once per second', function() {
      sinon.spy(bouncyDancer, 'bounce');
      expect(bouncyDancer.bounce.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(bouncyDancer.bounce.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.bounce.callCount).to.be.equal(2);
    });
  });
});