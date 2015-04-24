var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a commentBox.
      </div>
    );
  }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);
