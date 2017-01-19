(function myMainFunction() {
    console.log("it's alive!");


    var myNumber = document.getElementsByClassName("numbers");
    var myOperator = document.getElementsByClassName("operator");
    var displayShow = document.getElementById('display');
    var acButton = document.getElementById('ac');
    var equalsButton = document.getElementById('equals');


    // var myFunction = function () {
    //     var attribute = this.getAttribute("data-value");
    //     alert(attribute);
    // };

    for (var i = 0; i < myNumber.length; i++) {
        myNumber[i].addEventListener('click', function (event) {
            console.log("you pressed " + this.id);
            acButton.innerHTML = 'C';
            updateValue(this.getAttribute("data-value")); // conectado con la variable update value de abajo

            if (resultGiven == true) {
             //displayShow.innerHTML = inputArray[i];
                resultGiven = false;


            }
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

// ----------------------

    for( var i = 0 ; i < myOperator.length ; i++ ){
        myOperator[i].addEventListener('click', function (ev) {
                console.log("operator pressed ");
                inputArray.push(this.getAttribute("data-operator"));
                displayShow.innerHTML = '';
            });
    }


    function inputParser(){
        var numberAndOperatorArray = []; // se nombra las variables no hace nada

        var stringNumber = ''; // se nombra la variable, tampoco hace nada

        // Loop through input: ['1', '.', '1', '+', '1']
        for( var i=0 ; i < inputArray.length ; i++ ){ // viene de la función update value, va uno por uno

            // Check if current input is a number
            if( ! isNaN( parseInt(inputArray[i]) ) ){  //isNaN es "no es número" pero con ! es lo contrario ósea "es número"
                // Concatenate number
                // input array son todos los botones que se presionaron anteriormente lo que genera una lista, que luego se concatena
                stringNumber += inputArray[i]; //inputArray es una lista diferente a numberAndOperatorArray
                //la línea alimenta todos los currentnumber a input array que está arriba como variable definida

            } else {
                // Current input is not a number ( = it is a . or operator
                switch(inputArray[i]){
                    case '.':
                        stringNumber += '.'; // si en esa lista hay un punto, entonces el punto se mete dentro del número
                    break;
                    // Default handle all of the operator
                    default:
                        // Save number into value array
                      numberAndOperatorArray.push(parseFloat(stringNumber)); //ACÁ es que se empieza a crear el numberOperatorArray, antes de eso estaba solamente vacía

                        // Save operator into value array
                       numberAndOperatorArray.push(inputArray[i]);

                        // Reset current number
                        stringNumber = ''

                }
            }
        }

        // Save last number into the value array
        numberAndOperatorArray.push(parseFloat(stringNumber));


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
                        result -= numberAndOperatorArray[j+1]; //needs adEventListener
                        break;

                    case '÷':
                        result /= numberAndOperatorArray[j+1]; //needs adEventListener
                        break;

                    case '×':
                        result *= numberAndOperatorArray[j+1]; //needs adEventListener
                        break;

                }
            }
        }

        console.log(result)
        displayShow.innerHTML = result;


    }

    // RESULT ------------------
    resultGiven = false;
    equalsButton.addEventListener('click', function (ev) {
        inputParser(); // efectuar la función

        resultGiven = true;
        console.log(resultGiven);
    })


    var resetPressed = false;


    // AC RESET BUTTON ------------------
        acButton.addEventListener('click', function (ev) {


            if (resetPressed == false) {
            resetPressed = true;
            value = '';
            inputArray = [];

            } else {

            value = '';
            ev.target.innerHTML = 'AC';
            displayShow.innerHTML = ' ';
            inputArray = [];
          //  resetPressed = false;

            }
        })

})();



// Operators for functions


// Tengo numberAnd [] y inputArray [i]
//
// Presiono tecla 3 el proceso es:
//
// 3 ! NaN es true
//
// entonces inputArray ["3"]
// stringNumber = "3"
//
// Presiono tecla 5 el proces es:
//
// 5 ! NaN es true
//
// entonces inputArray es ["3", "5"];
// stringNumber es "35"
//
// Presiono "+"
//
// Ahora + ! NaN false
// entonces
// numberAnd [parseFloat de "35"]
// lo hace numberAnd [35]
//
// y luego
// numberAnd [35, "+"]
// stringNumber = ''
//
// esto sólo genera el string nada más
// cuando se tiene por ejemplo numberAnd [33, 'x', 55]
// se presiona '='
//
// dice que ahora el numberAnd [0] es asignado en result (nada cambia en el array sólo se asigna para que el registro del array vaya de 0... en adelante)
//
//
// luego se va a través del array con j++. De ahí sigue hasta que se topa con un NaN
//
// dependiendo del caso hace cosas diferentes pero en el caso de la suma es
// result += numberAndOperatorArray[j+1];
// lo que quiere decir  que es el número parsed de "StringNumber" más el que le sigue a "+" (siendo + en ese momento numberAnd[j] por ende
// numberAnd[j+1] es el que le sigue en la lista)



