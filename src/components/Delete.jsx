const Delete = ({ deleteIn, setDeleteIn }) => {
  return (
    <div className="flex gap-12 max-w-3xl w-full mx-auto mt-5 text-xl">
      <span>Delete in:</span>
      <label>
        <input
          className="mr-3"
          type="radio"
          name="deleteIn"
          value="oneYear"
          checked={deleteIn === "oneYear"}
          onChange={(e) => setDeleteIn(e.target.value)}
        />
        One Year
      </label>
      <label>
        <input
          className="mr-3"
          type="radio"
          name="deleteIn"
          value="twoYear"
          checked={deleteIn === "twoYear"}
          onChange={(e) => setDeleteIn(e.target.value)}
        />
        Two Year
      </label>
      <label>
        <input
          className="mr-3"
          type="radio"
          name="deleteIn"
          value="threeYear"
          checked={deleteIn === "threeYear"}
          onChange={(e) => setDeleteIn(e.target.value)}
        />
        Three Year
      </label>
    </div>
  );
};

export default Delete;
