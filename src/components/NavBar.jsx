import Home from "@/pages/Home.jsx";
import CreateSnippet from "@/pages/CreateSnippet.jsx";
import Logout from "@/pages/Logout.jsx";

const NavBar = () => {
  return (
    <div className="w-full bg-[#F8FAFB] h-20 flex items-center">
      <nav className="flex justify-between items-center max-w-4xl w-full mx-auto text-xl">
        <div className="flex gap-10">
          <Home />
          <CreateSnippet />
        </div>
        <div>
          <Logout />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
