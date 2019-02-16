

var now= new Date();
var year=now.getFullYear();
var month=now.getMonth();
var date=now.getDate();
var hour=now.getHours();
var min=now.getMinutes();
var ampm;
if(hour<12) {
    ampm="am";
}else {
    ampm="pm";
}
var output= year+ '/'+(month+1)+'/'+date+ '/'+ (hour%12)+'/'+min+ampm;

document.getElementById('time').textContent= output;
