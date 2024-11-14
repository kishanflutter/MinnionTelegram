import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/partials/Layout";
import Home from "./pages/Home";
import Boost from "./pages/Boost";
import Leaderboard from "./pages/Leaderboard";
//import Earn from "./pages/Earn";
import Friends from "./pages/Friends";
//import XeerWallet from "./pages/XeerWallet";
import BoosterPlanList from "./pages/BoosterPlanList";
import ReportScreen from "./pages/Report";
import TONWALLET from "./pages/TON_EXPIRMENT";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":referralId",
        element: <Home />,
      },
      {
        path: "boost",
        element: <Boost />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
      {
        path: "earn",
        element: <ReportScreen />,
      },
      {
        path: "missions",
        element: <BoosterPlanList />,
      },
      {
        path: "xeerwallet",
        element: <TONWALLET />,
      },
     
    ],
  },
]);

export default router;
