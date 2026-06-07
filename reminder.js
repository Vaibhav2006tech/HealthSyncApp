Notification.requestPermission();

setInterval(function(){

if(Notification.permission==="granted"){

new Notification("HealthSync Reminder",{
body:"💧 Time to drink water!"
});

}

},7200000);
