import { BaseComment } from "../types/types";
import { useState } from "react";
type Props = {
  onSubmit: (value: BaseComment, callback: () => void) => void;
};

const AddCommentForm = ({ onSubmit }: Props) => {
  const [author, setAuthor] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit({ author, body }, resetInputs);
  };

  const resetInputs = () => {
    setAuthor("");
    setBody("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <h2>Post a Comment</h2>
      <div className="input-group">
        <label>Your Name</label>
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Your Comment</label>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCommentForm;
