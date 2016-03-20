$(document).ready(function() {
  /* Video Starts here */
  scaleVideoContainer();
  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');
  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });
  /* Video Ends here */

  /* Menu Effects Starts here */
  $(".menu-bar").hide();
  $("#menu-button").on("click", function(event) {
    event.preventDefault();
    $(".menu-bar").show();
    $("#menu-button").hide();
  });
  $(window).on("scroll", function() {
    $(".menu-bar").hide();
    $("#menu-button").show();
  });
  /* Menu Effects Ends here */

  /* Intro Effects Starts here */
  $("#unique").on("mouseover", function() {
    $(this).addClass("animated tada");
  });
  $("#unique").on("mouseout", function() {
    $(this).removeClass("animated tada");
  });
  /* Intro Effects Ends here */

  /* Manifesto Effects Starts here */
  $(".column-padding").on("mouseover", function() {
    $(this).find("img").addClass("animated flip");
  });
  $(".column-padding").on("mouseout", function() {
    $(this).find("img").removeClass("animated flip");
  });
  /* Manifesto Effects Ends here */

  /* "About Me" Starts here */
  var imgList = [
    "Images/12362888.jpg",
    "Images/san-francisco-building.jpg",
    "Images/12339345.jpg"
  ];
  var current = 0;
  var imageChanger;
  $("#ref1").on("mouseenter", function() {
    var self = this;
    imageChanger = setInterval(function() {
      current += 1;
      $(self).attr("src", imgList[current]);
      if (current > 3) {
        current = -1;
      }
    }, 900);
  });
  $("#ref1").on("mouseleave", function() {
    current = 0;
    clearTimeout(imageChanger);
    $(this).attr("src", imgList[current]);
  });
  /* "About Me" Ends here */

  /* Media Starts here */
  $(".display-text-centered, .display-media").on("mouseenter", function() {
    $(this).find("a").addClass("animated rotateIn");
  });
  $(".display-text-centered, .display-media").on("mouseleave", function() {
    $(this).find("a").removeClass("animated rotateIn");
  });
  /* "Media Ends here */

  // "Don't be an stranger" starts here
  $(".show-me").hide();
  $(".show-about-me").on("click", function() {
    $(".show-me").show();
  });
  // "Don't be an stranger" Ends here

});

/* Video Starts here */
function scaleVideoContainer() {
  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element) {
  $(element).each(function() {
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
  });
  scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
  var windowWidth = $(window).width(),
  windowHeight = $(window).height() + 5,
  videoWidth,
  videoHeight;
  $(element).each(function() {
    var videoAspectRatio = $(this).data('height')/$(this).data('width');
    $(this).width(windowWidth);
    if (windowWidth < 1000) {
      videoHeight = windowHeight;
      videoWidth = videoHeight / videoAspectRatio;
      $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
      $(this).width(videoWidth).height(videoHeight);
    }
    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
  });
}
/* Video Ends here */
