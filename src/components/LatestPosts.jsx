import SinglePost from "./SinglePost";
import { Link } from "react-router-dom";

const LatestPosts = ({ snippets }) => {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return (
      date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }) +
      " at " +
      date.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );
  };

  return (
    <div className="mt-10 max-w-3xl border border-gray-200">
      <div className="grid grid-cols-[2fr_2fr_1fr] px-5 py-3 font-bold text-gray-700 border-b border-gray-200 bg-gray-50">
        <span>Title</span>
        <span>Created</span>
        <span className="text-right">ID</span>
      </div>
      {snippets.map((snippet, index) => (
        <div key={snippet.ID} className={index % 2 === 0 ? "" : "bg-gray-50"}>
          <Link to={`/snippet/view/${snippet.ID}`}>
            <div className="grid grid-cols-[2fr_2fr_1fr] px-5 py-3 border-b border-gray-200 ">
              <span className="text-green-600">{snippet.Title}</span>
              <span>{formatDate(snippet.Created)}</span>
              <span className=" text-right">#{snippet.ID}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
