import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// Import all your route arrays
import authRoutes from "../../auth/routes/routes";
import dashboardRoutes from "../../dashboard/routes/routes";
import signupRoutes from "../../auth/views/Signup/routes";
import page1Routes from "../../auth/views/Emailverif/routes";
import createJobRoutes from "../../dashboard/views/createjob/routes";
import applyRoutes from "../../dashboard/views/apply/routes";
import registrationsRoutes from "../../dashboard/views/registrations/routes";
import profileRoutes from "../../dashboard/views/profile/routes";
import settingsRoutes from "../../dashboard/views/settings/routes";
import noregRoutes from "../../dashboard/views/noreg/routes";
import employeeRoutes from "../../dashboard/views/employee/routes";
import latestRegRoutes from "../../dashboard/views/latestreg/routes";
import leaves1Routes from "../../dashboard/views/leaves1/routes"; // ✅ Leaves1 import
import leaves2Routes from "../../dashboard/views/leaves2/routes";
import leaves3Routes from "../../dashboard/views/leaves3/routes";
import leaves4Routes from "../../dashboard/views/leaves4/routes";
// Import the JobDetails component
import JobDetails from "../../dashboard/views/jobdetails/jobdetails";

// Type for route objects
import { IRoute } from "../types";

// Combine all routes into a single array
export const routes: IRoute[] = [
  ...authRoutes,
  ...dashboardRoutes,
  ...signupRoutes,
  ...page1Routes,
  ...createJobRoutes,
  ...applyRoutes,
  ...registrationsRoutes,
  ...profileRoutes,
  ...settingsRoutes,
  ...noregRoutes,
  ...employeeRoutes,
  ...latestRegRoutes,
  ...leaves1Routes,
  ...leaves2Routes,
  ...leaves3Routes,
  ...leaves4Routes, // ✅ Add Leaves1 routes

  {
    path: "/jobdetails",
    element: <JobDetails />,
    guard: Fragment,
    layout: Fragment,
  },
];

// Function to render them
export const renderRoutes = (routes: IRoute[]) => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.element}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  );
};
