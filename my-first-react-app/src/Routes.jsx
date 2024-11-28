import App from "./App";
import Router from "./Router";
import Error from "./Error";
import Bio from "./Bio";


const routes = [
    {
      path: "/",
      element: <App/>,
      errorElement: <Error/>,
    },
    {
      path: "router/:name",
      element: <Router/>,
    },
    {
        path: "#",
        element:<Bio/>,
    }
  ];
  export default routes;