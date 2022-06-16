import { useState, useEffect } from "react";
import AddCommentForm from "./components/AddCommentForm";
import Comments from "./components/Comments";
import data from "./lib/comments";
import { Comment } from "./types/types";

function App() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    setComments(data);
  }, []);
  return (
<<<<<<< HEAD
    <div className="App">
      <h1>Welcome</h1>
=======
    <div>
      <Comments comments={comments} />
      <AddCommentForm />
>>>>>>> day_1
    </div>
  );
}

export default App;
