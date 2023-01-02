// 循環輪播
gsap.to('#js-kv-slide',{
  x:3500,
  duration: 30,
  repeat:0,
  repeatDelay: 0,
  yoyo:false,
  ease:Power0.easeNone
})
const NS = 'http://www.w3.org/2000/svg';
const main = document.querySelector('main')
let svg = document.createElementNS(NS,'svg')
svg.setAttribute('viewBox','0 0 2000 2000')
svg.setAttribute('width','400');
svg.setAttribute('height','400');
svg.setAttribute('id','svg1')
main.appendChild(svg)
let svg1 = document.querySelector('#svg1')
console.log(svg1);
  