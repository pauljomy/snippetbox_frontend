import Home from "@/pages/Home.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import Delete from "./components/Delete.jsx";

const App = () => {
  const [deleteIn, setDeleteIn] = useState();
  return (
    <div className="  bg-[#F2F3F7] min-h-screen text-[#6B6E76]">
      <Header />
      <NavBar />
      <Section />
      <Delete deleteIn={deleteIn} setDeleteIn={setDeleteIn} />
      <div className="max-w-3xl mx-auto mt-8">
        <button className="px-4 py-3 bg-green-500 text-xl text-white rounded-sm">
          Publish Snippet
        </button>
      </div>
    </div>
  );
};

export default App;
