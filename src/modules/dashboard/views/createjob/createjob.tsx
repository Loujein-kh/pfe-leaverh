// ... your imports remain the same
import React, { useState } from "react";
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
import { UploadCloud } from "lucide-react"; 


export default function CreateJob() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    seats: "",
    department: "",
    deadline: "",
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, image: e.target.files?.[0] || null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted job:", formData);
    navigate("/dashboard");
  };

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
            <img src={registrationsIcon}  alt="Registrations" className="w-10 h-10" /> Registrations 
          </Link>
          <Link to="/leaves" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={leavesIcon}  alt="Leaves" className="w-10 h-10" /> Leaves
          </Link>
          <Link to="/employee" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={employeeIcon}  alt="Employee" className="w-10 h-10" /> Employee
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 text-purple-700 font-semibold text-2xl hover:text-purple-800">
            <img src={jobsIcon}  alt="Jobs" className="w-10 h-10" /> Jobs
          </Link>
          <Link to="/recordings" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={recordingsIcon}  alt="Recordings" className="w-10 h-10" /> Recordings
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
        <h1 className="text-5xl font-bold mb-12">Create</h1>
        <h3 className="text-2xl font-medium mb-1">Personal info</h3>
        <p className="text-gray-400 text-xl font-medium mb-8">Update your photo and personal details here.</p>
        <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

        <form className="space-y-7 w-full" onSubmit={handleSubmit}>
          {/* Job Name */}
          <div className="space-y-6">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-center max-w-5xl">
              <label className="text-black text-xl font-medium">Job Name</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border border-gray-300 px-5 py-3 rounded-lg text-lg w-full"
                required
              />
            </div>
          </div>
          <div className="w-full border-t border-gray-200"></div>

          {/* Description */}
          <div className="space-y-6">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-start max-w-5xl">
              <label className="text-black text-xl font-medium pt-2">Description</label>
              <textarea
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 px-5 py-3 rounded-lg text-lg w-full"
              />
            </div>
          </div>
          <div className="w-full border-t border-gray-200"></div>

          {/* Job Picture */}
          <div className="space-y-6">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-start max-w-5xl">
              <label className="text-black text-xl font-medium pt-2">Choose Job Picture</label>
              <div className="flex items-start gap-6">
                {/* Purple Circle - updated */}
                <div className="min-w-[40px] min-h-[40px] bg-gradient-to-br from-purple-700 to-purple-500 rounded-full flex items-center justify-center">
                  {/* Removed "+" icon */}
                </div>

                {/* Upload box */}
                <div className="border border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center w-full max-w-md">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-gray-500 mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <UploadCloud className="h-10 w-10 text-gray-500 mb-4" />

                       

                      </svg>
                      <span className="text-purple-600 text-lg font-medium underline">Click to upload</span>
                      <p className="text-gray-400 text-sm mt-1">or drag and drop SVG, PNG, JPG or GIF (max. 800×400px)</p>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-t border-gray-200"></div>

          {/* Open Seats */}
          <div className="space-y-6">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-center max-w-5xl">
              <label className="text-black text-xl font-medium">Number of Open Seats</label>
              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                className="border border-gray-300 px-5 py-3 rounded-lg text-lg w-full"
              />
            </div>
          </div>

          {/* Department */}
          <div className="space-y-6">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-center max-w-5xl">
              <label className="text-black text-xl font-medium">Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="border border-gray-300 px-5 py-3 rounded-lg text-lg w-full"
              >
                <option value="">Select department</option>
                <option value="Design">Design</option>
                <option value="HR">HR</option>
                <option value="Tech">Tech</option>
              </select>
            </div>
          </div>

          {/* Deadline */}
          <div className="space-y-6">
            <div className="grid grid-cols-[200px_1fr] gap-8 items-center max-w-5xl">
              <label className="text-black text-xl font-medium">Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="border border-gray-300 px-5 py-3 rounded-lg text-lg w-full"
              />
            </div>
          </div>
          <div className="w-full border-t border-gray-200"></div>
        </form>

        {/* Buttons aligned to extreme right of the page */}
        <div className="flex justify-end gap-6 mt-12 pr-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="border border-gray-400 text-gray-700 px-10 py-4 rounded-lg text-lg hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
}
