var hooks = {
	onError: function(formType, error) {
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

		Session.set("uploaded", []);

	}
}

AutoForm.hooks({
  insertBoardForm: hooks
});