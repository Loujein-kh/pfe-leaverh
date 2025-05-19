import CreateJob from "./createjob";

const createJobRoutes = [
  {
    path: "/jobs/createjob", // ✅ Your custom route path
    element: <CreateJob />, // This renders the CreateJob component
  },
];

export default createJobRoutes;
