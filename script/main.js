(function myMainFunction() {
    console.log("it's alive!");

    var displayShow = document.getElementById('display');
    var acButton = document.getElementById('ac');

    var calculatorInstance = new Calculator();

    /*
     Bind click on HTML buttons
     */
    function bindClickOnElement(){
        var equalsButton = document.getElementById('equals');
        var myNumber = document.getElementsByClassName("numbers");
        var myOperator = document.getElementsByClassName("operator");

        var i;
        // Bind numbers

        for ( i = 0; i < myNumber.length; i++) {
            myNumber[i].addEventListener('click', function (event) {
                console.log("you pressed " + this.id);

                var inputValue = this.getAttribute("data-value");
                calculatorInstance.saveInput(inputValue,
                    function onInputSaved(inputArray, resultGiven) {
                        console.log(inputArray);

                        acButton.innerHTML = 'C';

                        displayShow.innerHTML += inputValue;
                 })

            });
        }

        // Bind operators
        for (i = 0; i < myOperator.length; i++) {
            myOperator[i].addEventListener('click', function (ev) {
                calculatorInstance.saveInput(this.getAttribute("data-operator"),
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
     Bind keyboord
     */

// here you can separate keyboard and click
    var mySecondCalculator = calculatorInstance;

    function bindKeyboardInput(){
        document.addEventListener('keydown', function (event) {

                //console.log(event.key, event.keyCode);
                if (event.keyCode >= 48 && event.keyCode <= 57) {
                    val = event.keyCode - 48;
                    console.log(val);

                    mySecondCalculator.saveInput(val.toString(), function (inputArray, resGiven) {
                        console.log(inputArray)
                    });


                } else if (event.keyCode == 12) {
                    console.log("cleared");
                    //displayShow.innerHTML = '';

                    var newInputArray = mySecondCalculator.empty();

                    console.log(newInputArray)

                } else if (event.keyCode == 13 || event.keyCode == 187) {

                   var result = mySecondCalculator.calculate();

                   console.log('Result is '+result);
                }

                if (event.keyCode >= 106 && event.keyCode <= 111) {
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
                            //decimal function
                            break;

                        case 109:
                            //minus function
                            mySecondCalculator.saveInput(event.key, function (inputArray, resGiven) {
                                console.log(inputArray)
                            });
                            break;

                        case 107:
                            mySecondCalculator.saveInput(event.key, function (inputArray, resGiven) {
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


    function bindAll(){
        bindClickOnElement();
        bindKeyboardInput();
    }


    bindAll();




    function clear() {

        if (resetPressed == false) {
            resetPressed = true;
            value = '';
            inputArray = [];

        } else {
            value = '';
            ac.innerHTML = 'AC';
            displayShow.innerHTML = ' ';
            inputArray = [];
        }

    }



})();





