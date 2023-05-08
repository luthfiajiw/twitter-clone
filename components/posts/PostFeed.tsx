import usePosts from "@/hooks/usePosts";
import { Fragment } from "react";
import PostItem from "./PostItem";

interface IPostFeedProps {
  userId?: string
}

const PostFeed: React.FC<IPostFeedProps> = (props) => {
  const { data: posts = [] } = usePosts(props.userId)


  return (
    <Fragment>
      {posts.map((post: Record<string, any>) => (
        <PostItem
          key={post.id}
          userId={props.userId}
          data={post}
        />
      ))}
    </Fragment>
  );
};

export default PostFeed;
