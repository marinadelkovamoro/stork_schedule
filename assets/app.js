console.log("This works!");

$("#clicked").click(function () {
  $(".text").append('<h2> 🎉 Whoo-Hoo! 🎉 </h2><h3> The Stork took off! </h3><h4>Estimated Time of Arrival:</h4><h3 id="arrival"> </h3>');
  $("#clicked").hide();
});

// Coundown 
// Set the date we're counting down to
var countDownDate = new Date("Jun 1, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="arrival"
  document.getElementById("arrival").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("arrival").innerHTML = "EXPIRED";
  }
}, 1000);