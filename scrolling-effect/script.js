// $(window).scroll(function(){
//
//   console.log('scrolling')
//   var wScroll = $(this).scrollTop()
//   var sampleDividers = [1, 2, 3, 4, 5, 6]
//
//   $('span').each(function(){
//
//     var divider = sampleDividers[Math.floor(Math.random()*sampleDividers.length)]
//     console.log(divider)
//
//     $(this).css({
//       'transform' : 'translate(100px, ' + wScroll / divider + 'px)'
//     })
//     console.log($(this))
//   })
// })

$(window).scroll(function(){

  var wScroll = $(this).scrollTop()

  $('.k').css({
    'transform' : 'translate(' + wScroll / 1.9 + 'px, ' + wScroll / 2   + 'px)'
  })
  $('.l').css({
    'transform' : 'translate(0, ' + wScroll / 5  + 'px)'
  })
  $('.a').css({
    'transform' : 'translate(0, ' + wScroll / 10  + 'px)'
  })
  $('.j').css({
    'transform' : 'translate(0, ' + wScroll / 15  + 'px)'
  })
  $('.d').css({
    'transform' : 'translate(0, ' + wScroll / 10  + 'px)'
  })
  $('.i').css({
    'transform' : 'translate(0, ' + wScroll / 5  + 'px)'
  })
  $('.b').css({
    'transform' : 'translate(' + -wScroll / 1.9 + 'px, ' + wScroll / 2   + 'px)'
  })

})
