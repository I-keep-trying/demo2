$(document).ready(function() {
  $("a[href*='#']").click(function(t) {
    t.preventDefault(),
      $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500)
  })
})
