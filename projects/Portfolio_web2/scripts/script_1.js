/*$(document).ready(function () {
    $('.uil-estate').click(function () {
        $('h1').animate({
            opacity: 0,
            fontSize: '3rem',
            color: 'red'
        }, 1000, function () {
            $('h1').text('Welcome to My Portfolio!').animate({
                opacity: 1,
                fontSize: '5rem'
            }, 1000);
        });
    });
}); */


$(document).ready(function() {
    $('.uil-estate').click(function() {
      $('#welcome-section h1').animate({fontSize: '5rem'}, 1000);
    });
  });