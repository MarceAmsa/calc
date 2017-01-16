(function myMainFunction(){
  console.log("it's alive!");

  var numbers = document.getElementsByClassName("numbers");

  numbers.id.addEventListener('click', function (ev){
    console.log("number button PRESSED ");
    console.log("the target ID is..." + ev.target.id);

  })

})();

NOTES

x = first number pressed,
y = second number pressed

x+y = x
if suma is activated

x + second number pressed = y
