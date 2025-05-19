import JobDetails from "./JobDetails";

const jobDetailsRoutes = [
  {
    path: "/jobdetails", // 👈 Dynamic route with ID
    element: <JobDetails />,
  },
];

export default jobDetailsRoutes;
