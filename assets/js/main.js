$(document).ready(function() {
  // jQuery Function Number 1
  $("#intro").fadeIn(4000);

  $(".project a").addClass("animated infinite pulse");
  //jQuery Function 2
  $("#intro").click(function() {
    //jQuery Function Number 3
    $(this).css("color", "#ffffff");
    //jQuery Function Number 4
    $(this).addClass("add");
    //jQuery Function Number 5
    $(this).text("(╯°□°）╯");
    //jQuery Function Number 6
    $(this).removeClass("add");
    $(this).addClass("animated infinite shake");
  });
  $("#scrollsections-navigation").fadeIn(3000);
  $("#particles").particles({
    maxParticles: 350,
    size: 4,
    speed: 0.2,
    minDist: 140,
    connectParticles: false,
    color: "#FDC029"
  });

  $(".section-title").textillate({
    in: {
      effect: "rollIn",
      delayScale: 1.5,
      delay: 20,
      sync: false
    }
  });

  $(".section-title").hide();
  $(".project").hide();
  $("#contact-right").hide();

  $("section.section").scrollSections({
    alwaysStartWithFirstSection: true,
    createNavigation: false,
    navigation: true,
    before: function($currentSection, $nextSection) {
      _initFutureSection($nextSection);
    },

    after: function($currentSection, $previousSection) {
      _initNewSection($currentSection, $previousSection);
    }
  });

  function _initNewSection($section, $prevSection) {
    if ($prevSection) {
      // $(".section-title", $prevSection).hide(); // Hide old section title
    }
    $(".section-title", $section).show(); // Fade in current section title
    $(".section-title", $section).textillate();
    $(".bio", $section).show();
    $(".bio", $section).addClass("animated fadeInDown");
    $(".project", $section).show();
    $(".project", $section).addClass("animated fadeInDownBig");
    $("#contact-right", $section).show();
    $("#contact-right", $section).addClass("animated fadeIn");
  }

  function _initFutureSection($section) {
    // Do some stuff each time before this section appears
    //$(".section-title", $section).hide();
  }


  $(".nav-to-about").click(function() {
    $("#about-link").click();
  });

  $(".nav-to-projects").click(function() {
    $("#projects-link").click();
  });

  $(".nav-to-contact").click(function() {
    $("#contact-link").click();
  });
});
