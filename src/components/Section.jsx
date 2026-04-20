const Section = () => {
  return (
    <section className="max-w-4xl mx-auto mt-15 text-xl">
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
    </section>
  );
};

export default Section;
