Meteor.methods({
	insertBoard: function(doc, uploads){
		// Check params
		check(doc, BoardsSchema);
		check(uploads, Array);

		// Extra fields
		doc.urls = uploads;
		doc.created = Date.now()

		// Validations
		if(!doc.email.length){
			throw new Meteor.Error('email-required', 'An email is required');
		}

		// Insert
		Boards.insert(doc);

		// Redirect on client
		if(Meteor.isClient){
			Router.go('home');
		}
		
	}
});