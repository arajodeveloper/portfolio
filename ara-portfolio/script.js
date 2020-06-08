const doSomething = () => {
  var windowHeight = window.innerHeight;
  var scrollArea = 1000 - windowHeight;
  var flower = document.getElementById('over');
  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;
    flower.style.left = scrollPercent*window.innerWidth + 'px';
    flower.style.transform = "rotate("+window.pageYOffset+"deg)";
  });
}
$(document).ready(function(){
	$('.frame').click(function(){
		$('.top').addClass('open');
		$('.message').addClass('pull');
	})
});

//tech skills bar chart

(function($) {
  function generateBarGraph(wrapper) {
    // Set Up Values Array
    var values = [];

    // Get Values and save to Array
    $(wrapper + ' .bar').each(function(index, el) {
      values.push($(this).data('value'));
    });

    // Get Max Value From Array
    var max_value = Math.max.apply(Math, values);

    // Set width of bar to percent of max value
    $(wrapper + ' .bar').each(function(index, el) {
      var bar = $(this),
          value = bar.data('value'),
          percent = Math.ceil((value / max_value) * 100);

      // Set Width & Add Class
      bar.width(percent + '%');
      bar.addClass('in');
    });
  }

  // Generate the bar graph on window load...
  $(window).on('load', function(event) {
    generateBarGraph('#dashboard-stats');
  });
})(jQuery); // Fully reference jQuery after this point.

