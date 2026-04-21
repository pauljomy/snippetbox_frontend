import Home from "@/pages/Home.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState } from "react";
import CreateSnippet from "./pages/CreateSnippet.jsx";
import { Route, Routes } from "react-router";
import Logout from "./pages/Logout.jsx";

const App = () => {
  const [deleteIn, setDeleteIn] = useState();
  return (
    <div className="min-h-screen text-[#6B6E76] w-full">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/snippet/create"
          element={
            <CreateSnippet deleteIn={deleteIn} setDeleteIn={setDeleteIn} />
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
