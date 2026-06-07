function botQuestion(type){

let data=JSON.parse(localStorage.getItem("healthData"));

let chat=document.getElementById("chatWindow");

let response="";

if(type==="sleep"){

if(data.sleep<6)
response="You should aim for 7-9 hours of sleep daily.";

else
response="Your sleep duration looks healthy.";

}

if(type==="water"){

if(data.water<2)
response="You should increase your daily hydration.";

else
response="Your hydration levels are good.";

}

if(type==="bmi"){

if(data.bmi<18.5)
response="Your BMI indicates underweight.";

else if(data.bmi<25)
response="Your BMI is within a healthy range.";

else
response="Your BMI is slightly high. Consider exercise.";

}

if(type==="exercise"){

if(data.exercise<30)
response="Try at least 30 minutes of exercise daily.";

else
response="Great job maintaining daily exercise.";

}

if(type==="diet"){

response="Maintain balanced meals including protein, fruits and vegetables.";

}

let bot=document.createElement("p");

bot.textContent="Assistant: "+response;

bot.style.color="#2ecc71";   // green text
bot.style.fontWeight="bold";

chat.appendChild(bot);

}
