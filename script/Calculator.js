var Calculator = function () {
    var _inputArray = [],

    _decimalAdded = false;
    _resetPressed = false;
    _resultGiven = false;
    _operatorPressed = false;

    /*
     Save number , . OR - in input array
     */
    function _updateCurrentNumber(val_1) {
        if ((val_1 == ".") && (_decimalAdded == false)) {
            _decimalAdded = true;
            console.log(_decimalAdded);

        } else if ((val_1 == ".") && (_decimalAdded == true)) {
            console.log("don't add decimal");
            return;
        }
        _inputArray.push(val_1) //los agrega al array
    } //

    /*
     Public functions
     */
    this.saveInput = function (input, callbackFunction) { //this = Calculator
        console.log("Input pressed " + input);

        if (input == '.') //|| (input == '-')) // ***
            numberInput();
        else if (isNaN(parseInt(input)))
            operatorInput();
        else
            numberInput();

        // Save operator
        function operatorInput() {
            _decimalAdded = false;
            _resultGiven = false;
            _inputArray.push(input);
        }

        // Save number
        function numberInput() {
            if (_resultGiven == true) {
                _inputArray = [];
                _resultGiven = false; //always false
            }
            _updateCurrentNumber(input);
        }

        callbackFunction(_inputArray, _resultGiven);
    };

    /*
     Sends back result
     */
    this.calculate = function () {

        if ((_inputArray.length == 0) || (_resultGiven == true)) {
            return 0;
        }

        if (_inputArray.length == 1) {
            return _inputArray[0];
        }

        var numberAndOperatorArray = [];
        var stringNumber = ''; // Número actual en string

        // Loop through input: ['1', '.', '1', '+', '1']
        for (var i = 0; i < _inputArray.length; i++) {


            // Check if current input is a number
            if (!isNaN(parseInt(_inputArray[i]))) {  // ! es un double negative
                // Concatenate number
                stringNumber += _inputArray[i];
                //inputArray es como numberArray (sin el Operator)

            } else {
                // Current input is not a number ( = it is a . or operator
                switch (_inputArray[i]) {
                    case '.':
                        stringNumber += '.'; // Agrega '.' al inputArray
                        break;

                    case '-':
                        stringNumber += '-';

                        // if ((isNaN(parseInt(_inputArray[i - 1])))) {
                        //     stringNumber += '-'; //currentNumber individually
                        // }
                        //****** works with +-1 but not with --1
                        break;
                    // Default handle all of the operator
                    default:
                        // Save number into value array
                        numberAndOperatorArray.push(parseFloat(stringNumber)); // Se llena NumberAndOperatorArray
                        // Save operator into value array
                        numberAndOperatorArray.push(_inputArray[i]);
                        // Reset current string number
                        stringNumber = '';


                }

            }
        }

        // Save last number into the value array
        if( stringNumber  != '')
            numberAndOperatorArray.push(parseFloat(stringNumber));

// PRIORITY FOR / AND *

        var result;

        // If last element in array is an operator -> Remove it
        if (isNaN((numberAndOperatorArray[numberAndOperatorArray.length - 1]))) {
            //numberAndOperatorArray[numberAndOperatorArray.length - 1] = 0;
            numberAndOperatorArray.pop();
        }

        function multCase() {
            mult = (numberAndOperatorArray [j - 1]) * (numberAndOperatorArray[j + 1]);
            numberAndOperatorArray.splice(j - 1, 3, mult);

            if (numberAndOperatorArray.length == 1) {
                result = mult;
            }
        }

        function divCase() {
            division = (numberAndOperatorArray [j - 1]) / (numberAndOperatorArray[j + 1]);
            numberAndOperatorArray.splice(j - 1, 3, division);
            if (numberAndOperatorArray.length == 1) {
                result = division;
            }
        }

        result = numberAndOperatorArray[0];


// ADD AND SUBS INTO STRING

        for (var j = 1; j < numberAndOperatorArray.length; j++) {
            switch (numberAndOperatorArray[j]) {

                case '×':
                    multCase();
                    break;

                case '÷':
                    divCase();
                    break;
            }
        }


        for (var j = 0; j < numberAndOperatorArray.length; j++) {
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

        if (numberAndOperatorArray.length == 1) {
            result = numberAndOperatorArray[0];
        }

        console.log(result);
        _inputArray = [result];

        _resultGiven = true;
        _decimalAdded = false;


        result = Math.round(result * 1000)/1000;
        return result;

    };

    /*
     Reset calculation
     */
    this.empty = function () {
        _resultGiven = true;
        _resetPressed = true;
        _inputArray = [];

        return _inputArray;
    };

    return this;
};
