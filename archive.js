window.refresh = function(delay) {
  delay *= 1000;
  var doms = [];
  var randos = [];
  var index = 0;

  function fadeout() {
    if (index < 3) {
      var random = $(doms.get(randos[index]));
      $(random).delay(delay + 200 * index).fadeTo(200, 0, function() {
        $(random).css("visibility", "hidden");
      });
      doms = doms.not(random);
      index++;
      fadeout(doms);
    }
  }

  doms = $('.grid-item');
  doms.css("visibility","visible");
  doms.css("opacity","1");
  var num = Math.floor(Math.random() * doms.length);
  for (var i = 0; i < doms.length; i++) {
    while (randos.indexOf(num) > -1) {
      num = Math.floor(Math.random() * doms.length);
    }
    randos.push(num);
  }
  fadeout();
}