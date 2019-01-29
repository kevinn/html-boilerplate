(function () {

  var testButton = document.getElementById('button');

  var buttonClick = function(e) {
    e.preventDefault();
    console.log('button is pressed');
  };

  testButton.addEventListener('click', buttonClick, false);

})();