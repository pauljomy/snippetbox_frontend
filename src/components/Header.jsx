import logo from "@/assets/img/logo.png";

const Header = () => {
  return (
    <div>
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(to right, #e74c3c 0% 16.6%, #e67e22 16.6% 33.2%, #f1c40f 33.2% 49.8%, #2ecc71 49.8% 66.4%, #3498db 66.4% 83%, #9b59b6 83% 100%)",
        }}
      ></div>
      <div className="flex gap-5 py-10 justify-center">
        <img src={logo} alt="Logo snippetbox" />
        <h1 className="text-4xl text-gray-700 font-bold">Snipppetbox</h1>
      </div>
    </div>
  );
};

export default Header;
