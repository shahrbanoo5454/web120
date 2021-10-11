$(document).ready(function(){
    $('.twice-header nav ul li a').click(function(){
   
    $('.twice-header nav ul li a').removeClass('active');
    $(this).addClass('active');
    });
   $('main .main-2 .text-portfolio a').click(function(){
    event.preventDefault();
    $('main .main-2 .text-portfolio a').removeClass('active2');
    $(this).addClass('active2');
   $('main .main-2 .text-portfolio .main-portfolio-info').hide();
   $($(this).attr('href')).show();
   });
});


