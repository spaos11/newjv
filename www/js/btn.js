$('.edit').click(function(){
  $(this).hide();
  $('.misvis').addClass('editable');
  $('.one').attr('contenteditable', 'true');  
  $('.save').show();
});

$('.save').click(function(){
  $(this).hide();
  $('.misvis').removeClass('editable');
  $('.one').removeAttr('contenteditable');
  $('.edit').show();
});