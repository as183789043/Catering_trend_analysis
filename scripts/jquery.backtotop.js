/*
Template Name: Foxclore
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Copyright: OS-Templates.com
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});
$ = function(id) {
    return document.getElementById(id);
  }
  
  var show = function(id) {
      $(id).style.display ='block';
  }
  var hide = function(id) {
      $(id).style.display ='none';
  }


$(".popup-btn").click(function() {
var href = $(this).attr("href")
$(href).fadeIn(250);
$(href).children$("popup-box").removeClass("transform-out").addClass("transform-in");
e.preventDefault();
});

$(".popup-close").click(function() {
closeWindow();
});
// $(".popup-wrap").click(function(){
//   closeWindow();
// })
function closeWindow(){
$(".popup-wrap").fadeOut(200);
$(".popup-box").removeClass("transform-in").addClass("transform-out");
event.preventDefault();
}