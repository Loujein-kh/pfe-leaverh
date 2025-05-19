import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Select } from 'antd';
import {
  Home,
  FileText,
  Calendar,
  User,
  Clipboard,
  Camera,
  Mail,
  UploadCloud,
} from "lucide-react";
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
          <Link to="/settings" className="flex items-centre gap-2 font-medium text-2xl text-gray-700 hover:text-purple-700">
            <img src={settingsIcon} alt="Settings" className="w-10 h-10" /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white px-24 py-14">
        <h1 className="text-5xl font-bold mb-12">Create</h1>
        <h3 className="text-2xl font-medium mb-1">Personal info</h3>
        <p className="text-gray-400 text-xl font-medium mb-8">
          Update your photo and personal details here.
        </p>

        {/* Separator Line */}
        <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

        <form className="space-y-8">
          {/* Name */}
          <div className="flex items-center gap-6">
            <div className="w-32">
              <label className="block text-lg font-medium">Name</label>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="w-full border rounded-md px-4 py-3 text-lg" />
              <input type="text" placeholder="Last name" className="w-full border rounded-md px-4 py-3 text-lg" />
            </div>
          </div>

          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Email */}
          <div className="flex items-center gap-6">
            <div className="w-32">
              <label className="block text-lg font-medium">Email address</label>
            </div>
            <div className="flex-1 relative">
              <input
                type="email"
                defaultValue="faroukabichou@gmail.com"
                className="w-full border rounded-md pl-16 pr-4 py-3 text-lg"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
            </div>
          </div>

          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Your photo */}
          <div className="flex items-center gap-6">
            <div className="w-32">
              <label className="block text-lg font-medium mb-1">Your photo</label>
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
                className="border-dashed border-2 border-gray-300 px-6 py-8 rounded-md text-center w-full max-w-md cursor-pointer"
              >
                <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-3sm text-purple-600 underline">Click to upload</p>
                <p className="text-3xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
              </label>
            </div>
          </div>

          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Role, Country, Timezone */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-lg font-medium mb-1">Role</label>
              <input type="text"  className="w-full border rounded-md px-4 py-3 text-lg" />
            </div>
            <div>
              <label className="block text-lg font-medium mb-1">Country</label>
              <select className="w-full border rounded-md px-4 py-3 text-lg">
              <option value="">Select Country</option>
               {[
                  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
                  "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
                  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
                  "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
                  "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo",
                  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
                  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
                  "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
                  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
                  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica",
                  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
                  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
                  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
                  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
                  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
                  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
                  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
                  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
                  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
                  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
                  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
                  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
                  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
                  "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
                  "Zambia", "Zimbabwe"
                  ].map((country) => (
                 <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div>
             <label className="block text-lg font-medium mb-1">Timezone</label>
             <select className="w-full border rounded-md px-4 py-3 text-lg">
               <option>Pacific Standard Time (PST) UTC−08:00</option>
               <option>Mountain Standard Time (MST) UTC−07:00</option>
               <option>Central Standard Time (CST) UTC−06:00</option>
               <option>Eastern Standard Time (EST) UTC−05:00</option>
               <option>Atlantic Standard Time (AST) UTC−04:00</option>
               <option>Newfoundland Standard Time (NST) UTC−03:30</option>
               <option>Greenwich Mean Time (GMT) UTC±00:00</option>
               <option>Central European Time (CET) UTC+01:00</option>
               <option>Eastern European Time (EET) UTC+02:00</option>
               <option>Further Eastern European Time (FET) UTC+03:00</option>
               <option>India Standard Time (IST) UTC+05:30</option>
               <option>Singapore Standard Time (SGT) UTC+08:00</option>
               <option>China Standard Time (CST) UTC+08:00</option>
               <option>Japan Standard Time (JST) UTC+09:00</option>
               <option>Australian Eastern Standard Time (AEST) UTC+10:00</option>
               <option>New Zealand Standard Time (NZST) UTC+12:00</option>
               <option>Hawaii-Aleutian Standard Time (HST) UTC−10:00</option>
               <option>Alaska Standard Time (AKST) UTC−09:00</option>
               <option>Atlantic Daylight Time (ADT) UTC−03:00</option>
               <option>Brasília Time (BRT) UTC−03:00</option>
               <option>Australian Central Standard Time (ACST) UTC+09:30</option>
               <option>Australian Western Standard Time (AWST) UTC+08:00</option>
              </select>
            </div>

          </div>

          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Bio */}
          <div>
            <label className="block text-lg font-medium mb-2">Bio</label>
            {/*<div className="flex items-center gap-2 mb-2">
              <select className="border px-2 py-1 rounded-md text-sm">
                <option>Normal text</option>
              </select>
              <button className="text-gray-500">B</button>
              <button className="text-gray-500">I</button>
              <button className="text-gray-500">U</button>
              <button className="text-gray-500">•</button>
            </div>*/}
            <textarea
              rows={3}
              className="w-full border rounded-md px-4 py-3 text-lg"
              defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
            ></textarea>
          </div>

          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Upload Resume */}
          <div>
           <label className="block text-lg font-medium mb-1">Upload resume</label>
           <div className="border-dashed border-2 border-purple-200 px-6 py-8 rounded-md text-center">
           <UploadCloud className="mx-auto text-purple-400 mb-2" size={32} />
           <p className="text-sm text-purple-600">
           <label htmlFor="file-upload" className="cursor-pointer underline">Click to upload</label>
           </p>
           <p className="text-3xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
           <input
           id="file-upload"
           type="file"
           accept=".svg,.png,.jpg,.gif"
           className="hidden"
           onChange={(e) => {
           console.log(e.target.files[0]);
           }}/>
          </div>
        </div>


          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Motivational Letter */}
          <div>
            <label className="block text-lg font-medium mb-1">Motivational letter</label>
            <div className="flex items-center justify-between border border-purple-200 bg-purple-50 px-4 py-3 rounded-md">
              <span className="text-purple-700 text-sm">Tech design requirements.pdf</span>
              <span className="text-purple-600 text-sm">200 KB - 100% uploaded</span>
            </div>
          </div>

          <div className="w-full border-t border-gray-200 mb-12 mt-1"></div>

          {/* Buttons */}
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
        </form>
      </main>
    </div>
  );
}
