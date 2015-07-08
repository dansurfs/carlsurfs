Template.cloudinaryUpload.helpers({
	uploads: function(){
		return Session.get("uploaded");
	}
});

Template.cloudinaryUpload.onRendered(function(){
	document.getElementById("upload_widget_opener").addEventListener("click", function() {
		cloudinary.openUploadWidget({ cloud_name: 'surfboardhub-com', upload_preset: 'i6atr4he'}, uploaded, false);	
	});

	Session.set("uploaded", []);
});

var uploaded = function(err, res){
	if(!err){
		_.each(res, function(upload){
			var uploaded = Session.get("uploaded");
			uploaded.push({url: upload.url});
			Session.set("uploaded", uploaded)
		})
	} 
};
