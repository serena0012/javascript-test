
/*update the header to red without using jQuery
const updateMe = document.querySelector('header');
updateMe.style.color = '#FF0000'; */

// Update the header to red using jQuery
$(function () {
    $('header').css('color', '#FF0000');
});


/* Write a JavaScript script that updates the text color of the <header> element to red
 (#FF0000) when the user clicks on the tag DIV#red_header: Use jQuery API only*/

$(function () {
    $('DIV#red_header').click(function () {
        $('header').css('color', '#FF0000';);
});
 });