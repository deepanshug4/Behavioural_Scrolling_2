//Beg
const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')

//End
const section = document.querySelector('section')
const end = section.querySelector('h1')

//Scroll Magic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 54800,
    triggerElement: intro,
    triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0});

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);


//Video Animation
let accelamount = 0.1; //Easing effect
let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000;
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = delay;
}, 33.3);


//Text Animation End
const textAnimend = TweenMax.fromTo(end, 3, {opacity:0}, {opacity:1});
const textAnimend1 = TweenMax.fromTo(end, 3, {opacity:1}, {opacity:-0.5});

let scene3 = new ScrollMagic.Scene({
    duration: 600,
    triggerElement: end,
    triggerHook: 0.5
})
.setTween(textAnimend)
.addTo(controller);

let scene4 = new ScrollMagic.Scene({
    duration: 800,
    triggerElement: end,
    triggerHook: 0
})
.setTween(textAnimend1)
.addTo(controller);