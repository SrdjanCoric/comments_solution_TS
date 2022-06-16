import { Comment } from "../types/types";
import CommentThread from "./CommentThread";

type Props = {
  comments: Comment[];
};

const Comments = ({ comments }: Props) => {
  return (
    <div className="comments">
      <h2>Comments (2)</h2>
      {comments.map((comment) => (
        <CommentThread key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
