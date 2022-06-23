


$('img[data-toggle=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'bottom',
  content: function(){return '<img src="assets/' + this.className.split(' ')[1] +"-desc.JPG" + '" />';}
});


$('.hidden').fadeIn(1000).removeClass('hidden')



$(window).on("scroll resize", function() {
    $(".fade-in").each(function(index, element) {
        if (isScrolledIntoView(element)) {
           $(element).animate({opacity: 1.0}, 300);
        }
    });
});



function isScrolledIntoView(elem)
{
    var centerY = Math.max(0,(($(window).height()-$(elem).outerHeight()+1000) / 2)
                  + $(window).scrollTop());

    var elementTop = $(elem).offset().top;
    var elementBottom = elementTop + $(elem).height();

    return elementTop <= centerY && elementBottom >= centerY;
}
