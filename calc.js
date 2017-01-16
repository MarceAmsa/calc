(function myMainFunction(){
  console.log("it's alive!");


  var myNumber = document.getElementsByClassName("numbers");
  var displayShow = document.getElementById('display');

  var myFunction = function () {
    var attribute = this.getAttribute("data-value");
    alert(attribute);
  };

  for (var i = 0; i < myNumber.length; i++) {
      myNumber[i].addEventListener('click', function (event){
        console.log("number button PRESSED ");
        console.log("the target ID is..." + this.id);


        updateValue( this.getAttribute("data-value") );
      });
  }

  var value = '';
  function updateValue(val_1){
      // Store value
      value += val_1;
      value = parseFloat (value);
      // Display update
      displayShow.innerHTML += value;
  }







})();



// Operators for functions
