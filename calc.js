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


            updateValue(this.getAttribute("data-value"));
        });
    }

    var value = '';
    var x = '';
    var y = '';
    var result = '';

    function updateValue(val_1) {
        // Store value
        value += val_1;
        // Display update
        displayShow.innerHTML += val_1;

        // value = parseFloat (value) + parseFloat (value_2);
    }

//CLEAR DISPLAY

    var clear = false;
    addOp.addEventListener('click', function (ev) {
        clear = true;
        console.log(clear);
        x = value;
        displayShow.innerHTML = myNumber[i];


        for (var i = 0; i < myNumber.length; i++) { //UNDEFINED ERROR HERE although it works and clears out value
            myNumber[i].addEventListener('click', function (event) {
                if (clear == true) {


                    clear = false;

                    y = value;
                    console.log(clear);
                    console.log("reset done");
                    //displayShow.innerHTML = myNumber[i];

                    //algo acerca de value_2

                }
            });
        }
    });


// RESULT BUTTON ------------------

    equalsButton.addEventListener('click', function (ev) {
        console.log("result must be shown");
        // value = parseFloat(value) + parseFloat(value_2);
        result = parseFloat(x);
        displayShow.innerHTML = result;

    })


// AC RESET BUTTON ------------------
    acButton.addEventListener('click', function (ev) {
        console.log("resetPressed");
        value = '';
        displayShow.innerHTML = ' ';

    })


})();


// Operators for functions
