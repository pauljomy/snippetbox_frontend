const SinglePost = ({ snippet }) => {
  return (
    <div className="my-10 border border-gray-200 max-w-3xl ">
      <div className="flex bg-[#F8FAFB] items-center justify-between px-4 py-3">
        <h3 className="text-xl text-gray-700 font-bold ">{snippet.Title}</h3>
        <p className="">#{snippet.ID}</p>
      </div>
      <div>
        <p className="text-gray-500 bg-white px-4 py-5  whitespace-pre-line">
          {snippet.Content}
        </p>
      </div>
      <div className="flex justify-between items-center px-4 py-3 bg-[#F8FAFB] text-[18px]">
        <p>Created: {new Date(snippet.Created).toLocaleString()}</p>
        <p>Expires: {new Date(snippet.Expires).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default SinglePost;
