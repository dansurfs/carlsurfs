var hooks = {
	onError: function(formType, error) {
		console.log("meh");
	},
	onSuccess: function(formType, result){
		var uploads = Session.get("uploaded");
		var urls = []
		_.each(uploads, function(upload){
			urls.push(upload.url);
		});

		if(uploads){
			Boards.update({_id: result}, {$set: {images: urls } });
		}

		console.log(urls);
	}
}

AutoForm.hooks({
  insertBoardForm: hooks
});