/**
 * Knockout version of example commenting app
 */

var CommentsViewModel = function CommentViewModel(props) {
	var converter = new Showdown.converter();

	this.addMarkup = function addMarkup(text) {
		return converter.makeHtml(text);
	};

	this.props = props;
	this.comments = ko.observableArray();
	this.text = ko.observable("");
	this.author = ko.observable("");

	this.onCommentSubmit = function(comment) {
		this.comments.push(comment);
		$.ajax({
			url : this.props.url,
			dataType : 'json',
			type : 'POST',
			data : comment,
			success : this.comments,
			error : function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	};

	this.handleSubmit = function handleSubmit() {
		var author = this.author().trim();
		var text = this.text().trim();
		if (!text || !author) {
			return;
		}
		this.onCommentSubmit({
			author : author,
			text : text
		});
		this.author("");
		this.text("");
	};

	this.loadCommentsFromServer = function loadCommentsFromServer() {
		$.ajax({
			url : this.props.url,
			dataType : 'json',
			success : this.comments,
			error : function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	};

	// initial load
	this.loadCommentsFromServer();
	setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
};

ko.applyBindings(new CommentsViewModel({
	url : 'comments.json',
	pollInterval : 2000
}));