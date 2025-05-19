import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import logo from '../../assets/logo.png';
import googleLogo from '../../assets/google-logo.png';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export const SignupLeftSide = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="w-[50%] h-screen bg-white text-gray-800 flex flex-col justify-start items-center px-10 pt-4">
      <div className="w-full max-w-[500px] flex flex-col items-start gap-12">
        {/* Logo */}
        <img src={logo} alt="Logo" className="w-28 h-28 object-contain self-start" />

        {/* Title and Form */}
        <div className="w-full flex flex-col gap-10">
          <h2 className="text-5xl font-medium text-gray-800 self-start">Sign up</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
            {/* Name */}
            <label htmlFor="name" className="text-2xl text-black font-normal">Name*</label>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <input
                  {...field}
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-[90%] border border-gray-300 rounded-full px-8 py-6 text-2xl"
                />
              )}
            />
            {errors.name?.message && (
              <p className="text-red-600 text-xl pl-4">{errors.name.message}</p>
            )}

            {/* Email */}
            <label htmlFor="email" className="text-2xl text-black font-normal">Email*</label>
            <Controller
              name="email"
              control={control}
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-[90%] border border-gray-300 rounded-full px-8 py-6 text-2xl"
                />
              )}
            />
            {errors.email?.message && (
              <p className="text-red-600 text-xl pl-4">{errors.email.message}</p>
            )}

            {/* Password */}
            <label htmlFor="password" className="text-2xl text-black font-normal">Password*</label>
            <Controller
              name="password"
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters.',
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-[90%] border border-gray-300 rounded-full px-8 py-6 text-2xl"
                />
              )}
            />
            {errors.password?.message && (
              <p className="text-red-600 text-xl pl-4">{errors.password.message}</p>
            )}

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-[90%] py-4 rounded-full text-[1.6rem] bg-purple text-white border border-purple font-normal transition duration-200 ease-in-out hover:bg-white hover:text-purple hover:border-purple active:bg-white active:text-purple active:border-purple mb-0"
            >
              Create account
            </button>

            {/* Google Signup Button */}
            <button
              type="button"
              className="w-[90%] flex items-center justify-center border border-gray-300 py-4 rounded-full gap-5 text-2xl font-normal text-black bg-white hover:border-blue-500 hover:text-blue-500 hover:bg-white active:border-blue-500 active:text-blue-500 active:bg-white mt-0"
            >
              <img src={googleLogo} alt="Google logo" className="w-8 h-8" />
              Sign up with Google
            </button>
          </form>

          {/* Login Prompt */}
          <p className="text-2xl text-gray-600 text-center mt-1">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:underline font-bold">
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 w-full max-w-[500px] flex justify-between text-2xl text-gray-500 px-2">
        <span>© SoftyEducation</span>
        <span>📧 help@SoftyEducation.com</span>
      </div>
    </div>
  );
};
