$('.save').click(function(){
  $(this).hide();
  $('.block').removeClass('editable');
  $('.misvis').removeAttr('contenteditable');
  $('.edit').show();
});