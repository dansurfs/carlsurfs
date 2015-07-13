Router.configure({
	layoutTemplate: 'applicationLayout',
	waitOn: function(){
		return [Meteor.subscribe('boards')];
	}
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

