import { useParams } from "react-router-dom";
import SinglePost from "../components/SinglePost";

const SnippetView = ({ snippets = [] }) => {
  const { id } = useParams();
  const snippet = snippets.find((s) => s.ID === +id);

  if (!snippet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto text-[1.1em]">
      <SinglePost snippet={snippet} />
    </div>
  );
};

export default SnippetView;
