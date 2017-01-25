(function myMainFunction() {
    console.log("it's alive!");

    var myNumber = document.getElementsByClassName("numbers");
    var myOperator = document.getElementsByClassName("operator");
    var displayShow = document.getElementById('display');
    var acButton = document.getElementById('ac');
    var equalsButton = document.getElementById('equals');


    for (var i = 0; i < myNumber.length; i++) {
        myNumber[i].addEventListener('click', function (event) {
            console.log("you pressed " + this.id);
            acButton.innerHTML = 'C';

            if (resultGiven == true) {
                displayShow.innerHTML = '';
                inputArray = [];
                console.log("reset inputArray");
                resultGiven = false;
            }

            updateValue(this.getAttribute("data-value"), resultGiven); // Toma data-value del html

        });
    }

    // Save user's input
    decimalAdded = false;
    inputArray = [];
    function updateValue(val_1, reset) { // update de los números presionados

        if ((val_1 == ".") && (decimalAdded == false)) {
            decimalAdded = true;
            console.log(decimalAdded);

        } else if ((val_1 == ".") && (decimalAdded == true)) {
            console.log("don't add decimal");
            return;

        } else if (resultGiven == true) {
            console.log("don't add Number");
        }

        // Display update
        displayShow.innerHTML += val_1;
        inputArray.push(val_1) //los agrega al array

    }

    for (var i = 0; i < myOperator.length; i++) {
        myOperator[i].addEventListener('click', function (ev) {
            decimalAdded = false;
            resultGiven = false;
            console.log("operator pressed " + this.id);
            inputArray.push(this.getAttribute("data-operator"));
            displayShow.innerHTML = '';
        });
    }

    function inputParser() {
        var numberAndOperatorArray = [];
        var stringNumber = ''; // Número actual en string

        // Loop through input: ['1', '.', '1', '+', '1']
        for (var i = 0; i < inputArray.length; i++) {

            // Check if current input is a number
            if (!isNaN(parseInt(inputArray[i]))) {  // ! es un double negative
                // Concatenate number
                decimalAdded = false;
                stringNumber += inputArray[i];
                //inputArray es como numberArray (sin el Operator)

            } else {
                // Current input is not a number ( = it is a . or operator
                switch (inputArray[i]) {
                    case '.':
                        stringNumber += '.'; // Agrega '.' al inputArray
                        decimalAdded = true;
                        break;

                    // Default handle all of the operator
                    default:
                        // Save number into value array
                        numberAndOperatorArray.push(parseFloat(stringNumber)); // Se llena NumberAndOperatorArray
                        // Save operator into value array
                        numberAndOperatorArray.push(inputArray[i]);
                        // Reset current string number
                        stringNumber = '';
                }
            }
        }


// PRIORITY FOR / AND *

        var result;
        // Save last number into the value array
        numberAndOperatorArray.push(parseFloat(stringNumber));

        for (var i = 0; i < numberAndOperatorArray.length; i++) {

            if (isNaN(parseInt(numberAndOperatorArray[numberAndOperatorArray.length - 1]))) {
                numberAndOperatorArray[numberAndOperatorArray.length - 1] = 0;
            }

            if (isNaN(numberAndOperatorArray[i])) {
                // Check which operator this is

                switch (numberAndOperatorArray[i]) {
                    case '×':
                        mult = (numberAndOperatorArray [i - 1]) * (numberAndOperatorArray[i + 1]);
                        numberAndOperatorArray.splice(i - 1, 3, mult);

                        if (numberAndOperatorArray.length == 1) {
                            result = mult;
                        }
                        break;

                    case '÷':
                        division = (numberAndOperatorArray [i - 1]) / (numberAndOperatorArray[i + 1]);
                        numberAndOperatorArray.splice(i - 1, 3, division);
                        if (numberAndOperatorArray.length == 1) {
                            result = division;
                        }
                        break;
                }
            }

            result = numberAndOperatorArray[0];
        }

// ADD AND SUBS INTO STRING
        for (var j = 0; j < numberAndOperatorArray.length; j++) {

            if (numberAndOperatorArray.length == 1) {
                result = numberAndOperatorArray[0];
            }

            // If not a number -> Do operation against the next number (j+1)
            if (isNaN(numberAndOperatorArray[j])) {
                // Check which operator this is
                switch (numberAndOperatorArray[j]) {
                    case '+':
                        result += (numberAndOperatorArray [j + 1]);
                        break;

                    case '-':
                        result -= (numberAndOperatorArray [j + 1]);
                        break;
                }
            }
        }

        console.log(result);
        inputArray = [result];
        displayShow.innerHTML = result;
    }

    // RESULT ------------------
    resultGiven = false;
    equalsButton.addEventListener('click', function (ev) {

        if ((inputArray.length == 0) || (resultGiven == true)) {
            return
        }

        if (inputArray.length == 1) {
            return inputArray[i];
        }

        inputParser(); // efectuar la función
        resultGiven = true;
        decimalAdded = false;
        console.log(resultGiven);

    });

    // AC RESET BUTTON ------------------
    var resetPressed = false;
    acButton.addEventListener('click', function (ev) {

        resultGiven = false;
        if (resetPressed == false) {
            resetPressed = true;
            value = '';
            inputArray = [];

        } else {
            value = '';
            ev.target.innerHTML = 'AC';
            displayShow.innerHTML = ' ';
            inputArray = [];
        }
    })

    document.addEventListener("keydown", function (event) {
        switch (event.keyCode) {
            case
        }

    })

})();





