/* LOAD DATA */

let data = JSON.parse(localStorage.getItem("healthData"));

/* DISPLAY METRICS */

bmi.textContent = data.bmi + " kg/m²";
bmr.textContent = data.bmr + " kcal/day";
calorieNeed.textContent = data.calorieNeed + " kcal/day";
recommendedWater.textContent = data.recommendedWater + " L/day";


/* HEALTH SCORE CALCULATION */

function calculateScore(){

let score = 0;
let warnings = [];

/* SLEEP */

if(data.sleep <= 3){

warnings.push("Extremely poor sleep detected (≤3 hours).");

}
else if(data.sleep >= 7 && data.sleep <= 9){

score += 25;

}
else if(data.sleep >= 5){

score += 15;
warnings.push("Sleep is below recommended levels.");

}
else{

score += 5;
warnings.push("Very low sleep duration.");

}


/* WATER */

if(data.water >= 2.5){

score += 25;

}
else if(data.water >= 1.5){

score += 15;
warnings.push("Hydration can be improved.");

}
else{

score += 5;
warnings.push("Water intake is too low.");

}


/* EXERCISE */

if(data.exercise >= 45){

score += 25;

}
else if(data.exercise >= 20){

score += 15;
warnings.push("Exercise is moderate but could increase.");

}
else{

score += 5;
warnings.push("Very low physical activity.");

}


/* BMI */

if(data.bmi >= 18.5 && data.bmi <= 24.9){

score += 25;

}
else if(data.bmi >= 17 && data.bmi <= 27){

score += 15;
warnings.push("BMI slightly outside ideal range.");

}
else{

score += 5;
warnings.push("BMI indicates possible health risk.");

}


return {score, warnings};

}


let result = calculateScore();

let score = result.score;

healthScore.textContent = score;


/* HEALTH SCORE MESSAGE */

if(score >= 90){

scoreMessage.textContent = "Outstanding lifestyle balance.";

}
else if(score >= 70){

scoreMessage.textContent = "Healthy lifestyle but can improve.";

}
else if(score >= 50){

scoreMessage.textContent = "Moderate health habits. Improvements recommended.";

}
else{

scoreMessage.textContent = "Health risk detected. Lifestyle adjustments needed.";

}


/* DISPLAY WARNINGS */

if(result.warnings.length > 0){

scoreMessage.textContent += " ⚠ " + result.warnings.join(" | ");

}


/* COLOR HEALTH SCORE INDICATOR */

if(score >= 90){

healthScore.style.color = "#00c853";   // green

}
else if(score >= 70){

healthScore.style.color = "#2196f3";   // blue

}
else if(score >= 50){

healthScore.style.color = "#ff9800";   // orange

}
else{

healthScore.style.color = "#ff3b3b";   // red

}



/* CHARTS */

/* Calories Chart */

new Chart(calorieChart,{
type:"bar",
data:{
labels:["Calories"],
datasets:[{
data:[data.calories],
backgroundColor:"#FF6B6B"
}]
},
options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}
});


/* Water Chart */

new Chart(waterChart,{
type:"bar",
data:{
labels:["Water (L)"],
datasets:[{
data:[data.water],
backgroundColor:"#4D96FF"
}]
},
options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}
});


/* Sleep Chart */

new Chart(sleepChart,{
type:"bar",
data:{
labels:["Sleep (hrs)"],
datasets:[{
data:[data.sleep],
backgroundColor:"#6BCB77"
}]
},
options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}
});


/* Exercise Chart */

new Chart(exerciseChart,{
type:"bar",
data:{
labels:["Exercise (min)"],
datasets:[{
data:[data.exercise],
backgroundColor:"#FFD93D"
}]
},
options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}
});



/* WEEKLY HEALTH TREND */

let weekly = [
data.sleep,
data.water,
data.exercise
];

new Chart(weeklyChart,{

type:"line",

data:{

labels:["Sleep","Water","Exercise"],

datasets:[{

data:weekly,
borderColor:"#4D96FF",
backgroundColor:"rgba(77,150,255,0.2)",
tension:0.4,
fill:true

}]

},

options:{
plugins:{legend:{display:false}},
scales:{y:{beginAtZero:true}}
}

});
