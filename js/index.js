// see https://nextparticle.nextco.de for more informations

var nextParticle = new NextParticle(document.all.logo);
nextParticle.particleGap = 1;
nextParticle.noise = 10;
nextParticle.mouseForce = 30;
nextParticle.size = Math.max(window.innerWidth, window.innerHeight);
nextParticle.colorize = false;
nextParticle.tint = '#FF00FF';
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


window.onresize(function() {
  nextParticle.width = window.innerWidth;
  nextParticle.height = window.innerHeight;
  redraw();
});