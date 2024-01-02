import Button from "../component/Button";
const Home = () => {
  return (
    <>
      <section className=" HomeScreen w-full h-screen flex flex-col items-center justify-center bg-center bg-no-repeat bg-cover ">
        <p className="px-20 w-full text-[40px] text-center text-white">
          Find Your Life Soulmate
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
      <section className="mt-4">
        <p className="w-full text-center text-gray-700 text-2xl">
          Our Services
        </p>
        <p className="w-full text-center text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam magnam
          quas a quidem sunt, amet eius cupiditate, excepturi maiores veniam
          tenetur ut ipsum aspernatur? Sit aperiam maiores repudiandae hic? Non!
        </p>
        <div className="w-full grid grid-rows-2 gap-2 p-4">
          <div className="w-full h-[250px] bg-[url('/public/assets/img/img1.jpeg')] bg-center bg-no-repeat bg-cover">
            img
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-2">
            <div className="w-full h-[250px] bg-[url('/public/assets/img/img1.jpeg')] bg-center bg-no-repeat bg-cover">
              img1
            </div>
            <div className="w-full h-[250px] bg-[url('/public/assets/img/img1.jpeg')] bg-center bg-no-repeat bg-cover">
              img2
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="w-full h-44 bg-pink-600"></div>
      </section>
    </>
  );
};

export default Home;
