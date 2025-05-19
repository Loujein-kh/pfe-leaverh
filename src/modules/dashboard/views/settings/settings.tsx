import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Home, FileText, Calendar, User, Clipboard, Camera, UploadCloud } from "lucide-react";
import logo from "../../../auth/assets/logo.png";
import homeIcon from '../../../dashboard/assets/home.png';
import registrationsIcon from '../../../dashboard/assets/registrations.png';
import leavesIcon from '../../../dashboard/assets/leaves.png';
import employeeIcon from '../../../dashboard/assets/employee.png';
import jobsIcon from '../../../dashboard/assets/jobs.png';
import recordingsIcon from '../../../dashboard/assets/recordings.png';
import settingsIcon from '../../../dashboard/assets/settings.png';


import { Controller, useForm } from "react-hook-form";
import { Select } from 'antd';

export default function CreateJob() {
  const navigate = useNavigate();
  
    const [selectedImage, setSelectedImage] = useState("https://i.pravatar.cc/100");
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      }
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
            <img src={registrationsIcon} alt="Registrations" className="w-10 h-10" /> Registrations
          </Link>
          <Link to="/leaves" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={leavesIcon} alt="Leaves" className="w-10 h-10" /> Leaves
          </Link>
          <Link to="/employee" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={employeeIcon} alt="Employee" className="w-10 h-10" /> Employee
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2  font-semibold text-2xl hover:text-purple-800">
            <img src={jobsIcon} alt="Jobs" className="w-10 h-10" /> Jobs
          </Link>
          <Link to="/recordings" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={recordingsIcon} alt="Recordings" className="w-10 h-10" /> Recordings
          </Link>
        </nav>
        <div className="pt-8 border-t border-gray-300 mt-4">
          <Link to="/settings" className="flex items-center gap-2 text-purple-700 font-medium text-2xl text-gray-700 hover:text-purple-700">
            <img src={settingsIcon} alt="Settings" className="w-10 h-10" /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white px-16 py-12">
        
       

        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            
            <div>
              <h2 className="text-4xl font-semibold">Profile Settings</h2>
            </div>
          </div>
          
        </div>

        {/* Job Overview */}
        <div>
          <h2 className="text-3xl font-semibold mt-10">Company Profile</h2>
          <p className="text-gray-400 text-xl mb-8 mt-4">Update your company photo and details here.</p>
        </div>
        <hr />
        <div className="flex items-center gap-6 mt-10 mb-8">
            <div className="w-32">
              <label className="block text-lg font-medium">Name</label>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <input type="text" defaultValue="farouk" className="w-full border rounded-md px-4 py-3 text-lg" />
            </div>
         </div>
         <hr/>
         <div className="flex items-center gap-6 mt-10 mb-8">
            <div className="w-32">
              <label className="block text-lg font-medium">Last name</label>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <input type="text" defaultValue="farouk" className="w-full border rounded-md px-4 py-3 text-lg" />
            </div>
         </div>
         <hr/>
             <div className="flex items-center gap-6 mt-10 mb-8">
            <div className="w-32">
              <label className="block text-lg font-medium">Email</label>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <input type="text" defaultValue="farouk12@outlook.com" className="w-full border rounded-md px-4 py-3 text-lg" />
            </div>
         </div>
         <hr/>
         <div className="flex items-center gap-6 mt-8 mb-8">
                     <div className="w-32">
                       <label className="block text-lg font-medium mb-1">Profile pic</label>
                     </div>
                     <div className="flex-1 flex items-center gap-4">
                       <label htmlFor="photo-upload" className="relative cursor-pointer">
                         <img
                           src={selectedImage}
                           alt="avatar"
                           className="w-16 h-16 rounded-full object-cover border border-gray-300"
                         />
                         <input
                           id="photo-upload"
                           type="file"
                           accept="image/*"
                           className="hidden"
                           onChange={handleImageChange}
                         />
                       </label>
         
                       <label
                         htmlFor="photo-upload"
                         className=" border border-gray-300 px-6 py-8 rounded-md text-center w-full max-w-md cursor-pointer"
                       >
                         <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
                         <p className="text-3sm text-purple-600 underline">Click to upload</p>
                         <p className="text-3xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                       </label>
                     </div>
                   </div>
                    <hr/>
                      <div className="flex items-center gap-6 mt-10 mb-8">
                      <div className="w-32">
                      <label className="block text-lg font-medium">Hiring date</label>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                      <input type="text" readOnly defaultValue="03/04/2025" className="w-full text-gray-500 border rounded-md px-4 py-3 text-lg" />
                      </div>
                    </div>
                    <hr/>
                      <div className="flex items-center gap-6 mt-10 mb-8">
                      <div className="w-32">
                      <label className="block text-lg font-medium">Rate per month</label>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                      <input type="text" readOnly defaultValue="$1,000" className="w-full text-gray-500 border rounded-md px-4 py-3 text-lg" />
                      </div>
                    </div>
                     <hr/>
                      <div className="flex items-center gap-6 mt-10 mb-8">
                      <div className="w-32">
                      <label className="block text-lg font-medium">Departement</label>
                      </div>
                      <div className="flex-1 grid grid-cols-2 gap-4">
                      <input type="text" readOnly defaultValue="Marketing" className="w-full text-gray-500 border rounded-md px-4 py-3 text-lg" />
                      </div>
                    </div>
                    <hr/>
                    <div className="flex justify-end gap-4 pt-6">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 text-lg bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-lg bg-purple-700 text-white rounded-md hover:bg-purple-800"
            >
              Save
            </button>
          </div>
                    
       

        
       

           <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
</section>

        
           
      </main>
    </div>
  );
}
