import signupImg from "../../assets/signup.png";

export default function SignupRightSide() {
  return (
    <div
      className="w-[50%] h-screen"
      style={{
        backgroundImage: `url(${signupImg})`,
        backgroundSize: 'cover',       // Fills the container completely
        backgroundPosition: 'center',  // Centers the image nicely
        backgroundRepeat: 'no-repeat', // No repetition
      }}
    />
  );
}
