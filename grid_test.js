var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper_current = swiper.on('transitionEnd', function() {
    console.log('now index :::', swiper.realIndex);

    
    function slideCount(){

        var num_box = document.querySelector('.num');
        var num;

        if(swiper.realIndex === 3) {
            
            num = 1;
            num++;
            
            num_box.innerHTML = num ;
            
        }else{
            
            num = 2;
            num--;
    
            num_box.innerHTML = num ;

        }
    }
    slideCount();
});


var hamClose = document.querySelector('.close');
var ham = document.querySelector('.ham_wrap');
var hamList = document.querySelector('.ham_nav');

ham.addEventListener('click', function(){

    hamList.style.visibility =  'visible';

});

hamClose.addEventListener('click', function(){

    hamList.style.visibility = 'hidden';
    
});
