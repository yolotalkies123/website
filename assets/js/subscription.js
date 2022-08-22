
function checkEmail() {

    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
var link = "mailto:xeroks@hanmail.net"
     + "?cc=xeroks@hanmail.net"
     + "&subject=" + encodeURIComponent("New Subsciption to BitnalCorp!")
     + "&body=" + encodeURIComponent(document.getElementById('email').value)
          ;

    window.location.href = link;
 } 
