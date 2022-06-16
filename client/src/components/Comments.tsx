import { Comment } from "../types/types";
import CommentThread from "./CommentThread";

type Props = {
  comments: Comment[];
  onMoreReplies: (value: string) => void;
};

const Comments = ({ comments, onMoreReplies }: Props) => {
  return (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <CommentThread
          key={comment.id}
          comment={comment}
          onMoreReplies={onMoreReplies}
        />
      ))}
    </div>
  );
};

export default Comments;
