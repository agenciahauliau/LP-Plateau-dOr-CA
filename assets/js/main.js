$(window).each(function(){
    $('.nav-link.active').removeClass('active');
});

$('.videoLink').click(function(){
    $('.modalVideo').get(0).play(); 
});

$('div.modal').click(function(){
    $('.modalVideo').get(0).pause();
});

