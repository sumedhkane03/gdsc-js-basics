console.log("Hello World!");

const a = 1;

console.log("a: " + a);

document.getElementById('paragraph1').textContent = 'Hello!';

function add(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    document.getElementById('result').textContent = "A + B = " + (parseInt(a) + parseInt(b));
}

function subtract(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    document.getElementById('result').textContent = "A - B = " + (parseInt(a) - parseInt(b));
}

function multiply(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    document.getElementById('result').textContent = "A * B = " + (parseInt(a) * parseInt(b));
}

function divide(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;

    if(b === '0'){
        alert('Cannot divide by zero');
        return;
    }

    document.getElementById('result').textContent = "A / B = " + (parseInt(a) / parseInt(b));
}

function fizzBuzz(){
    var num = parseInt(document.getElementById('num').value);

    if(num % 3 === 0 && num % 5 === 0){
        document.getElementById('fizzorbuzz').textContent = "FizzBuzz";
    }else if(num % 3 === 0){
        document.getElementById('fizzorbuzz').textContent = "Fizz";
    }else if(num % 5 === 0){
        document.getElementById('fizzorbuzz').textContent = "Buzz";
    }else{
        document.getElementById('fizzorbuzz').textContent = "Not Fizz or Buzz :(";
    }
}
