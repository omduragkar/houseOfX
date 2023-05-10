import "./App.css";
import {
  RouterProvider,
} from "react-router-dom";
import {  Stack } from "@mui/material";
import {router } from "./Router";
function App() {

  return (
      <>
        <Stack sx={{
        height:'100%',
        width:'100%'
      }}>
        <RouterProvider router={router} />
      </Stack>
      </>
  )
}

export default App
