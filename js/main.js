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
  x: "+=3500",
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 3500)
  },
  repeat: 0
});

gsap.timeline().set('g [filter="url(#__lottie_element_53)"]', {
  x: 75,
  y: 1365,
  scale: 0.2,
})
  .set('g [filter="url(#__lottie_element_33)"]', {
    x: document.querySelector('g [filter="url(#__lottie_element_53)"]').getBoundingClientRect().width,
    onComplete: function () {
      console.log('test1', this.vars.x);
    }
  })
  .to('g [filter="url(#__lottie_element_53)"]', {
    scale: 0.5,
    transformOrigin: '0 50%',
  })
  .to('g [filter="url(#__lottie_element_33)"]', {
    x: 87,
    onComplete: function () {
      console.log('test2', this.vars.x);
      console.log('width',document.querySelector('g [filter="url(#__lottie_element_53)"]').getBoundingClientRect().width);
    }
  },'<')
gsap.set('g [filter="url(#__lottie_element_33)"]', {
  y: 1365,
  scale: 0.2,
})
gsap.set('g [filter="url(#__lottie_element_43)"]', {
  y: 1300,
  scale: 0.4,
})
gsap.set('g [filter="url(#__lottie_element_23)"]', {
  x: 1300,
  y: 1800,
  scale: 0.65,
})
function getPosition() {
  let dom = document.querySelector('g [filter="url(#__lottie_element_53)"]').getBBox()
  let dom2 = document.querySelector('g [filter="url(#__lottie_element_53)"]').getBoundingClientRect()
  console.log('dom',dom);
  console.log('dom2',dom2);
}
getPosition()