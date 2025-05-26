import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Space, Table, Tag, Modal, Input } from 'antd';
import { Eye, Check, X, Trash, UploadCloud, Pen, Video } from "lucide-react";
import logo from "../../../auth/assets/logo.png";
import homeIcon from '../../../dashboard/assets/home.png';
import registrationsIcon from '../../../dashboard/assets/registrations.png';
import leavesIcon from '../../../dashboard/assets/leaves.png';
import employeeIcon from '../../../dashboard/assets/employee.png';
import jobsIcon from '../../../dashboard/assets/jobs.png';
import recordingsIcon from '../../../dashboard/assets/recordings.png';
import settingsIcon from '../../../dashboard/assets/settings.png';
import { Color } from "antd/es/color-picker";
const { Search } = Input;


export default function CreateJob() {

    const navigate = useNavigate();


    // Define row selection logic
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [isAcceptModalVisible, setIsAcceptModalVisible] = useState<boolean>(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);
    const [currentRecord, setCurrentRecord] = useState<DataType | null>(null);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
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
            title: 'File name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'File size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Date uploaded',
            dataIndex: 'udate',
            key: 'udate',
        },
        {
            title: 'Last updated',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Uploaded by',
            dataIndex: 'person',
            key: 'person',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button
                        onClick={() => handleActionClick('view', record)}
                        className="p-2 rounded hover:bg-gray-100">
                        <Eye className="w-7 h-7 text-gray-600" />

                    </button>
                    <button
                        onClick={() => handleActionClick('approve', record)}
                        className="p-2 rounded hover:bg-green-100">
                        <Pen className="w-7 h-7 text-green-600" />
                    </button>
                    <button
                        onClick={() => handleActionClick('reject', record)}
                        className="p-2 rounded hover:bg-red-100">
                        <X className="w-7 h-7 text-red-600" />
                    </button>
                </Space>
            ),
        }
    ];

    const data = [
        {
            key: '1',
            name: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'purple' }}>
                    <Video size={16} />
                    <span>Recording.mp4</span>
                </div>
            ),
            size: '200 KB',
            udate: '19/02/2025  22:15',
            date: '19/02/2025  22:15',
            person: 'Billy Strosin',

        },
        {
            key: '2',
            name: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'purple' }}>
                    <Video size={16} />
                    <span>Recording.mp4</span>
                </div>
            ),
            size: '720 KB',
            udate: '01/03/2025  10:30',
            date: '01/03/2025  10:30',
            person: 'Pheonix Backer',
        },
        {
            key: '3',
            name: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'purple' }}>
                    <Video size={16} />
                    <span>Recording.mp4</span>
                </div>
            ),
            size: '16 MB',
            udate: '17/04/2025  8:02',
            date: '17/04/2025  8:02',
            person: 'Joe Wolf',
        },
        {
            key: '4',
            name: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'purple' }}>
                    <Video size={16} />
                    <span>Recording.mp4</span>
                </div>
            ),
            size: '4.2 MB',
            udate: '20/04/2025  12:00',
            date: '20/04/2025  12:00',
            person: 'Amelie Runte',
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
                    <Link to="/home" className="flex items-center gap-2 font-medium text-2xl hover:text-purple-700">
                        <img src={homeIcon} alt="Home" className="w-10 h-10" /> Home
                    </Link>
                    <Link to="/registrations" className="flex items-center gap-2  font-medium text-2xl hover:text-purple-700">
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
                    <Link to="/recordings" className="flex items-center gap-2 font-medium text-purple-700 text-2xl hover:text-purple-700">
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
                            <h2 className="text-4xl font-semibold">Recordings</h2>
                        </div>
                    </div>

                </div>
                <div>

                    <div className="border-dashed border-2 bg-purple-50 border-purple-200 px-6 py-8 rounded-md text-center">
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
                            }} />
                    </div></div>


                <div className="mt-10">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Attached files</h2>
                        <Search
                            placeholder="Search leaves"
                            onSearch={(value) => console.log('Search:', value)}
                            style={{ width: 250 }}
                        />
                    </div>
                    <p className="text-gray-400 text-xl mb-8 ">
                        Files and assets that have been attached to this project.
                    </p>
                </div>


                {/* Table */}
                <Table columns={columns} dataSource={data} rowSelection={rowSelection} />

                {/* Accept Modal */}

                {isAcceptModalVisible && (
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
                            <p className="text-xl text-gray-600 mb-6">Are you sure you want to accept this application?</p>
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
                )}


                {/* Delete Modal */}
                {isDeleteModalVisible && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                            <Trash className="w-10 h-10 justify-center text-red-600 mb-4" />
                            <p className="text-xl text-gray-600 mb-6">Are you sure you want to delete this application?</p>
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
                )}
            </main>
        </div>
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
