$(function() {
    var number = Math.floor(Math.random() * 10) + 1;
  
    $("#submit").click(function() {
      var userGuess = $("#guess").val();
  
      if (userGuess == number) {
        $("#result").text("Вгадали! Число: " + number);
  
        $("#game").css("background-color", "green");
  
        $("#guess").val("");
  
        number = Math.floor(Math.random() * 10) + 1;
  
        $("#guess").val(number);
  
      } else {
        $("#result").text("Не вгадали. Число: " + number);
  
        $("#game").css("background-color", "red");
        // location.reload();
      }
    });
  });
  