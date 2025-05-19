import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import logo from "../../../auth/assets/logo.png";
import homeIcon from "../../../dashboard/assets/home.png";
import registrationsIcon from "../../../dashboard/assets/registrations.png";
import leavesIcon from "../../../dashboard/assets/leaves.png";
import employeeIcon from "../../../dashboard/assets/employee.png";
import jobsIcon from "../../../dashboard/assets/jobs.png";
import recordingsIcon from "../../../dashboard/assets/recordings.png";
import settingsIcon from "../../../dashboard/assets/settings.png";

interface Job {
  id: number;
  title: string;
  description: string;
  deadline: string;
  status: string;
}

let jobId = 0;

export default function Dashboard() {
  const [role, setRole] = useState<"user" | "admin">("user");
  const [jobs, setJobs] = useState<Job[]>(
    Array.from({ length: 9 }, () => ({
      id: jobId++,
      title: "UI/UX design",
      description: "A short summary of the job (truncated if too long).",
      deadline: "2023-11-30",
      status: "Open",
    }))
  );

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const confirmDeleteJob = () => {
    if (jobToDelete !== null) {
      setJobs(jobs.filter((job) => job.id !== jobToDelete));
      setShowDeleteModal(false);
      setJobToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setJobToDelete(null);
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
      <main className="flex-1 bg-white p-6 sm:p-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">Jobs</h1>
            <h2 className="text-2xl sm:text-4xl text-black mt-2 font-bold">Jobs Title</h2>
            <p className="text-base sm:text-lg text-gray-500 mt-1 max-w-xl">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
          </div>
          {role === "admin" && (
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-purple-700 transition"
              onClick={() => navigate("/jobs/createjob")}
            >
              + Add Job
            </button>
          )}
        </div>

        {/* Responsive Jobs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-3">
                {/* Purple square icon */}
                <div className="bg-purple-600 w-10 h-10 rounded-md"></div>
                <div className="flex gap-3">
                  {role === "admin" ? (
                    <>
                      <Pencil
                        size={18}
                        className="text-purple-600 cursor-pointer hover:scale-110 transition"
                        onClick={() => navigate("/jobs/createjob", { state: { job } })}
                        title="Edit Job"
                      />
                      <Trash2
                        size={18}
                        className="text-red-600 cursor-pointer hover:scale-110 transition"
                        onClick={() => {
                          setJobToDelete(job.id);
                          setShowDeleteModal(true);
                        }}
                        title="Delete Job"
                      />
                    </>
                  ) : (
                    <button
                      onClick={() => navigate("/apply")}
                      className="bg-purple-600 text-white px-4 py-2 text-sm rounded-md font-medium hover:bg-purple-700 transition"
                    >
                      Apply
                    </button>
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{job.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Deadline:</span> {job.deadline}
              </p>
              <span className={`inline-block mt-2 text-sm font-medium ${job.status === "Open" ? "text-green-600" : "text-red-600"}`}>{job.status}</span>
              <div className="mt-3">
                <Link to="/jobdetails" className="text-sm text-purple-600 hover:underline">See More</Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this job?</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteJob}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
