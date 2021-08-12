import CommentLayout from "./CommentLayout";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Comment = () => {
  return (
    <CommentLayout>
      <CommentForm master={0} />
      {/* <CommentList /> */}
    </CommentLayout>
  );
};

export default Comment;
