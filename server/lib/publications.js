Meteor.publish("boards", function(){
	return Boards.find({},{fields: {email: false}}); 
})