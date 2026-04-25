import LatestPosts from "../components/LatestPosts";

const Home = ({ snippets }) => {
  console.log(snippets);

  return (
    <div className="max-w-3xl mx-auto mt-10 text-[1.1em] ">
      <h2 className="font-bold text-xl text-gray-700">Latest Snippets</h2>
      <LatestPosts snippets={snippets} />
    </div>
  );
};

export default Home;
