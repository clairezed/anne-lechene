//=require alpha/main
//=require vendor/smoothscroll.min
//=require custom/base

document.addEventListener('DOMContentLoaded', function () {

  console.log("hello sweetie !");
  const scroll = new SmoothScroll('a[href*="#"]', {
    offset: 50,
  });

})