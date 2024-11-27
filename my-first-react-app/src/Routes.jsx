import App from "./App";
import Router from "./Router";
import Error from "./Error";


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
  ];
  export default routes;