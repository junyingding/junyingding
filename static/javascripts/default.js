$(document).ready(function() {
  // put your code here.
  $('.ui.progress').progress();

  // Swiper slides
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // Autoplay time duration (ms)
    autoplay: 3000,

    // Speed of moving (ms)
    speed: 1000,

    // Default first slide
    initialSlide: 0,

    // Transition effects: fade, cube, slide, coverflow, flip
    effect: 'fade',

    // Touch screen
    touchEventsTarget: 'container',
    touchRatio: 1,
    touchAngle: 45,
  })

  // Dimmer on images of article pages
  $('#dimmer.ui.image').dimmer({
    on: 'hover',
    opacity: 0.05
  });

  // Dimmer on langding page top right 3 images
  $('#home-images .ui.image').dimmer({
    on: 'hover',
    opacity: 0.5
  });

  $('#solutions .ui.image').dimmer({
    on: 'hover',
    opacity: 0.5
  });

  $('#home-images .ui.image').hover(
    function() {
      var button = $(this).next();
      button.children().css('color', 'transparent');
    },
    function() {
      var button = $(this).next();
      button.children().css('color', '#e6e6e6');
    }
  );

  // Dimmer on langding page doc image
  $('#quotes .ui.image').dimmer({
    on: 'hover',
    opacity: 0.5
  })

  // Circular links on article pages
  $('#article .ui.circular.label').hover(
    function() {
      $(this).removeClass('basic').addClass('inverted');
    },
    function() {
      $(this).removeClass('inverted').addClass('basic');
    }
  );

  // Remove superfluous share icons on IE
  var shareDiv = $('.social-share');
  var dataSites = shareDiv.data('sites').split(',');
  var sites = shareDiv.children();
  var trueNumber = dataSites.length;
  var actualNumber = sites.length;
  var i = trueNumber;
  for (; i < actualNumber; i++) {
    var node = sites[i];
    node.parentNode.removeChild(node);
  };

//案例Modal
//Steam turbine control
	
  // Modal jinling1 on case study page
  $('#modal-jinling1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-jinling1-activator', 'show')
  ;

  // Modal jinling2 on case study page
  $('#modal-jinling2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-jinling2-activator', 'show')
  ;

  // Modal yizheng3 on case study page
  $('#modal-yizheng3.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-yizheng3-activator', 'show')
  ;


  // Modal tangshan2 on case study page
  $('#modal-tangshan2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-tangshan2-activator', 'show')
  ;


  // Modal haihua5 on case study page
  $('#modal-haihua5.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-haihua5-activator', 'show')
  ;


  // Modal meishan4 on case study page
  $('#modal-meishan4.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-meishan4-activator', 'show')
  ;


  // Modal meishan6 on case study page
  $('#modal-meishan6.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-meishan6-activator', 'show')
  ;


  // Modal sinpu1 on case study page
  $('#modal-sinpu1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-sinpu1-activator', 'show')
  ;


  // Modal sinpu2 on case study page
  $('#modal-sinpu2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-sinpu2-activator', 'show')
  ;


  // Modal sinpu3 on case study page
  $('#modal-sinpu3.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-sinpu3-activator', 'show')
  ;


  // Modal sinpu4 on case study page
  $('#modal-sinpu4.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-sinpu4-activator', 'show')
  ;

  // Modal shijiazhuang2 on case study page
  $('#modal-shijiazhuang2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-shijiazhuang2-activator', 'show')
  ;

//Gas Turbine

  // Modal liyuan on case study page
  $('#modal-liyuan.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-liyuan-activator', 'show')
  ;


  // Modal huadian on case study page
  $('#modal-huadian.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-huadian-activator', 'show')
  ;
	
  // Modal 703 on case study page
  $('#modal-703.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-703-activator', 'show')
  ;

  // Modal liming on case study page
  $('#modal-liming.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-liming-activator', 'show')
  ;
	
//Compressor & ITCC

  // Modal ansteel13 on case study page
  $('#modal-ansteel13.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-ansteel13-activator', 'show')
  ;


  // Modal ansteel15 on case study page
  $('#modal-ansteel15.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-ansteel15-activator', 'show')
  ;


  // Modal lidong103 on case study page
  $('#modal-lidong103.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-lidong103-activator', 'show')
  ;


  // Modal lidong107 on case study page
  $('#modal-lidong107.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-lidong107-activator', 'show')
  ;


  // Modal lidong109 on case study page
  $('#modal-lidong109.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-lidong109-activator', 'show')
  ;


  // Modal sanyou1 on case study page
  $('#modal-sanyou1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-sanyou1-activator', 'show')
  ;


  // Modal sanyou2 on case study page
  $('#modal-sanyou2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-sanyou2-activator', 'show')
  ;

  // Modal dunan1 on case study page
  $('#modal-dunan1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-dunan1-activator', 'show')
  ;

// Protection

  // Modal tianwan3 on case study page
  $('#modal-tianwan3.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-tianwan3-activator', 'show')
  ;


  // Modal tianwan4 on case study page
  $('#modal-tianwan4.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-tianwan4-activator', 'show')
  ;


  // Modal gaojing1 on case study page
  $('#modal-gaojing1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-gaojing1-activator', 'show')
  ;


  // Modal gaojing2 on case study page
  $('#modal-gaojing2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-gaojing2-activator', 'show')
  ;



  // Modal ningbo1 on case study page
  $('#modal-ningbo1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-ningbo1-activator', 'show')
  ;


  // Modal ningbo2 on case study page
  $('#modal-ningbo2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-ningbo2-activator', 'show')
  ;


  // Modal haihua6 on case study page
  $('#modal-haihua6.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-haihua6-activator', 'show')
  ;


  // Modal haihua7 on case study page
  $('#modal-haihua7.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-haihua7-activator', 'show')
  ;


  // Modal haihua8 on case study page
  $('#modal-haihua8.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-haihua8-activator', 'show')
  ;


  // Modal lingang on case study page
  $('#modal-lingang.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-lingang-activator', 'show')
  ;


  // Modal zouping1 on case study page
  $('#modal-zouping1.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-zouping1-activator', 'show')
  ;
	
  // Modal zouping2 on case study page
  $('#modal-zouping2.ui.modal')
    .modal({
      blurring: true
    })
    .modal('attach events', '#modal-zouping2-activator', 'show')
  ;













  // Case2 pop up, keep for reference
//  $('#sample-modal2.ui.modal')
//    .modal({
//      blurring: true
//    })
//    .modal('attach events', '#sample-modal2-activator', 'show')
//  ;

	});
