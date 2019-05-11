$('.edit').click(function(){
  $(this).hide();
  $('.misvis').addClass('editable');
  $('.misvis').attr('contenteditable', 'true');  
  $('.save').show();
});

$('.save').click(function(){
  $(this).hide();
  $('.misvis').removeClass('editable');
  $('.misvis').removeAttr('contenteditable');
  $('.edit').show();
});