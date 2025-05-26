import React from "react";
import { renderRoutes, routes } from "../modules/shared/routes/routes";
import supabase from "../supabase"
const App = () => {
  console.log(supabase)
  return renderRoutes(routes);
};

export default App;
