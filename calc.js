(function myMainFunction(){
  console.log("it's alive!");


  var myNumber = document.getElementsByClassName("numbers");
  var displayShow = document.getElementById('display');
  var addOp = document.getElementById('add');
  var acButton = document.getElementById('ac');

  var myFunction = function () {
    var attribute = this.getAttribute("data-value");
    alert(attribute);
  };

  for (var i = 0; i < myNumber.length; i++) {
      myNumber[i].addEventListener('click', function (event){
        console.log("you pressed " + this.id);


        updateValue( this.getAttribute("data-value") );
      });
  }

  var value = '';
  function updateValue(val_1){
      // Store value
      value += val_1;
      // Display update
      displayShow.innerHTML += val_1;
      // value = parseFloat (value) + parseFloat (value_2);
  }


var clear = false;
  addOp.addEventListener ('click', function (ev) {
    clear = true;
    console.log(clear);
  });

var reset = false;
    if (clear == true) {
      for (var i = 0; i < myNumber.length; i++) {
      myNumber[i].addEventListener('click', function (event){
      clear == false;
      reset == true;
      value = '';
    });
  }
}


  acButton.addEventListener('click', function (ev){
    console.log("resetPressed");
    displayShow.innerHTML = ' ';
  })


})();



// Operators for functions
