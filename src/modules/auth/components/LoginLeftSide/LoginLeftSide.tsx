import React from "react";
import { Button, Checkbox } from "antd";
import { Controller, useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import googleLogo from "../../assets/google-logo.png";

const LoginLeftSide = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<{ email: string; password: string }>();

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
  };

  return (
    <div className="w-[50%] h-screen flex justify-center items-center">
      <div className="w-9/12 flex flex-col justify-between h-[90%]">
        <div className="flex flex-col gap-14">
          {/* Logo */}
          <img
            src={logo}
            alt="logo of softy education"
            className="w-[8rem] h-auto"
          />

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h2 className="text-[3.4rem] font-medium">Log in</h2>
            <p className="text-[1.6rem] text-gray-500">
              Welcome back! Please enter your details.
            </p>
          </div>

          {/* Form */}
          <form
            className="w-[55rem] flex flex-col gap-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email Field */}
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="email" className="text-[1.8rem] text-black">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{ required: "Email is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-5 border font-light text-2xl border-gray-200 rounded-full placeholder:text-gray-500 focus:outline-color-blue-1"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-600 pl-6 text-[1.3rem]">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="password" className="text-[1.8rem] text-black-1">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-5 border font-light text-[1.4rem] border-gray-200 rounded-full placeholder:text-gray-500 focus:outline-color-blue-1"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-600 pl-6 text-[1.3rem]">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="flex justify-between items-center w-full">
              <Checkbox>
                <span className="text-black text-[1.5rem]">
                  Remember for 30 days
                </span>
              </Checkbox>
              <a
                href="#"
                className="text-[1.6rem] text-[#7F56D9] hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4">
              <Button
                htmlType="submit"
                className={`
                  custom-signin-button
                  w-full py-7 rounded-full text-[1.6rem]
                  bg-purple text-white border border-purple
                  transition duration-200 ease-in-out
                `}>
                Sign in
              </Button>
              <Button
                htmlType="button"
                className="w-full py-7 rounded-full text-[1.6rem] bg-white text-black border border-gray-300 flex justify-center items-center gap-4"
              >
                <img
                  src={googleLogo}
                  alt="Google logo"
                  className="w-6 h-6"
                />
                Sign in with Google
              </Button>
            </div>

            {/* Sign up link */}
            <div className="text-center text-[1.5rem] mt-4">
              <span className="text-gray-500">Don't have an account? </span>
              <a
                href="/signup"
                className="text-[#7F56D9] font-medium hover:underline"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-between items-center text-[1.4rem] text-gray-500">
          <div className="flex items-center gap-2">
            <span>© SoftyEducation</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📧 help@SoftyEducation.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLeftSide;
