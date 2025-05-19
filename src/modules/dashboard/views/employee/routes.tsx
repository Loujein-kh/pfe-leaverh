import Employee from "./employee";

const employeeRoutes = [
  {
    path: "/employee", // 👈 Dynamic route with ID
    element: <Employee />,
  },
];

export default employeeRoutes;
