import Home from "@/pages/Home.jsx";
import Header from "./components/Header.jsx";
import Section from "./components/Section.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <div className="  bg-[#F2F3F7] min-h-screen text-[#6B6E76]">
      <Header />
      <div className="w-full bg-[#F8FAFB] h-20 flex items-center">
        <NavBar />
      </div>
      <Section />
    </div>
  );
};

export default App;
