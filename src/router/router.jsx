import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        }
    ]
  },
]);

export default router;