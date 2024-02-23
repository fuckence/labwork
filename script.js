document.querySelector("#addition").addEventListener('click', addition);

function addition(){
    var a = parseInt(document.querySelector('#input_first').value);
    var b = parseInt(document.querySelector('#input_second').value);
    var c = a + b;
    document.querySelector('#output_result').value = c;

}

document.querySelector("#substraction").addEventListener('click', substraction);
function substraction(){
    var a = parseInt(document.querySelector('#input_first').value);
    var b = parseInt(document.querySelector('#input_second').value);
    var c = a - b;
    document.querySelector('#output_result').value = c;
}

document.querySelector("#divide").addEventListener('click', divide);
function divide(){
    var a = parseInt(document.querySelector('#input_first').value);
    var b = parseInt(document.querySelector('#input_second').value);
    var c = a / b;
    document.querySelector('#output_result').value = c;
}

document.querySelector("#multiplication").addEventListener('click', multiplication);
function multiplication(){
    var a = parseInt(document.querySelector('#input_first').value);
    var b = parseInt(document.querySelector('#input_second').value);
    var c = a * b;
    document.querySelector('#output_result').value = c;
}