import CommentLayout from "./CommentLayout";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
const Comment = ({board_id}) => {
  return (
    <CommentLayout>
      <CommentForm root={0} board_id={board_id}/>
      <CommentList root={0} isReply={false} board_id={board_id}/>
    </CommentLayout>
  );
};

export default Comment;
