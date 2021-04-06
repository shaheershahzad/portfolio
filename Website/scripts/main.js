function getAge() {
    let dateToday = new Date();
    let birthday = new Date(1996, 5, 16, 15);
    let age = dateToday.getYear() - birthday.getYear();

    if (dateToday.getMonth() < birthday.getMonth()) {
        age -= 1;
    } else if ((dateToday.getMonth() == birthday.getMonth()) && (dateToday.getDate() < birthday.getDate())) {
        age -= 1;
    }

    return age;
}

$(function () {
    // Handler for .ready() called.

    /*var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })*/

    //Set copyright year automatically
    if ($(".copyright-year").length > 0) {

        $(".copyright-year").html(new Date().getFullYear());

    }

    if ($("a[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']").length > 0) {
        $("a[title='Hosted on free web hosting 000webhost.com. Host your own website for FREE.']").parent().hide();
    }

    $(document).scroll(function () {
        if ($(document).scrollTop() >= 500) {
            // user scrolled 500 pixels or more
            $("#back-top").show();
        } else {
            $("#back-top").hide();
        }
    });

    document.addEventListener("DOMContentLoaded", function(){
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
              document.getElementById('navbar').classList.add('fixed-top');
              // add padding top to show content behind navbar
              navbar_height = document.querySelector('.navbar').offsetHeight;
              document.body.style.paddingTop = navbar_height + 'px';
            } else {
              document.getElementById('navbar').classList.remove('fixed-top');
               // remove padding top from body
              document.body.style.paddingTop = '0';
            } 
        });
      }); 

});