// JavaScript Document

// Time of Day Image Script
// copyright Stephen Chapman, 20th Jan 2005
// you may copy this script but please keep the copyright notice as well
function timeOfDayImage() {
var now = new Date;
var timeNow = now.getHours();
var img = null; var mess = '';
if (timeNow < 4 || timeNow > 20) {
img = 'time1.gif'; mess = 'night';
} else if (timeNow < 6) {
img = 'time2.gif'; mess = 'dawn';
} else if (timeNow < 8) {
img = 'time3.gif'; mess = 'early morning';
} else if (timeNow < 11) {
img = 'time4.gif'; mess = 'morning';
} else if (timeNow < 13) {
img = 'time5.gif'; mess = 'noon';
} else if (timeNow < 16) {
img = 'time6.gif'; mess = 'afternoon';
} else if (timeNow < 18) {
img = 'time7.gif'; mess = 'late afternoon';
} else {
img = 'time8.gif'; mess = 'sunset';
}
document.write('<img src="graphics\/'+img+'" width="200" height="80" alt="'+mess+'"

title="'+mess+'" />');
}
                    
					

