$(document).ready(function () {
  var greetings = ["bonjour", "こんにちは", "ciao", "hola", "hello"];
  var $text = $("#change");
  var delay = 1.5; // seconds

  function loop (delay) {
    $.each(greetings, function (i, elm) {
      $text.delay(delay * 1000).fadeOut();
      $text.queue(function () {
        $text.html(greetings[i]);
        $text.dequeue();
      });
      $text.fadeIn();
      $text.queue(function () {
        if (i == greetings.length - 1) {
          loop(delay);
        }
        $text.dequeue();
      })
    });
  }

  loop(delay);
});
