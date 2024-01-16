import mainLogo from "../assets/images/Logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4">
      <div>
        <img src={mainLogo} alt="logo" className="w-32 h-8" />
      </div>

      <div className="flex items-center space-x-8">
        <ul className="flex space-x-8">
          <li>Home</li>
          <li>Flashcard</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <button className="flex items-center bg-gradient-to-r from-[#06286E] via-[#164EC0] to-[#06286E] text-white py-3 px-4 rounded-full">
          <span className="ml-2">Login</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
