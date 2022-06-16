import { Comment as CommentType } from "../types/types";
import Comment from "./Comment";

type Props = {
  comment: CommentType;
};

const CommentThread = ({ comment }: Props) => {
  return (
    <div className="parent-comment">
      <Comment key={comment.id} {...comment} />
      <div className="replies">
        {comment.replies.map((reply) => {
          return <Comment key={reply.id} {...reply} />;
        })}
        <a href="/#" className="show_more">
          Show More Replies (2)
        </a>
      </div>
    </div>
  );
};

export default CommentThread;
