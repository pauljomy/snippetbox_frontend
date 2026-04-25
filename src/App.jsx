import Home from "@/pages/Home.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import { useState, useEffect } from "react";
import CreateSnippet from "./pages/CreateSnippet.jsx";
import { Route, Routes } from "react-router";
import Logout from "./pages/Logout.jsx";
import SnippetView from "./pages/SnippetView.jsx";

const App = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    const latestSnippets = async () => {
      const response = await fetch("http://localhost:4000", requestOptions);
      const data = await response.json();
      setSnippets(data);
    };

    latestSnippets();
  }, []);

  return (
    <div className="min-h-screen text-[#6B6E76] w-full flex flex-col">
      <Header />
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Home snippets={snippets} setSnippets={setSnippets} />}
          />
          <Route path="/snippet/create" element={<CreateSnippet />} />
          <Route
            path="/snippet/view/:id"
            element={<SnippetView snippets={snippets} />}
          />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      <div className="w-full h-15 bg-[#F8FAFB] border-t border-gray-200 flex items-center justify-center text-xl mt-auto">
        <p>
          Powered by <span className="text-green-600"> Go </span> (2026)
        </p>
      </div>
    </div>
  );
};

export default App;
