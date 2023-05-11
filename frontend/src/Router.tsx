import "./App.css";
import {
  createBrowserRouter,
} from "react-router-dom";
import { HomeRouter } from "./components/home/HomeRouter";
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeRouter/>
    ),
  }
]);


