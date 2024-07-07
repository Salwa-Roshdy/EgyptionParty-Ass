/// <reference types="../@types/jquery" />
let MessageInput = document.getElementById('Message')
let EmailInput = document.getElementById('exampleInputEmail1')
let emailAlert = document.getElementById('email-alert')


$('.open-menu i').on('click', function () {
    $('.main-menu').animate({ width: "toggle" }, 1000, function () { $('.open-menu').css('position', 'absolute'); $('.open-menu').css('left', '250px'); $('.open-menu').css('top', '50%') })



})

$('.closebtn').on('click', function () {
    $('.main-menu').animate({ width: "toggle" }, 1000, function () {
        $('.open-menu').css('left', '0px')

    })

})
let sectiontop = $('#accordin').offset().top;

$(window).on('scroll', function () {
    console.log("window" + window.scrollY)
    console.log("section" + sectiontop)
    if (sectiontop > window.scrollY) {
        $('.home-menu').css('display', 'block');
    }

    else {
        $('.home-menu').css('display', 'none');
    }
})

// ========Accordin-------------------
$('.acc-header1').on('click', function () {
    $('.acc-content1').slideToggle(500)
})
$('.acc-header2').on('click', function () {
    $('.acc-content2').slideToggle(500)
})
$('.acc-header3').on('click', function () {
    $('.acc-content3').slideToggle(500)
})
$('.acc-header4').on('click', function () {
    $('.acc-content4').slideToggle(500)
})
$('#sendBtn').on('click', function () {
    /*   if (vaidationEmail() == true) {
          console.log("valid")
      }
      else {
          console.log("invalid")
      } */
})

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days + " D ";
    document.getElementById("hours").innerHTML = hours + " h ";
    document.getElementById("minutes").innerHTML = minutes + " m ";
    document.getElementById("seconds").innerHTML = seconds + " s ";

    // If the count down is finished, write some text
    /*     if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "EXPIRED ";
            document.getElementById("hours").innerHTML = "EXPIRED ";
            document.getElementById("minutes").innerHTML = "EXPIRED ";
            document.getElementById("seconds").innerHTML = "EXPIRED ";
    
    
        } */
}, 1000);

/* $('#letter-counter') */
let message = MessageInput.value
MessageInput.addEventListener('input', function () {
    message = MessageInput.value
    if (message.length <= 100) {
        document.getElementById('letter-counter').innerHTML = (100 - message.length)
    }
    else {
        console.log("not")
        document.getElementById('letter-counter').innerHTML = " your available character finished "

        /*    e.preventDefault() */

    }
    console.log(message.length)
    validationMessge()
})
function validationMessge() {
    let Regex = /^[a-zA-Z0-9]{1,100}$/

    if (Regex.test(message)) {
        console.log("Valid")
    }
    else {
        console.log("not valid")
    }
}
/* function vaidationEmail() {
    let emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    let Email = EmailInput.value

    if (emailRegex.test(Email)) {
        console.log("MATCH")
        EmailInput.classList.add("is-valid")
        EmailInput.classList.remove("is-invalid")
        emailAlert.classList.add("d-none")
        return true;

    }
    else {
        console.log("not match")
        EmailInput.classList.add("is-invalid")
        EmailInput.classList.remove("is-valid")
        emailAlert.classList.remove("d-none")
        return false;

    }
} */