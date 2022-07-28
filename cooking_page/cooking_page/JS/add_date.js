var today = new Date();
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var message = days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate();
var place = document.getElementById('current_date');
place.textContent = message;
