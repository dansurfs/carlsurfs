Template.uploadForm.events({
	'submit form': function(e, t){
		e.preventDefault();
		
		var doc = {};
		doc.brandName = t.$('[name=brandName]').val()
		doc.modelName =	t.$('[name=modelName]').val()
	  doc.height = t.$('[name=height]').val()
	  doc.thickness = t.$('[name=thickness]').val()
	  doc.boardType = t.$('[name=boardType]').val()
	  doc.tailType = t.$('[name=tailType]').val()
	  doc.finSetup = t.$('[name=finSetup]').val()
	  doc.finSystem = t.$('[name=finSystem]').val()
	  doc.askingPrice = t.$('[name=askingPrice]').val()
	  doc.location = t.$('[name=location]').val()
	  doc.email = t.$('[name=email]').val()
	  doc.phone = t.$('[name=phone]').val()

	  var uploads = Session.get("uploaded");

		var urls = []
		_.each(uploads, function(upload){
			urls.push(upload.url);
		});

		Meteor.call('insertBoard', doc, uploads);

	}
});