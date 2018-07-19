$('[data-fancybox]').fancybox({
  loop: true,
  buttons: [
    'zoom',
    'slideShow',
    'fullScreen',
    'download',
    'thumbs',
    'close'
  ],
  baseClass: 'fancybox-custom'
});


$('.article').find('h1, h2, h3, h4, h5, h6').on('click', function() {
  $(this).get(0).id && (window.location.hash = $(this).get(0).id)
})