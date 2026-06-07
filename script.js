document.getElementById("healthForm").addEventListener("submit",function(e){

e.preventDefault();

let age=parseInt(document.getElementById("age").value);
let height=parseFloat(document.getElementById("height").value);
let weight=parseFloat(document.getElementById("weight").value);
let sleep=parseFloat(document.getElementById("sleep").value);
let water=parseFloat(document.getElementById("water").value);
let exercise=parseInt(document.getElementById("exercise").value);
let calories=parseInt(document.getElementById("calories").value);

let bmi=(weight/((height/100)*(height/100))).toFixed(2);

let bmr=Math.round(10*weight+6.25*height-5*age+5);

let calorieNeed=Math.round(bmr*1.3);

let recommendedWater=(weight*0.033).toFixed(2);

let data={age,height,weight,sleep,water,exercise,calories,bmi,bmr,calorieNeed,recommendedWater};

localStorage.setItem("healthData",JSON.stringify(data));

/* weekly history */

let history=JSON.parse(localStorage.getItem("weeklyData"))||[];

history.push(data);

if(history.length>7) history.shift();

localStorage.setItem("weeklyData",JSON.stringify(history));

window.location.href="dashboard.html";

});
