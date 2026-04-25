import SinglePost from "./SinglePost";

const LatestPosts = ({ snippets }) => {
  return (
    <div>
      {snippets.map((snippet) => (
        <div key={snippet.ID}>
          <SinglePost snippet={snippet} />
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
