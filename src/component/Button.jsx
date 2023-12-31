const Button = ({ btnLable, btnStyle }) => {
  return (
    <button
      className={`${
        btnStyle === "notransparent"
          ? "bg-pink-500 border-transparent"
          : "bg-transparent"
      } w-[250px] py-2 border rounded-full`}
    >
      {btnLable}
    </button>
  );
};

export default Button;
