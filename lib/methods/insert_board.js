Meteor.methods({
	insertBoard: function(doc, uploads){
		// Check params
		check(doc, BoardsSchema);
		check(uploads, Array);

		// Add urls
		doc.urls = uploads;

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