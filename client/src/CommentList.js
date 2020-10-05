import React from "react";

function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }

    if (comment.status === "pending") {
      content = "This comment is waiting moderation.";
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}

export default CommentList;
