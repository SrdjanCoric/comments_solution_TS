import { useState, useEffect } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import axios from "axios";
import { BaseComment, Comment } from "./types/types";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const { data } = await axios.get("/api/comments");
      setComments(data);
    };
    fetchComments();
  }, []);

  const handleMoreReplies = async (id: string) => {
    const { data } = await axios.get(`/api/comment_replies?comment_id=${id}`);
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, replies: comment.replies.concat(data) };
        } else {
          return comment;
        }
      })
    );
  };

  const handleSubmit = async (
    newComment: BaseComment,
    callback?: () => void
  ) => {
    const { data } = await axios.post("/api/comments", { ...newComment });
    setComments(comments.concat(data));
    if (callback) {
      callback();
    }
  };

  return (
    <div>
      <Comments comments={comments} onMoreReplies={handleMoreReplies} />
      <AddCommentForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
