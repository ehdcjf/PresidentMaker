import CommentLayout from "./CommentLayout";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
const Comment = (props) => {
  return (
    <CommentLayout>
      <CommentForm root={0} />
      <CommentList root={0} isReply={false} />
    </CommentLayout>
  );
};

export default Comment;
