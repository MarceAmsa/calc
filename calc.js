(function myMainFunction(){
  console.log("it's alive!");


  var myNumber = document.getElementsByClassName("numbers");
  var displayShow = document.getElementById('display');
  var addOp = document.getElementById('add');

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
  for (var i = 0; i < myNumber.length; i++) {
    myNumber[i].addEventListener('click', function (event){
      if (clear == true) {
        clear == false;
        displayShow.innerHTML = val_2; //NO SIRVE
      }
  });
}


var reset = false;
  for (var i = 0; i < myNumber.length; i++) {
    myNumber[i].addEventListener('click', function (event){
      if (clear == true) {
        clear == false;
        displayShow.innerHTML = val_2; //NO SIRVE

        var newValue = '';
        function updateValue(val_2) {
          newValue += val_2;
          displayShow.innerHTML += parseFloat (newValue) + parseFloat(value);
        }
      }
  });
}
// function clickNumero() {
// if(reset == true) {
// limpiarDisplay;
// reset = false;
// }
// agregarValorAlDisplay();
// }







})();



// Operators for functions
