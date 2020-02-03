"use strict";

/*Hämta knappen*/
var mybutton = document.getElementById("myBtn");


/*Vid scrollning 20 px ned på sidan syns knappen*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

/* När användaren klickar på knappen, kommer man tillbaka upp på sidan*/
function topFunction() {
    document.body.scrollTop = 0; /* För Safari */
    document.documentElement.scrollTop = 0; /* För Chrome, Firefox, IE och Opera*/
}