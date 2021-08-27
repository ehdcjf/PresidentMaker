import CommentLayout from "./CommentLayout";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
const Comment = ({board_id}) => {
  return (
    <CommentLayout>
      <CommentForm root={0} />
      <CommentList root={0} />
    </CommentLayout>
  );
};

export default Comment;
