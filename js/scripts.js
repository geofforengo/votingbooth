$(document).ready(function(){
    var voterAge = parseInt(prompt("Please enter your age:"));

    if (voterAge < 18) {
      $('#minor').show();
    } else {
      $('#ofage').show();
    }

});
