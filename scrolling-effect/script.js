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
    'transform' : 'translate(' + wScroll / 2 + '%, ' + -wScroll * 3  + '%)'
  })
  $('.slow-right').css({
    'transform' : 'translate(' + wScroll / 2 + '%, ' + -wScroll * .5  + '%)'
  })
  $('.slow-left').css({
    'transform' : 'translate(' + -wScroll / 2 + '%, ' + -wScroll * .5  + '%)'
  })
  $('.fast').css({
    'transform' : 'translate(' + wScroll / 4 + '%, ' + -wScroll * 5  + '%)'
  })
  // $('.d').css({
  //   'transform' : 'translate(0, ' + wScroll / 10  + '%)'
  // })
  // $('.i').css({
  //   'transform' : 'translate(0, ' + -wScroll * 2  + '%)'
  // })
  $('.s').css({
    'transform' : 'translate(' + wScroll / .23 + '%, ' + -wScroll * 6   + '%)'
  })

})
