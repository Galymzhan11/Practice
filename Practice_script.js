var info = "<h3>Beketay Galymzhan, CS-2118</h3>";
var year = new Date().getFullYear();
var today = new Date().getDate();
var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var day = weekday[new Date().getDay()];
var m = ["January","February","March","April","May","June ","July","August","September","October","November","December"];
var month = m[new Date().getMonth()];
var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
document.write("<h2>1.</h2>");
document.write(info);
document.write("<h2>2.</h2>");
document.write("Year: " + year + "<br>");
document.write("Today is : " + day + "<br>");
document.write("Date: " + today + "<br>");
document.write("Month: " + month + "<br>");
document.write("Current time is " + time + "<br>");
var graduateYear = 2024 - year;
var graduateMonth = (12 - new Date().getMonth());
var graduateDay = 15;
var total = ((graduateMonth * 30) + (graduateYear * 365) + graduateDay) - new Date().getDay();
document.write("<h2>3.</h2>");
document.write(total + " days left until the freedom!");
document.write("<h2>4.</h2>");
function multiply() {
	var a = document.getElementById("frnum").value;
	var b = document.getElementById("scnum").value;
	document.getElementById("res").innerHTML = a * b; 
}
function divide() {
	var a = document.getElementById("frnum").value;
	var b = document.getElementById("scnum").value;
	document.getElementById("res").innerHTML = a / b; 
}