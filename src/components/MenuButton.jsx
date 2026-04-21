const MenuButton = ({ label }) => {
  return (
    <div>
      <span className="hover:text-green-600 hover:underline cursor-pointer">
        {label}
      </span>
    </div>
  );
};

export default MenuButton;
