$(function () {
  const showAnim = gsap.from('header', {
    yPercent: -200,
    paused: true,
    duration: 0.5
  }).progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse()
    },
  });

  $(window).scroll(function () {
    sct = $(this).scrollTop();
    wh = $('.section_1 .txt_wrap .main_title').offset().top;
    if (sct > wh) {
      $('header').addClass('on');
    } else {
      $('header').removeClass('on');
    }
  });



  $('.drop').each(function (index, item) {
    yVal = $(this).data('y');
    gsap.from(item, {
      yPercent: yVal,
      duration: 1,
    });
  });


  gsap.to('.section_bg', {
    scrollTrigger: {
      trigger: '.section_1',
      scrub: 1,
      start: 'top top',
      // pinSpacing: false,
      // end:  "+=" + (window.innerHeight * 10),
    },
    scale: 3,
    // y: '-300vh'

  });

  const personDrop = $(window).height() + 870;


  gsap.to(".person", {
    scrollTrigger: {
      trigger: ".person_con",
      start: "top 20%",
      // end: "100% 30%",
      // end: "50% 30%",
      end: (window.innerHeight * 20),
      scrub: true,
      pin: '.person',
      // ease: "power1",
      pinSpacing: false,
      anticipatePin: true,
    },
    y: personDrop,
    rotate: -360,
    // xPercent: 20,
  });


  gsap.to(".person", {
    scrollTrigger: {
      trigger: ".person_con",
      start: "bottom 50%",
      end: "bottom 40%",
      scrub: true,
      pinSpacing: false,
    },
    scale: 0,
  })
  gsap.to(".hole02", {
    scrollTrigger: {
      trigger: ".person_con",
      // start: "50% 50%",
      // end: "bottom 35%",
      start: "100% 50%",
      end: "bottom 20%",
      scrub: true,
      pinSpacing: false,
    },
    scale: 0,
    yPercent: -50,
  });

  gsap.to(".section_1 .txt_wrap p.effect", {
    scrollTrigger: {
      trigger: ".section_1 .txt_wrap p.effect",
      start: "bottom 20%",
      end: "bottom top",
      scrub: true,
      pinSpacing: false,
    },
    yPercent: -250
  });


  cardFunc = gsap.timeline({
    scrollTrigger: {
      trigger: '.section_3',
      scrub: 1,
      start: "50% 50%",
      end: "+=3000",
    }
  })
  .to(".card_area", {
    scrollTrigger: {
      trigger: ".card_area",
      pin: ".section_3",
      start: "top 50%",
      end: "30% 10%",
      scrub: true,
    },
    yPercent: -20,
  }, "label-=1")
  .to(".section_3 .txt_wrap .title, .section_3 .txt_wrap>span", {
    opacity: 0,
    yPercent: -10,
  }, "label")
  


  $('.section_3 .card_wrap').each(function (index, item) {
    let rotY = $(this).data('roty') ? $(this).data('roty') : 0;
    let rotX = $(this).data('rotx') ? $(this).data('rotx') : 0;
    let yPer = $(this).data('yper') ? $(this).data('yper') : 0;
    let xPer = $(this).data('xper') ? $(this).data('xper') : 0;
    let r = $(this).data('r') ? $(this).data('r') : 0;

    let rotY02 = $(this).data('roty02') ? $(this).data('roty02') : 0;
    let rotX02 = $(this).data('rotx02') ? $(this).data('rotx02') : 0;
    let yPer02 = $(this).data('yper02') ? $(this).data('yper02') : 0;
    let xPer02 = $(this).data('xper02') ? $(this).data('xper02') : 0;
    let r02 = $(this).data('r02') ? $(this).data('r02') : 0;
    let dur = $(this).data('dur') ? $(this).data('dur') : 0;

    cardFunc.to(item, {
        rotateY: rotY,
        rotateX: rotX,
        yPercent: yPer,
        xPercent: xPer,
        rotate: r,
      }, "label")
      .to(item, {
        rotateY: rotY02,
        rotateX: rotX02,
        yPercent: yPer02,
        xPercent: xPer02,
        rotate: r02,
        duration: dur,
      }, "label02")
  });


}); //end
