
$(function() {
  $('#product2').each(function() {
    var src_org = $(this).attr('src');
    var src_color = src_org.replace('product-2', 'product-2-color');
    $(this).hover(function() {
      $(this).attr('src', src_color);
    }, function() {
      $(this).attr('src', src_org);
    });
  });
});