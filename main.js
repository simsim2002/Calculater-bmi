/* document.getElementById("calculater1").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " + sum;
});
document.getElementById("calculater2").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " + sum;
});
document.getElementById("calculater3").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " + sum;
});
document.getElementById("calculater4").addEventListener("click", function () {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "SUM : " + sum;
}); */
function myalert(){
    alert("hee")
}
function bmi(){
    var bmiw = document.getElementById("bmiw").value;
    var bmih = document.getElementById("bmih").value;
    var BMI = parseInt(bmiw)/(parseInt(bmih)**2); 
    alert("BMI : " + BMI)
}
function sum1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert("SUM : " + sum)
}
function sum2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert("SUM : " + sum)
}
function sum3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert("SUM : " + sum)
}
function sum4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert("SUM : " + sum.toFixed(2))
}
const img = document.createElement("img");
img.src="sim.jpg"
img.style.width="200px"

document.getElementById("mydiv").appendChild(img);