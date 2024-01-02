import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <div className="pl-5 pr-5 w-full h-10 flex items-center justify-between">
        <div className="text-gray-200">Logo</div>
        <div className="text-gray-200">
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
