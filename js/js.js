//Функция мигания кнопок "ВВерх-Вниз"
setTimeout(function(){$('.down').fadeIn('slow')},1000); 
setTimeout(function(){$('.up').fadeIn('slow')},1000);

//Функция скроллинга 
$(document).ready(function() {
$(".main").onepage_scroll({
   sectionContainer: "section", 
   easing: "ease",
   animationTime: 1000,
   pagination: true,
   updateURL: false
});
});


