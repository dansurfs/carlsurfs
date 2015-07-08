Router.configure({
	layoutTemplate: 'applicationLayout'
});

Router.route('/', {
	name: "home",
	action: function(){
		this.render("homePage");
	}
});

Router.route('/upload', {
	name: "upload",
	action: function(){
		this.render("uploadPage");
	}
});

Router.route('/post', {
	name: "post",
	action: function(){
		this.render("postPage");
	}
});

