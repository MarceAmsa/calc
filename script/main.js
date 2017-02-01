(function myMainFunction() {
    console.log("it's alive!");

    var displayShow = document.getElementById('display');
    var acButton = document.getElementById('ac');

    var calculatorInstance = new Calculator();

    /*
     Bind click on HTML buttons
     */
    function bindClickOnElement() {
        var equalsButton = document.getElementById('equals');
        var myNumber = document.getElementsByClassName("numbers");
        var myOperator = document.getElementsByClassName("operator");

        var i;

        // Bind numbers
        for (i = 0; i < myNumber.length; i++) {
            myNumber[i].addEventListener('click', function (event) {

                console.log("you pressed " + this.id);

                var inputValue = this.getAttribute("data-value");
                calculatorInstance.saveInput(inputValue,
                    function onInputSaved(inputArray, resultGiven) {
                        console.log(inputArray);

                        acButton.innerHTML = 'C';
                        if (inputArray.length == 1) {
                            displayShow.innerHTML = inputValue;
                        } else {
                            displayShow.innerHTML += inputValue;
                        }

                    })
            });
        }

        // Bind operators
        for (i = 0; i < myOperator.length; i++) {
            myOperator[i].addEventListener('click', function (ev) {

                var operator = this.getAttribute("data-operator");
                calculatorInstance.saveInput(operator,
                    function onInputSaved(inputArray, resultGiven) {
                        console.log(inputArray);

                        displayShow.innerHTML = '';

                    });
            });
        }


        // Bind enter button

        equalsButton.addEventListener('click', function () {
            displayShow.innerHTML = calculatorInstance.calculate();
        });
        // Bind clear button
        acButton.addEventListener('click', function () {

            calculatorInstance.empty();
            displayShow.innerHTML = '';
        });
    }

    /*
     Bind keyboard
     */

//If you comment this then you get the regular calculator
    //var mySecondCalculator = new Calculator();
    var mySecondCalculator = new Calculator();


    function bindKeyboardInput() {
        document.addEventListener('keydown', function (event) {

                //console.log(event.key, event.keyCode);
                if ((event.keyCode >= 48 && event.keyCode <= 57) ) {

                        val = event.keyCode - 48;
                        console.log(val);

                        mySecondCalculator.saveInput(val.toString(), function (inputArray, resGiven) {
                        console.log(inputArray)
                        displayShow.innerHTML += val;
                    });


                } else if (event.keyCode == 12) {
                    console.log("cleared");
                    var newInputArray = mySecondCalculator.empty();
                    console.log(newInputArray)
                    displayShow.innerHTML = '';


                } else if (event.keyCode == 13 || event.keyCode == 187) {

                    var result = mySecondCalculator.calculate();

                    console.log('Result is ' + result);
                    displayShow.innerHTML = result;
                }

                if (event.keyCode >= 106 && event.keyCode <= 111) {
                    displayShow.innerHTML = '';
                    switch (event.keyCode) {
                        case 111:
                            mySecondCalculator.saveInput("÷", function (inputArray, resGiven) {
                                console.log(inputArray)
                            });
                            //division function
                            break;

                        case 110:
                            mySecondCalculator.saveInput('.', function (inputArray, resGiven) {
                                console.log(inputArray)
                            });
                            break;

                        case 109:
                            //minus function
                            mySecondCalculator.saveInput('-', function (inputArray, resGiven) {
                                console.log(inputArray)
                            });
                            break;

                        case 107:
                            mySecondCalculator.saveInput('+', function (inputArray, resGiven) {
                                console.log(inputArray)
                            });
                            //add function
                            break;

                        case 106:
                            // times function
                            mySecondCalculator.saveInput("×", function (inputArray, resGiven) {
                                console.log(inputArray)
                            });
                            break;

                        default:

                            return;
                    }
                }
            }, true
        );

    }

    // always call all the functions from the whole
    function bindAll() {
        bindClickOnElement();
        bindKeyboardInput();
    }

    //then call the "whole" function
    bindAll();

})();





