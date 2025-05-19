import Profile from "./profile";

const profileRoutes = [
  {
    path: "/registrations/profile", // 👈 Dynamic route with ID
    element: <Profile />,
  },
];

export default profileRoutes;
