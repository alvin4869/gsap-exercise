// 循環輪播
// gsap.to('#js-kv-slide',{
//   x:3500,
//   duration: 30,
//   repeat:0,
//   repeatDelay: 0,
//   yoyo:false,
//   ease:Power0.easeNone
// })
// gsap.to('g[filter="url(#__lottie_element_2104)"]',{
//   rotationX:360,
//   duration: 30,
// })
gsap.set('.js-kv-slide-item', {
  x: (i) => i * 700
})
gsap.to(".js-kv-slide-item", {
  duration: 25,
  ease: "none",
  x: "+=3500", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 3500) //force x value to be between 0 and 500 using modulus
  },
  repeat: 0
});
gsap.set('g [filter="url(#__lottie_element_53)"]', {
  x: 500,
  y: 1400,
  scale: 0.2,
})
gsap.set('g [filter="url(#__lottie_element_33)"]', {
  x: 1400,
  y: 1400,
  scale: 0.2,
})
gsap.set('g [filter="url(#__lottie_element_43)"]', {
  x: getDistance(),
  y: 1300,
  scale: 0.4,
})
gsap.set('g [filter="url(#__lottie_element_23)"]', {
  x: 1300,
  y: 1800,
  scale: 0.65,
})
let timeLine = gsap.timeline().to('g [filter="url(#__lottie_element_33)"]', {
  rotate: 180,
  transformOrigin: '-60% 50%',
  duration: 1.3,
  repeat: -1,
  ease: "power4",
  x: getDistance()
})

function getDistance() {
  const arr = $('#1 > g')
  $(arr).each(function (i , el) {
    console.log(el);
  });
}
console.log(timeLine);