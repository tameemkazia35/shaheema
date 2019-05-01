// see https://nextparticle.nextco.de for more informations

var nextParticle = new NextParticle(document.all.logo);
nextParticle.particleGap = 1;
nextParticle.noise = 10;
nextParticle.mouseForce = 60;
nextParticle.size = Math.max(window.innerWidth, window.innerHeight);
nextParticle.colorize = false;
nextParticle.tint = '#fff';
nextParticle.minWidth = nextParticle.size;
nextParticle.minHeight = nextParticle.size;
nextParticle.maxWidth = nextParticle.size;
nextParticle.maxHeight = nextParticle.size;

var redraw = function() {
  nextParticle.initPosition = "none";
  nextParticle.initDirection = "none";
  nextParticle.fadePostion = "none";
  nextParticle.fadeDirection = "none";
  nextParticle.minWidth = nextParticle.size;
  nextParticle.minHeight = nextParticle.size;
  nextParticle.maxWidth = nextParticle.size;
  nextParticle.maxHeight = nextParticle.size;
  nextParticle.color = nextParticle.colorize ? nextParticle.tint : '';
  nextParticle.start();
};



var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 20) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;

    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");

    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 5) + "s ease;-moz-animation:love " + (r_time + 5) + "s ease;-ms-animation:love " + (r_time + 5) + "s ease;animation:love " + (r_time + 5) + "s ease'></div>");

    $('.heart').each(function() {
        var top = $(this).css("top").replace(/[^-\d\.]/g, '');
        var width = $(this).css("width").replace(/[^-\d\.]/g, '');
        if (top <= -100 || width >= 150) {
            $(this).detach();
        }
    });
}, 500);

//window.addEventListener('resize', adapt);

window.addEventListener('resize', function() {
  nextParticle.width = window.innerWidth;
  nextParticle.height = window.innerHeight;
  redraw();
});

