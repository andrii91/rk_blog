$(document).ready(function() { 
  
  $('.sourses p').each(function(index){
    if(index > 1) {
      $(this).hide()
    }
  })
  
  $('.sourses  .more-btn').click(function(e){
    e.preventDefault();
    $(this).parents('.sourses').find('p').show();
    $(this).hide();
  })
});