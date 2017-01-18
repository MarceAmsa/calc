(function myMainFunction() {
    console.log("it's alive!");


    var myNumber = document.getElementsByClassName("numbers");
    var displayShow = document.getElementById('display');
    var addOp = document.getElementById('add');
    var acButton = document.getElementById('ac');
    var equalsButton = document.getElementById('equals');

    var myFunction = function () {
        var attribute = this.getAttribute("data-value");
        alert(attribute);
    };

    for (var i = 0; i < myNumber.length; i++) {
        myNumber[i].addEventListener('click', function (event) {
            console.log("you pressed " + this.id);

            updateValue(this.getAttribute("data-value")); // conectado con la variable update value de abajo
        });
    }

    var result = '';

    // Save user's input
    inputArray = [];

    function updateValue(val_1) { // acá jala los atributos de data value que habían arriba
        // Display update
        displayShow.innerHTML += val_1;
        inputArray.push(val_1) //suma los inputs que se realizar a inputArray
    }

//CLEAR DISPLAY

    var clear = false;
    addOp.addEventListener('click', function (ev) {

        inputArray.push('+'); //como no es tecla de número hay que especificar, cuando estripa + meta + en el string


        displayShow.innerHTML = ''; // have clear del display


    });

    function inputParser(){
        var numberAndOperatorArray = []; // se nombra las variables no hace nada

        var currentNumber = ''; // nse nombra la variable, tampoco hace nada

        // Loop through input: ['1', '.', '1', '+', '1']
        for( var i=0 ; i < inputArray.length ; i++ ){ // viene de la función update value, va uno por uno

            // Check if current input is a number
            if( ! isNaN( parseInt(inputArray[i]) ) ){  //isNaN es "no es número" pero con ! es lo contrario ósea "es número"
                // Concatenate number
                // input array son todos los botones que se presionaron anteriormente lo que genera una lista, que luego se concatena
                currentNumber += inputArray[i]; //inputArray es una lista diferente a numberAndOperatorArray
                //la línea alimenta todos los currentnumber a input array que está arriba como variable definida

            } else {
                // Current input is not a number ( = it is a . or operator
                switch(inputArray[i]){
                    case '.':
                        currentNumber += '.'; // si en esa lista hay un punto, entonces el punto se mete dentro del número
                    break;
                    // Default handle all of the operator
                    default:
                        // Save number into value array
                        numberAndOperatorArray.push(parseFloat(currentNumber)); //ACÁ es que se empieza a crear el numberOperatorArray, antes de eso estaba solamente vacía

                        // Save operator into value array
                        numberAndOperatorArray.push(inputArray[i]);

                        // Reset current number
                        currentNumber = ''

                }
            }
        }

        // Save last number into the value array
        numberAndOperatorArray.push(parseFloat(currentNumber));


        // Contain the calculation result - Save first number in
        var result = numberAndOperatorArray[0];

        // Loop through number and operators
        for( var j=1 ; j < numberAndOperatorArray.length ; j++ ){

            // If not a number -> Do operation against the next number (j+1)
            if( isNaN(numberAndOperatorArray[j])){
                // Check which operator this is
                switch(numberAndOperatorArray[j]){
                    case '+':
                        result += numberAndOperatorArray[j+1];
                        break;
                    case '-':
                        result -= numberAndOperatorArray[j+1];
                    break;
                }
            }
        }

        console.log(result)




    }

    equalsButton.addEventListener('click', function (ev) {

        inputParser();

        // if (clear == true){
        //     y = value ; // y = value -x; as a string
        //     clear = false;
        // }
        // console.log("result must be shown");
        // // value = parseFloat(value) + parseFloat(value_2);
        // result = parseFloat(x) + parseFloat(value);
        // displayShow.innerHTML = result;

    })


// AC RESET BUTTON ------------------
    acButton.addEventListener('click', function (ev) {
        console.log("resetPressed");
        value = '';
        displayShow.innerHTML = ' ';

    })


})();


// Operators for functions
