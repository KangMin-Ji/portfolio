$(function () {
  // let container = $('.scroll-wrap');
  // let height;
  // function setHeight() {
  //   height = container.clientHeight;
  //   document.body.style.height = height + "px";
  // }
  // ScrollTrigger.addEventListener("refreshInit", setHeight);
  // // smooth scrolling container
  // gsap.to(container, {
  //   y: () => -(height - document.documentElement.clientHeight),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: document.body,
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: 1,
  //     invalidateOnRefresh: true
  //   }
  // });

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
  // gsap.to('.ladder', {
  //   scrollTrigger: {
  //     trigger: '.section_1',
  //     scrub: 1,
  //     start: "80% top",
  //     end: "220% 220%",
  //     pin: ".ladder",
  //   },
  //   yPercent: 50
  //   // end: 'bottom 50%'
  // });

  // gsap.timeline({scrollTrigger: {
  //     trigger: ".person_con",
  //     start: "top top",
  //     end: function() { return (gsap.getProperty(".person_con", "height")) },
  //     // end: "250% 100%",
  //     scrub: 1,
  //     // pinReparent: true,
  //     // pin: ".person",
  //     snap: 1 / 2.0,
  //   }
  // })
  //     .to(".person", {yPercent: 100, rotate: -10, ease: "power1"})
  const personCon = $('.person_con');
  const personDrop = $(window).height() + 870;
  // gsap.to('.ladder', {
  //   scrollTrigger: {
  //     trigger: ".ladder",
  //     start: "top top",
  //     end: "70% bottom", 
  //     pin: '.section_1',
  //     pinSpacing: false, 
  //   },
  //   yPercent: -50,
  // });
  // intro = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".person_con",
  //     start: "top 20%",
  //     // end: (window.innerHeight * 10),
  //     // end: "bottom top",
  //     end: "bottom top",
  //     scrub: true,
  //     pin: '.person',
  //     pinSpacing: false,
  //     anticipatePin: true,
  //   }
  // });
  // intro.to(".person", {
  //   y: '500px',
  //   // rotate: -150,
  // })
  // .to(".person", {
  //   scale: 0,
  // }, "label")
  // .to(".hole02", {
  //   scale: 0,
  //   // yPecent: -50,
  // }, "label")

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
    rotate: -150,
    // xPercent: 20,
  });

  // gsap.to(".person", {
  //   scrollTrigger: {
  //     trigger: ".person_con",
  //     // start: "top 20%",
  //     // end: "100% 30%",
  //     end: "50% 30%",
  //     // end: (window.innerHeight * 20),
  //     scrub: true,
  //     pin: '.section_1',
  //     // ease: "power1",
  //     pinSpacing: false,
  //     anticipatePin: true,
  //     markers: true,
  //   },
  //   y: personDrop,
  //   rotate: -150,
  //   // xPercent: 20,
  // });


  // gsap.to(".section_1 .inner", {
  //   scrollTrigger: {
  //     trigger: ".section_1",
  //     scrub: true,
  //     start: "top top",
  //     pin: ".section_1",
  //   },
  //   yPercent: -10,
  // })


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
  // gsap.to(".section_2 p", {
  //   scrollTrigger: {
  //     trigger: ".section_2",
  //     start: "top 60%",
  //     end: "bottom bottom",
  //     // end: "+=600",
  //     scrub: true,    
  //     pinSpacing: false,
  //     onToggle: scrollTrigger => {
  //       // refresh because height start changes
  //       scrollTrigger.refresh()
  //     },
  //   },
  //   yPercent: -520,
  //   // duration: 1,
  // })
  // gsap.to(".section_1 .txt_wrap", {
  //   scrollTrigger: {
  //     trigger: ".section_1 .txt_wrap",
  //     start: "top center",
  //     end:"+=" + (window.innerHeight * 5),
  //     scrub: true,
  //     pinSpacing: false,
  //   },
  //   yPercent:-150
  // })
  gsap.to(".section_1 .txt_wrap p", {
    scrollTrigger: {
      trigger: ".section_1 .txt_wrap p",
      start: "bottom 20%",
      end: "bottom top",
      scrub: true,
      pinSpacing: false,
    },
    yPercent: -250
  });



  // $('.card_wrap').each(function(index, item) {
  //   rotY = $(this).data('rotY');
  //   rVal = $(this).data('r');
  //   yPer = $(this).data('y');
  //   xPer = $(this).data('x');
  //   cardFunc = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".card_area",
  //       scrub: 1,
  //       start: "top 70%",
  //       end: "top 60%",
  //       pin: ".section_4",
  //     }
  //   })
  //   .to($(this), {
  //     rotateY: rotY,
  //     rotate: rVal,
  //     yPercent: yPer,
  //     xPercent: xPer,
  //   })
  // });
  // cardFunc2 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".card_area",
  //     scrub: 1,
  //     start: "40% 50%",
  //     // end: "bottom top",
  //     immediateRender: false,
  //   }
  // })
  // .to(".card_area .card_wrap12", {
  //   // rotate: 30,
  //   rotateY: 120,
  //   yPercent: 320,
  //   xPercent: -90,
  //   rotate: 60,
  // }, "label02")
  // .to(".card_area .card_wrap11", {
  //   // rotate: 30,
  //   rotateY: 60,
  //   yPercent: 220,
  //   xPercent: -110,
  //   rotate: 60,
  // }, "label02")
  // .to(".card_area .card_wrap10", {
  //   // rotate: 30,
  //   rotateY: 60,
  //   yPercent: 220,
  //   xPercent: -110,
  //   rotate: 60,
  // }, "label02")








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
  .to(".section_3 .txt_wrap_1 .title", {
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

  // cardFunc = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".section_4",
  //     scrub: 1,
  //     start: "50% 50%",
  //     // end: (window.innerHeight * 10),    
  //     // pinSpacing: false,
  //     end: "+=3000",
  //     // start: "50% 50%",
  //     // end: "bottom top",
  //     // pin: ".card_area",
  //   },
  //   // onComplete: cardFunc2,
  // })
  // .to(".card_area", {
  //   scrollTrigger: {
  //     trigger: '.card_area',
  //     pin: '.section_4',    
  //     // start: "top 50%",
  //     start: "top 50%",
  //     end: "30% 10%",
  //     scrub: true,
  //   },
  //   yPercent :-20,
  // }, "label-=1")
  // .to(".section_4 .txt_wrap .title", {
  //   opacity: 0,
  //   yPercent: -10,
  //   // duration: 3,
  // }, "label")
  // .to(".card_area .card_wrap12", {
  //   // rotate: 30,
  //   // yPercent: -120,
  //   xPercent: -30,
  //   // rotate: 60,
  //   // rotateY: 180,
  //   // yPercent: 140,
  //   // xPercent: 120,
  //   // rotate: 70,
  //   // duration : 3,
  // }, "label")
  // .to(".card_area .card_wrap12", {
  //   // // rotate: 30,
  //   // yPercent: -20,
  //   // xPercent: -30,
  //   // // rotate: 60,
  //   rotateY: 1980,
  //   yPercent: 540,
  //   xPercent: 280,
  //   rotate: 270,
  //   duration : 8,
  // }, "label02")
  // .to(".card_area .card_wrap11", {
  //   rotate: 30,
  //   yPercent: -110,
  //   xPercent: -50,
  //   // rotate: 180,
  //   // rotateY: 230,
  //   // yPercent: 240,
  //   // xPercent: -120,
  //   // rotate: 180,
  //   // duration: 3,
  // }, "label")
  // .to(".card_area .card_wrap11", {
  //   // rotate: 30,
  //   // yPercent: -10,
  //   // xPercent: -50,
  //   // // rotate: 180,
  //   rotateY: 1230,
  //   yPercent: 340,
  //   xPercent: -120,
  //   rotate: 180,
  //   duration: 5,
  // }, "label02")
  // .to(".card_area .card_wrap10", {
  //   yPercent: -100,
  //   xPercent: 30,
  //   rotate: 70,
  //   // rotateY: -230,
  //   // yPercent: 240,
  //   // xPercent: -120,
  //   // rotate: 270,
  //   // duration : 3,
  // }, "label")
  // .to(".card_area .card_wrap10", {
  //   // yPercent: -50,
  //   // xPercent: 30,
  //   // rotate: 70,
  //   rotateY: -330,
  //   yPercent: 240,
  //   xPercent: -120,
  //   rotate: 270,
  //   duration : 5,
  // }, "label02")
  // .to(".card_area .card_wrap09", {
  //   rotateY: 320,
  //   yPercent: -90,
  //   xPercent: -20,
  //   rotate: -60,
  //   // yPercent: 200,
  //   // xPercent: 80,
  //   // rotateY: 100,
  //   // duration: 3,
  // }, "label")
  // .to(".card_area .card_wrap09", {
  //   // rotateY: 120,
  //   // yPercent: -20,
  //   // xPercent: -20,
  //   // rotate: -60,
  //   yPercent: 300,
  //   xPercent: 80,
  //   rotateY: 100,
  //   duration: 5,
  // }, "label02")
  // .to(".card_area .card_wrap08", {
  //   rotateY: 130,
  //   yPercent: -40,
  //   xPercent: 90,
  //   // rotate: 60,
  //   // rotateY: 130,
  //   // yPercent: 160,
  //   // xPercent: 90,
  //   // rotate: 60,
  // }, "label")
  // .to(".card_area .card_wrap08", {
  //   // rotateY: 130,
  //   // yPercent: -40,
  //   // xPercent: 90,
  //   // // rotate: 60,
  //   rotateY: 1130,
  //   yPercent: 160,
  //   xPercent: 90,
  //   rotate: 60,
  //   duration: 4,
  // }, "label02")
  // .to(".card_area .card_wrap07", {
  //   rotateY: 20,
  //   yPercent: -20,
  //   xPercent: 80,
  //   // rotate: 60,
  //   // rotateY: 220,
  //   // yPercent : 270,
  //   // xPercent: 30,
  //   // rotate: 100,
  //   // duration :5,
  // }, "label")
  // .to(".card_area .card_wrap07", {
  //   // rotateY: 20,
  //   // yPercent: -20,
  //   // xPercent: 80,
  //   // // rotate: 60,
  //   rotateY: 1220,
  //   yPercent : 270,
  //   xPercent: 120,
  //   rotate: 100,
  //   duration :5,
  // }, "label02")
  // .to(".card_area .card_wrap06", {
  //   rotateY: 100,
  //   yPercent: -20,
  //   xPercent: -10,
  //   // rotate: 60,
  //   // rotate: 100,
  //   // yPercent: 100,
  //   // xPercent: -120,
  //   // duration: 6,
  // }, "label")
  // .to(".card_area .card_wrap06", {
  //   rotateY: 300,
  //   // yPercent: -20,
  //   // xPercent: -10,
  //   // // rotate: 60,
  //   rotate: 100,
  //   yPercent: 100,
  //   xPercent: -120,
  //   duration: 3,
  // }, "label02")
  // .to(".card_area .card_wrap05", {
  //   rotateY: -130,
  //   yPercent: -30,
  //   xPercent: -30,
  //   // rotate: 60,
  //   // rotateY: -130,
  //   // yPercent: 220,
  //   // xPercent: -60,
  //   // rotate: 30,
  //   // duration: 5,
  // }, "label")
  // .to(".card_area .card_wrap05", {
  //   // rotateY: -130,
  //   // yPercent: -30,
  //   // xPercent: -30,
  //   // // rotate: 60,
  //   rotateY: -1130,
  //   yPercent: 420,
  //   xPercent: -260,
  //   rotate: 30,
  //   duration: 8,
  // }, "label02")
  // .to(".card_area .card_wrap04", {
  //   rotateY: 140,
  //   yPercent: -23,
  //   xPercent: -30,
  //   // rotate: 60,
  //   // rotateY: 230,
  //   // yPercent: 240,
  //   // xPercent: -120,
  //   // rotate: 70,
  //   // duration : 3,
  // }, "label")
  // .to(".card_area .card_wrap04", {
  //   // rotateY: 140,
  //   // yPercent: -23,
  //   // xPercent: -30,
  //   // // rotate: 60,
  //   rotateY: 1230,
  //   yPercent: 240,
  //   xPercent: -120,
  //   rotate: 70,
  //   duration : 6,
  // }, "label02")
  // .to(".card_area .card_wrap03", {
  //   rotateY: 180,
  //   yPercent: -10,
  //   xPercent: -20,
  //   // rotate: 60,
  //   // rotateY: -1230,
  //   // yPercent: 340,
  //   // xPercent: -120,
  //   // rotate: 70,
  //   // duration: 3,
  // }, "label")
  // .to(".card_area .card_wrap03", {
  //   // rotateY: 180,
  //   // yPercent: -10,
  //   // xPercent: -20,
  //   // // rotate: 60,
  //   rotateY: -1230,
  //   yPercent: 240,
  //   xPercent: -120,
  //   rotate: 70,
  //   duration: 5,
  // }, "label02")
  // .to(".card_area .card_wrap02", {
  //   rotateY: 180,
  //   yPercent: -28,
  //   xPercent: -20,
  //   // rotate: 60,
  //   // rotateY: 180,
  //   // yPercent: 120,
  //   // xPercent: 220,
  //   // rotate: 60,
  //   // duration: 3,
  // }, "label")
  // .to(".card_area .card_wrap02", {
  //   // rotateY: 180,
  //   // yPercent: -28,
  //   // xPercent: -20,
  //   // // rotate: 60,
  //   rotateY: 880,
  //   yPercent: 120,
  //   xPercent: 220,
  //   rotate: 60,
  //   duration: 8,
  // }, "label02")
  // .to(".card_area .card_wrap01", {
  //   rotateY: 0,
  //   yPercent: -50,
  //   xPercent: -30,
  //   // rotate: 60,  
  //   // rotateY: -190,
  //   // yPercent: 220,
  //   // xPercent: 300,
  //   // duration : 3,
  //   // rotate: 60,
  // }, "label")
  // .to(".card_area .card_wrap01", {
  //   // rotateY: 0,
  //   // yPercent: -50,
  //   // xPercent: -30,
  //   // // rotate: 60,  
  //   rotateY: -1190,
  //   yPercent: 220,
  //   xPercent: 300,
  //   duration : 5,
  //   // rotate: 60,
  // }, "label02")










  // .to(".card_area .card_wrap01", {
  //   // rotate: 30, 
  //   rotateY: 90,
  //   yPercent: 120,
  //   xPercent: 300,
  //   duration : 3,
  //   // rotate: 60,
  // }, "label+=1")
  // .to(".card_area .card_wrap02", {
  //   // rotate: 30,
  //   rotateY: 30,
  //   yPercent: 320,
  //   xPercent: 220,
  //   rotate: 60,
  //   duration : 3,
  // }, "label+=1")
  // .to(".card_area .card_wrap03", {
  //   // rotate: 30,
  //   rotateY: 30,
  //   yPercent: 140,
  //   xPercent: -120,
  //   rotate: 70,
  //   duration : 3,
  // }, "label+=1")
  // .to(".card_area .card_wrap04", {
  //   // rotate: 30,
  //   rotateY: 30,
  //   yPercent: 140,
  //   xPercent: -120,
  //   rotate: 70,
  //   duration : 3,
  // }, "label+=1")


  // gsap.to(".hole02", {
  //   scrollTrigger: {
  //     trigger: ".hole02", 
  //     start: "-150% 50%",
  //     // end: "top 35%",
  //     scrub: true,
  //     pinSpacing: false,
  //   },
  //   yPercent: 150,
  // });
  // gsap.to(".person", {
  //   scrollTrigger: {
  //     trigger: ".hole02", 
  //     start: "-150% 50%",
  //     // end: "top 35%",
  //     scrub: true,
  //     pinSpacing: false,
  //   },
  //   yPercent: 150,
  // });
  // gsap.to(".hole", {
  //   scrollTrigger: {
  //     trigger: ".section_1", 
  //     start: "bottom 70%",
  //     // end: (window.innerHeight * 20),
  //     end: "bottom 50%",
  //     scrub: true,
  //     pinSpacing: false,
  //   },
  //   scale: 0,
  // })
  // gsap.to(".person_con", {
  //   scrollTrigger: {
  //     trigger: ".section_1", 
  //     start: "bottom bottom",
  //     end: "bottom 80%",
  //     scrub: true,
  //     pinSpacing: false,
  //   },
  //   scale: 0,
  // });


}); //end
