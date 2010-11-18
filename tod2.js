// JavaScript Document


 
 
function pixTimeChange() {
  var t=new Date();
  var h = t.getHours();
  var m = m.getMinutes();
  var s = s.getSeconds();

  var r1="images/morning.jpg";
  var r2="images/afternoon.jpg";
  var r3="images/evening.jpg";
  var r4="images/night.jpg";
 
  var el=document.getElementById('myimage');
 
  // See the time below. Note: The time is in 24 hour format.
  // In the example here, "7" = 7 AM; "17" =5PM.
  el.src = (h>=12 && h<16) ? r1 : r2;
  el.src = (h>=12 && h<16) ? r1 : r2;
  el.src = (h>=12 && h<16) ? r1 : r2;

 /* el.src = (h>=12 && h<16) ? r1 : r2;
  el.src = (h>=12 && h<16) ? r2 : r3;
  el.src = (h>=16 && h<17) ? r4 : r3;
  el.src = (h>=17 && h<20) ? r3 : r4;*/
}
 
// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}
 
addLoadEvent(function() {
  pixTimeChange();
});


function pixTimeChange() {
  var t=new Date();
  var h = t.getHours();
  var m = m.getMinute();
  var r1="images/route3A.jpg";
  var r2="images/route3B.jpg";
  var r3="images/route3C.jpg";
  var r4="images/night.jpg";
  var el=document.getElementById('myimage');

  // See the time below. Note: The time is in 24 hour format.
  // In the example here, "7" = 7 AM; "17" =5PM.
//  el.src = (h>=12 && h<16) ? r2 : r3;
//  el.src = (h>=16 && h<17) ? r4 : r3;
//  el.src = (h>=17 && h<20) ? r3 : r4;
  switch (h) {
    case 12:
    case 13:
    case 14:
    case 15: el.src = r2; break;
    case 16: el.src = r4; break;
    case 17:
    case 18:
    case 19: el.src = r3; break;
    default: el.src = r4; break;
  }
}