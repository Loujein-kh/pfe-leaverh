import React from "react";
import { renderRoutes, routes } from "../modules/shared/routes/routes";
import supabase from "../../supabaseClient"
const App = () => {
  console.log(supabase)
  return renderRoutes(routes);
};

export default App;
