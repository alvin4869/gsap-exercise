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
gsap.set('.js-kv-slide-item',{
  x:(i) => i * 700
})
gsap.to(".js-kv-slide-item", {
  duration: 25,
  ease: "none",
  x: "+=3500", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 3500) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1
});