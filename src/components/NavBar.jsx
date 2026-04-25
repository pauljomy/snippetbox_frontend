import MenuButton from "./MenuButton";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="w-full bg-[#F8FAFB] h-15 flex items-center">
      <nav className="flex justify-between items-center max-w-3xl w-full mx-auto text-xl">
        <div className="flex gap-10">
          <Link to="/">
            <MenuButton label="Home" />
          </Link>
          <Link to="/snippet/create">
            <MenuButton label="Create Snippet" />
          </Link>
        </div>
        <div>
          <Link to="/logout">
            <MenuButton label="Logout" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
