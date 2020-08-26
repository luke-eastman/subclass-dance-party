$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(i, window.dancers.length);
    }
  });

  $('.moveButton').on('click', function(event) {
    // iterate through all dancers and get their positions
    // run some math function to determine distance between each pair of dancers
    // if any of the dancer pairs are too close, run the move away function on both
    var needsToMove = [];
    var minimumDistance = 200;

    for (var i = 0; i < window.dancers.length - 1; i++) {
      for (var j = i + 1; j < window.dancers.length; j++) {
        var widthDist = Math.pow(window.dancers[i].$node.position().left - window.dancers[j].$node.position().left, 2);
        var heightDist = Math.pow(window.dancers[i].$node.position().top - window.dancers[j].$node.position().top, 2);
        var distance = Math.sqrt(heightDist + widthDist);
        if (distance <= minimumDistance) {
          needsToMove.push([i, j]);//[[1,3], [2,4], [3,5], [4,6], [5,7]]
        }
      }

    }
    var alreadyMoved = [];
    for (var i = 0; i < needsToMove.length; i++) {
      var tuple = needsToMove[i];
      if (!alreadyMoved.includes(tuple[0])) {
        window.dancers[tuple[0]].moveAway(tuple[0]);
        alreadyMoved = alreadyMoved.concat(tuple);
      }
    }
  });
});