let toggle = document.getElementById("darkToggle");


/* APPLY SAVED THEME */

if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark-mode");

}


/* TOGGLE THEME */

toggle.onclick = function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem("theme","dark");

}else{

localStorage.setItem("theme","light");

}

};
