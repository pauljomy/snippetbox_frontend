import Delete from "../components/Delete.jsx";
import PublishBtn from "../components/PublishBtn.jsx";

const CreateSnippet = ({ deleteIn, setDeleteIn }) => {
  return (
    <section className="max-w-3xl mx-auto mt-10 text-xl">
      <div className="mb-5">
        <p className="mb-3">Text:</p>
        <input
          type="text"
          className="w-full h-13 bg-white border border-gray-200 outline-none p-3"
        />
      </div>
      <div className="mt-3">
        <p className="mb-3 ">Content:</p>
        <textarea className="w-full h-80 bg-white border border-gray-200 outline-none p-3" />
      </div>
      <Delete deleteIn={deleteIn} setDeleteIn={setDeleteIn} />
      <PublishBtn />
    </section>
  );
};

export default CreateSnippet;
