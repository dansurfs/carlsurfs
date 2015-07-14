Template.boardList.helpers({
	boards: function(){
		return Boards.find();
	}
});

Template.boardList.events({
	'click .board-container': function(){
		Router.go('board.view', {_id: this._id});
	}
});


