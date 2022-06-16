import { Comment as CommentType } from "../types/types";
import Comment from "./Comment";

type Props = {
  comment: CommentType;
  onMoreReplies: (value: string) => void;
};

const CommentThread = ({ comment, onMoreReplies }: Props) => {
  const handleMoreReplies = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onMoreReplies(comment.id);
  };
  return (
    <div className="parent-comment">
      <Comment key={comment.id} {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        {comment.replies_count === comment.replies.length ? null : (
          <a href="/#" className="show_more" onClick={handleMoreReplies}>
            Show More Replies (2)
          </a>
        )}
      </div>
    </div>
  );
};

export default CommentThread;
