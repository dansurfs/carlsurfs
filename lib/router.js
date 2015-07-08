Router.configure({
	layoutTemplate: 'applicationLayout'
});

Router.route('/', {
	name: "home",
	action: function(){
		this.render("homePage");
	}
});