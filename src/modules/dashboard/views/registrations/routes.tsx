import Registrations from "./Registrations";

const registrationsRoutes = [
  {
    path: "/registrations", // 👈 Dynamic route with ID
    element: <Registrations />,
  },
];

export default registrationsRoutes;
