import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, FileText, Calendar, User, Clipboard, Camera } from "lucide-react";
import logo from "../../../auth/assets/logo.png";
import homeIcon from '../../../dashboard/assets/home.png';
import registrationsIcon from '../../../dashboard/assets/registrations.png';
import leavesIcon from '../../../dashboard/assets/leaves.png';
import employeeIcon from '../../../dashboard/assets/employee.png';
import jobsIcon from '../../../dashboard/assets/jobs.png';
import recordingsIcon from '../../../dashboard/assets/recordings.png';
import settingsIcon from '../../../dashboard/assets/settings.png';

export default function CreateJob() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[15%] bg-gray-100 border-r border-gray-300 p-5">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="Logo" className="w-25 h-10" />
        </div>
        <nav className="space-y-8 text-gray-700">
          <Link to="/home" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={homeIcon} alt="Home" className="w-10 h-10" /> Home
          </Link>
          <Link to="/registrations" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={registrationsIcon} alt="Registrations" className="w-10 h-10" /> Registrations
          </Link>
          <Link to="/leaves" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={leavesIcon} alt="Leaves" className="w-10 h-10" /> Leaves
          </Link>
          <Link to="/employee" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={employeeIcon} alt="Employee" className="w-10 h-10" /> Employee
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 text-purple-700 font-semibold text-2xl hover:text-purple-800">
            <img src={jobsIcon} alt="Jobs" className="w-10 h-10" /> Jobs
          </Link>
          <Link to="/recordings" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={recordingsIcon} alt="Recordings" className="w-10 h-10" /> Recordings
          </Link>
        </nav>
        <div className="pt-8 border-t border-gray-300 mt-4">
          <Link to="/settings" className="flex items-center gap-2 font-medium text-2xl text-gray-700 hover:text-purple-700">
            <img src={settingsIcon} alt="Settings" className="w-10 h-10" /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white px-16 py-12">
        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 px-9 py-3 text-lg font-medium text-black bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          ← Go Back
        </button>

        {/* Job Title + Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-600"></div>
            <div>
              <h2 className="text-4xl font-semibold">Irma Hane</h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 border border-gray-300 text-black bg-white rounded-md text-xl hover:bg-gray-100 transition">
              {"..."}
            </button>
            <button className="px-6 py-2 bg-purple-700 text-white rounded-md text-lg font-medium hover:bg-purple-800 transition">
              + View Submissions
            </button>
          </div>
        </div>

        {/* Job Overview */}
        <div>
          <h2 className="text-3xl font-semibold mt-10">Experience</h2>
          <p className="text-gray-400 text-2xl mb-8 mt-4">I specialise in UX/UI design, brand strategy,and webflow development.</p>
        </div>
        <hr />


        
        <div className="max-w-5xl p-6 bg-white">
           <section className="mb-6">
           <h2 className="text-xl font-semibold mb-2">About me</h2>
           <p className="text-xl text-gray-700 mb-2">
              I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design,
              brand strategy, and Webflow development. I'm always striving to grow and learn something
              new and I don't take myself too seriously.
            </p>
            <p className="text-xl text-gray-700">
              I'm passionate about helping startups grow, improve their customer experience, and to
              raise venture capital through good design.
            </p>
            <a href="#" className="text-xl text-blue-500 mt-2 inline-block">Read more</a>
           </section></div> 


           <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Motivational letter */}
  <div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">Motivational Letter</h3>
    <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between px-5 py-4 bg-purple-50 border border-purple-300 rounded-xl shadow-sm hover:bg-purple-100 transition duration-200"
    >
      <div className="flex items-center gap-3">
        <span role="img" aria-label="file" className="text-2xl"></span>
        <span className="text-lg font-medium text-purple-900">Tech design requirements.pdf</span>
      </div>
      <span className="text-sm text-purple-700">200 KB – 100% uploaded</span>
    </a>
  </div>

  {/* Resume */}
  <div>
    <h3 className="text-lg font-semibold mb-3 text-gray-800">Resume</h3>
    <a
      href="https://www.google.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between px-5 py-4 bg-green-50 border border-green-300 rounded-xl shadow-sm hover:bg-green-100 transition duration-200"
    >
      <div className="flex items-center gap-3">
        <span role="img" aria-label="file" className="text-2xl"></span>
        <span className="text-lg font-medium text-green-900">Tech design requirements.pdf</span>
      </div>
      <span className="text-sm text-green-700">200 KB – 100% uploaded</span>
    </a>
  </div>
</section>

        
           
      </main>
    </div>
  );
}
