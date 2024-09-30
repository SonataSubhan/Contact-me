const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');
const display3 = document.getElementById('display3');

btn1.onclick = function one() {
    display1.style.display = "grid";
    display2.style.display = "none";
    display3.style.display = "none";
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "#6e4c41";
    btn3.style.backgroundColor = "#6e4c41";
    btn1.style.border = "none";

}
btn2.onclick = function two() {
    display1.style.display = "none";
    display2.style.display = "grid";
    display3.style.display = "none";
    btn1.style.backgroundColor = "#6e4c41";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "#6e4c41";
    btn2.style.border = "none";
}


btn3.onclick = function three() {
    display1.style.display = "none";
    display2.style.display = "none";
    display3.style.display = "flex";
    btn1.style.backgroundColor = "#6e4c41";
    btn2.style.backgroundColor = "#6e4c41";
    btn3.style.backgroundColor = "white";
    btn3.style.border = "none";
}
