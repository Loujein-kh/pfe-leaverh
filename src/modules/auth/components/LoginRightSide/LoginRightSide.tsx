import loginImg from "../../assets/login.png";

export default function LoginRightSide() {
  return (
    <div
      className="w-[50%] h-screen"
      style={{
        backgroundImage: `url(${loginImg})`,
        backgroundSize: 'cover',       // Fills the container completely
        backgroundPosition: 'center',  // Centers the image nicely
        backgroundRepeat: 'no-repeat', // No repetition
      }}
    />
  );
}
