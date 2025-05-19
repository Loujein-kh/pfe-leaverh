import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home, FileText, Calendar, User, Clipboard, Camera, UploadCloud,
  Search as LucideSearch
} from "lucide-react";

import logo from "../../../auth/assets/logo.png";
import homeIcon from '../../../dashboard/assets/home.png';
import registrationsIcon from '../../../dashboard/assets/registrations.png';
import leavesIcon from '../../../dashboard/assets/leaves.png';
import employeeIcon from '../../../dashboard/assets/employee.png';
import jobsIcon from '../../../dashboard/assets/jobs.png';
import recordingsIcon from '../../../dashboard/assets/recordings.png';
import settingsIcon from '../../../dashboard/assets/settings.png';

import { Input, Button, Pagination, Empty, Space } from 'antd';
const { Search } = Input;

export default function CreateJob() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState<any[]>([]); // No data yet

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleClear = () => {
    setSearchText("");
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
          <Link to="/registrations" className="flex items-center gap-2 text-purple-700 font-medium text-2xl hover:text-purple-700">
            <img src={registrationsIcon} alt="Registrations" className="w-10 h-10" /> Registrations
          </Link>
          <Link to="/leaves" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={leavesIcon} alt="Leaves" className="w-10 h-10" /> Leaves
          </Link>
          <Link to="/employee" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
            <img src={employeeIcon} alt="Employee" className="w-10 h-10" /> Employee
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold text-2xl hover:text-purple-800">
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
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-semibold">Home</h2>
        </div>

        {/* Latest Leaves Request */}
        <div className="flex items-center justify-between mt-10 mb-8">
          <div>
            <h2 className="text-3xl font-semibold">Latest Leaves Request</h2>
            <p className="text-gray-400 text-xl mt-2">Keep track of vendors and their security ratings.</p>
          </div>
          <div>
            <Search
              placeholder="Search leaves"
              onSearch={(value) => console.log('Search:', value)}
              style={{ width: 250 }}
            />
          </div>
        </div>

        {/* Latest Registrations */}
        <div className="bg-white rounded-[20px] shadow border border-gray-200  py-12 mt-12">
          <div className="flex items-center justify-between mb-6 px-6">
            <h2 className="text-3xl font-semibold">Latest Registrations</h2>
            
          </div>

          {data.length === 0 ? (
            <div className="text-center mt-16">
              <LucideSearch size={48} className="mx-auto text-purple-400 mb-4" />
              <p className="text-2xl font-semibold">No registration found</p>
              <p className="text-gray-500 text-xl mt-4 mb-10">
                Your search did not match any vendors.<br />
                Please try again or create add a new vendor.
              </p>
              <Space>
                <Button onClick={handleClear} className="px-6 py-2 text-xl bg-white border border-gray-300 rounded-md hover:bg-gray-100">
                    Clear search</Button>
                <Button type="primary" className="px-6 py-2 text-xl bg-purple-700 text-white rounded-md hover:bg-purple-800">
                    + Add registration</Button>
              </Space>
            </div>
          ) : (
            // Replace with <Table columns={...} dataSource={data} />
            <p>Table goes here</p>
          )}

          <div className="mt-10 flex justify-center mb-10 mt-20">
          <Pagination defaultCurrent={1} total={100} pageSize={10} />
          </div>

        </div>
      </main>
    </div>
  );
}
