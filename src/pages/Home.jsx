import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../component/Button";
const Home = () => {
  return (
    <section className=" HomeScreen w-full h-screen bg-center bg-no-repeat bg-cover">
      <div className="pl-5 pr-5 w-full h-10 flex items-center justify-between">
        <div className="text-gray-200">Logo</div>
        <div className="text-gray-200">
          <GiHamburgerMenu />
        </div>
      </div>

      <p className="w-full text-2xl text-center text-white">
        FIND YOUR LIFE SOLEMATE
      </p>
      <p className="w-full text-gray-100 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit
        temporibus enim ipsum, quam quos quod excepturi libero tempore nemo
        cumque culpa ratione inventore id vel soluta. Ea, possimus libero?
      </p>

      <div className="w-full flex flex-col items-center justify-center gap-2 mt-4">
        <Button btnLable={"Register"} btnStyle={"notransparent"} />
        <Button btnLable={"Log in"} btnStyle={"transparent"} />
      </div>
    </section>
  );
};

export default Home;
