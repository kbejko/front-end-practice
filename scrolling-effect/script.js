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

  // $('.fast').css({
  //   'transform' : 'translate(' + wScroll / 1.9 + 'px, ' + wScroll / 2   + 'px)'
  // })
  $('.medium').css({
    'transform' : 'translate(' + wScroll / 2 + 'px, ' + -wScroll * 3  + 'px)'
  })
  $('.slow-right').css({
    'transform' : 'translate(' + wScroll / 2 + 'px, ' + -wScroll * .5  + 'px)'
  })
  $('.slow-left').css({
    'transform' : 'translate(' + -wScroll / 2 + 'px, ' + -wScroll * .5  + 'px)'
  })
  $('.fast').css({
    'transform' : 'translate(' + wScroll / 4 + 'px, ' + -wScroll * 5  + 'px)'
  })
  // $('.d').css({
  //   'transform' : 'translate(0, ' + wScroll / 10  + 'px)'
  // })
  // $('.i').css({
  //   'transform' : 'translate(0, ' + -wScroll * 2  + 'px)'
  // })
  // $('.b').css({
  //   'transform' : 'translate(' + -wScroll / 1.9 + 'px, ' + wScroll / 2   + 'px)'
  // })

})
