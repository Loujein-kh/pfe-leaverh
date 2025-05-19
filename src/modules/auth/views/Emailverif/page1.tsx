import React from 'react';
import logo from '../../assets/logo.png';
import { MailIcon } from 'lucide-react'; // Optional, you can replace with your own icon or image

const Page1 = () => {
    return (
        <div className="flex h-screen w-full bg-white text-gray-800">
            {/* Left Side */}
            <div className="w-[25%] bg-white border-r border-gray-200 flex flex-col justify-between px-10 py-8">
                {/* Top - Logo and Steps */}
                <div className="flex flex-col gap-16">
                    {/* Logo */}
                    <img src={logo} alt="Yuna logo" className="w-28 h-28 object-contain" />

                    {/* Steps */}
                    <div className="flex flex-col gap-8 text-[1.6rem]">
                        <div className="flex items-start gap-4">
                            <span className="text-purple-600 text-3xl">✔</span>
                            <div>
                                <p className="font-semibold text-gray-800">Check your email</p>
                                <p className="text-gray-500 text-[1.3rem]">Lorem Ipsum Lorem Ipsum</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="w-4 h-4 mt-1 rounded-full bg-purple-500"></span>
                            <div>
                                <p className="font-semibold text-gray-800">Verify Code</p>
                                <p className="text-gray-500 text-[1.3rem]">Lorem Ipsum Lorem</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="w-4 h-4 mt-1 rounded-full border border-gray-400"></span>
                            <div>
                                <p className="font-semibold text-gray-800">Continue to login</p>
                                <p className="text-gray-500 text-[1.3rem]">Start collaborating with your team</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-[1.5rem] text-gray-500 flex justify-between w-full">
                    <span>© SoftyEducation</span>
                    <span>📧 help@SoftyEducation.com</span>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-[60%] flex flex-col justify-center items-center text-center gap-8 px-10">
                <div className="bg-purple-100 p-5 rounded-full">
                    <MailIcon size={40} className="text-purple-600" />
                </div>
                <h1 className="text-4xl font-semibold text-gray-900">Check your email</h1>
                <p className="text-[1.6rem] text-gray-600">
                    We sent a verification link to <br />
                    <span className="font-medium text-gray-800">Faroukabichoudev@gmail.com</span>
                </p>
                <button className="mt-4 w-[250px] bg-purple text-white text-[1.6rem] py-3 rounded-full hover:bg-purple-700 transition">
                    Enter code manually
                </button>
                <a href="/login" className="mt-4 text-[1.5rem] text-gray-600 hover:underline">
                    ← Back to log in
                </a>
            </div>
        </div>
    );
};

export default Page1;
