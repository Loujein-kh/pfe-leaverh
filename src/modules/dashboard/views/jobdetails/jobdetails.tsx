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
              <h2 className="text-4xl font-semibold">Ui/UX design</h2>
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
          <h2 className="text-2xl font-semibold mt-10">Job overview</h2>
          <p className="text-gray-400 text-xl mb-8">A short summary of the job (truncated if too long).</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-gray-200 pb-3">
          <button className="text-purple-700 text-xl font-semibold border-b-2 border-purple-700 mb-4">Job brief</button>
          <button 
          onClick={() => navigate('/registrations')}
          className="text-gray-500 text-xl hover:text-purple-700 mb-4">Members</button>
        </div>

        {/* Info Box */}
        <div className="bg-purple-50 text-purple-800 text-2xl border border-purple-200 px-6 py-4 rounded-lg mb-10">
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere.
        </div>

        {/* About the Job */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">About the Job</h3>
          <p className="text-gray-600 text-2xl mb-4">
            Dolor enim eu tortor urna sed dui nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer id egestas quis malesuada fringilla. Elit nisi in eleifend nisi id. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 text-2xl">
            <li>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id diam. Elit orci, tincidunt aenean tempus.</li>
            <li>Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</li>
            <li>Non pellentesque congue eget consectetur turpis.</li>
            <li>Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
