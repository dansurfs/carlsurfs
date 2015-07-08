Meteor.methods({
	save_url:function(response){
		console.log(response.upload_data);
		console.log(response.context);
	}
});