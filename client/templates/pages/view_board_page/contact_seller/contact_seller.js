


Template.contactSeller.events({
	'click button': function(e, t){
		var id = this._id;
		var message = t.$('#seller-message').val();

		Meteor.call('sendMessage', id, message, function(err, res){
			if(!err) Session.set("messageSent", true);
		});
	}
});