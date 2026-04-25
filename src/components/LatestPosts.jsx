import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";

const LatestPosts = ({ snippets }) => {
  return (
    <div>
      {snippets.map((snippet) => (
        <div key={snippet.ID}>
          <Link to={`/snippet/view/${snippet.ID}`}>
            <SinglePost snippet={snippet} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
