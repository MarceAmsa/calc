/**
 * Created by marcela_salas on 31/01/17.
 */

function a(){
    console.log('A');
}

function b(){
    console.log('B');
}


function saySomething(somethingToSay_STRING){

    console.log(somethingToSay_STRING);
}

// a();
// b();

function sayCandSomethingElse(firstString, somethingElse_which_is_a_callback_function){

    console.log(firstString);

    somethingElse_which_is_a_callback_function(' Marcela');
}


sayCandSomethingElse('Hello', function () {
    
});