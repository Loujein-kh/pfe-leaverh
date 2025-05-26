import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Space, Table, Tag, Modal, Select } from 'antd';
import { Eye, Check, X, Trash, UploadCloud } from "lucide-react";
import logo from "../../../auth/assets/logo.png";
import homeIcon from '../../../dashboard/assets/home.png';
import registrationsIcon from '../../../dashboard/assets/registrations.png';
import leavesIcon from '../../../dashboard/assets/leaves.png';
import employeeIcon from '../../../dashboard/assets/employee.png';
import jobsIcon from '../../../dashboard/assets/jobs.png';
import recordingsIcon from '../../../dashboard/assets/recordings.png';
import settingsIcon from '../../../dashboard/assets/settings.png';
import { FaUmbrellaBeach, FaCoffee, FaUser, FaHeartbeat, FaBalanceScale } from "react-icons/fa";
import { Input, Button, Pagination, Empty } from 'antd';
const { Search } = Input;


export default function CreateJob() {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  const [selectedImage, setSelectedImage] = useState("https://i.pravatar.cc/100");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const stats = [
    { title: "Vacation", value: 10, icon: <FaUmbrellaBeach className="text-blue-500 text-3xl" /> },
    { title: "Casual", value: 5, icon: <FaCoffee className="text-yellow-500 text-3xl" /> },
    { title: "Personal", value: 10, icon: <FaUser className="text-purple-500 text-3xl" /> },
    { title: "Sick", value: 5, icon: <FaHeartbeat className="text-red-500 text-3xl" /> },
    { title: "Balance", value: 34, icon: <FaBalanceScale className="text-red-500 text-3xl" /> },
  ];

  // Define row selection logic
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [isAcceptModalVisible, setIsAcceptModalVisible] = useState<boolean>(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);
  const [currentRecord, setCurrentRecord] = useState<DataType | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    seats: "",
    department: "",
    deadline: "",
    image: null,
  });


  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };





  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changeableRowKeys: React.Key[]) => {
          let newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 === 0);
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changeableRowKeys: React.Key[]) => {
          let newSelectedRowKeys = changeableRowKeys.filter((_, index) => index % 2 !== 0);
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  const columns = [
    {
      title: 'Submission Date',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },


    {
      title: 'From - to',
      dataIndex: 'date',
      key: 'date',
    },


    {
      title: 'Type',
      key: 'type',
      dataIndex: 'type',
      render: (_, { type }) => (
        <>
          {type.map((item) => {
            let color = item === 'Vacation' ? 'orange' : 'green';
            return (
              <Tag color={color} key={item}>
                {item.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },

    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {status.map((item) => {
            let color = item.length > 5 ? 'geekblue' : 'green';
            if (item === 'Pending') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={item}>
                {item.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },


  ];

  const data = [
    {
      key: '1',
      name: '15/01/2025 16:55',
      date: '10/02/2025 to 20/02/2025',
      type: ['Vacation'],
      status: ['Pending'],

    },
    {
      key: '2',
      name: '05/03/2025 14:05',
      date: '24/03/2025 to 27/03/2025',
      type: ['Vacation'],

      status: ['Pending'],
    },
    {
      key: '3',
      name: '15/03/2025 09:15',
      date: '17/04/2025 to 20/04/2025',
      type: ['Vacation'],

      status: ['Pending'],
    },
    {
      key: '4',
      name: '02/02/2025 20:30',
      date: '10/05/2025 to 15/05/2025',
      type: ['Vacation'],
      status: ['Pending'],
    },
  ];

  const handleActionClick = (type: 'view' | 'approve' | 'reject', record: DataType) => {
    setCurrentRecord(record);
    if (type === 'approve') {
      setIsAcceptModalVisible(true);
    } else if (type === 'reject') {
      setIsDeleteModalVisible(true);
    }
  };

  const handleAcceptModalClose = () => {
    setIsAcceptModalVisible(false);
    setCurrentRecord(null);
  };

  const handleAcceptJob = () => {
    // Handle accept job logic here
    console.log("Job accepted:", currentRecord);
    handleAcceptModalClose();
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalVisible(false);
    setCurrentRecord(null);
  };

  const handleConfirmDelete = () => {
    // Handle delete logic here
    console.log("Job deleted:", currentRecord);
    handleDeleteModalClose();
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[15%] bg-gray-100 border-r border-gray-300 p-5">
        <div className="flex items-center gap-3 mb-8">
          <img src={logo} alt="Logo" className="w-25 h-10" />
        </div>
        <nav className="space-y-8 text-gray-700">
          <Link to="/home" className="flex items-center gap-2 text-purple-700 font-medium text-2xl hover:text-purple-700">
            <img src={homeIcon} alt="Home" className="w-10 h-10" /> Home
          </Link>
          <Link to="/registrations" className="flex items-center gap-2  font-medium text-2xl hover:text-purple-700">
            <img src={registrationsIcon} alt="Registrations" className="w-10 h-10" /> Registrations
          </Link>
          <Link to="/leaves2" className="flex items-center gap-2  font-medium text-2xl hover:text-purple-700">
            <img src={leavesIcon} alt="Leaves" className="w-10 h-10" /> Leaves
          </Link>
          <Link to="/employee" className="flex items-center gap-2  font-medium text-2xl hover:text-purple-700">
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

        {/* Job Title + Action Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-4xl font-semibold mb-8">Home</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                {stats
                  .filter((item) => item.title !== "Balance")
                  .map((item, index) => (
                    <div key={index} className="bg-white shadow-md rounded-xl px-10 py-8 border border-gray-200 flex flex-col items-start">
                      {item.icon}
                      <h2 className="text-xl font-semibold text-gray-500 mt-4 mb-3">{item.title}</h2>
                      <p className="text-3xl font-bold">{item.value}</p>
                    </div>
                  ))}
              </div>

            </div>

          </div>





        </div>

        {/* Job Overview */}
        <div>
          <h2 className="text-3xl font-semibold mt-10 mb-10">Latest Leaves</h2>

        </div>

        {/* Table */}
        <Table columns={columns} dataSource={data} rowSelection={rowSelection} />

        {/* Accept Modal */}

        {
          isAcceptModalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">

              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-4">
                  <svg
                    className="w-20 h-20 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl text-gray-600 mb-6">Are you sure you want to accept this leave?</p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={handleAcceptModalClose}
                    className="px-4 py-2 text-xl bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAcceptJob}
                    className="px-4 py-2 bg-green-600 text-xl text-white rounded hover:bg-green-700"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          )
        }


        {/* Delete Modal */}
        {
          isDeleteModalVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <Trash className="w-10 h-10 justify-center text-red-600 mb-4" />
                <p className="text-xl text-gray-600 mb-6">Are you sure you want to delete this leave?</p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={handleDeleteModalClose}
                    className="px-4 py-2 text-xl bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="px-4 py-2 bg-red-600 text-xl text-white rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </main >

      <aside className="w-[15%] bg-gray-100 border-r border-gray-300 p-5">
        <div className="flex items-center gap-6 mt-8 mb-8">

          <div className="flex-1 flex items-center mt-20 ml-12 mr-10">
            <label htmlFor="photo-upload" className="relative cursor-pointer">
              <img
                src={selectedImage}
                alt="avatar"
                className="w-60 h-60 rounded-full object-cover border border-gray-300"
              />
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>



          </div>

        </div>
        <div className="flex-1 flex items-center mt-10 ml-12 mr-10">
          <p className="text-3xl font-bold">Ahlem Mohamed</p></div>
        <div className="flex justify-end gap-4 pt-6 mr-7">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="px-7 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Settings
          </button>
          <button
            type="submit"
            onClick={() => navigate('/registrations/profile')}
            className="px-6 py-2 text-xl bg-purple-700 text-white rounded-md hover:bg-purple-800"
          >
            View profile
          </button>
        </div>
        <div className="mt-8">
          {stats
            .filter((item) => item.title === "Balance")
            .map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6 border border-gray-200 flex flex-col items-start">
                {item.icon}
                <h2 className="text-xl font-semibold text-gray-500 mt-4 mb-3">{item.title}</h2>
                <p className="text-3xl font-bold">{item.value}</p>
              </div>
            ))}
        </div>
        <div className="mt-8 pl-8">
          <button
            type="submit"
            onClick={showModal}
            className="px-20  py-3 items-center text-xl bg-purple-700 text-white rounded-md hover:bg-purple-800"
          >
            Apply for leave
          </button></div>
        <Modal
          title="Apply For Leave"
          open={isModalVisible}
          onCancel={handleCancel}
          footer={null}
          style={{ width: '200px' }} 
        >
          <form >
            <label className="block mb-2">Leave Date</label>
            <input type="date" className="border rounded p-2 w-full mb-4" />

            <label className="block mb-2">Type</label>
            <select className="border rounded p-2 w-full mb-4">
              <option>Select...</option>
              <option>Vacation</option>
              <option>Casual</option>
              <option>Personal</option>
              <option>Sick</option>
            </select>
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Type..."
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />




            <div className="mt-4 flex justify-end gap-4">
              <button type="button" onClick={handleCancel} className="px-6 py-2 text-xl bg-white text-gray-600 rounded-md hover:bg-gray-200 border border-gray-300">
                Cancel
              </button>
              <button type="submit" className="px-6 py-2 text-xl bg-purple-700 text-white rounded-md hover:bg-purple-800">
                Apply For Leave
              </button>
            </div>
          </form>
        </Modal>


      </aside>


    </div >
  );
}

// Table Data Type
interface DataType {
  key: string;
  name: string;
  email: string;
  number: string;
  date: string;
  tags: string[];
}
