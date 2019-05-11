var theContent = $('.misvis');// set the content

	$('.save').on('click', function(){ // store the new content in localStorage when the button is clicked
		var editedContent 	= theContent.html();
		localStorage.newContent = editedContent;
	});

	if(localStorage.getItem('newContent')) { // apply the newContent when it is exist ini localStorage
		theContent.html(localStorage.getItem('newContent'));
	}
