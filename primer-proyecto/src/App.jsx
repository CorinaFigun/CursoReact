
import "./App.css";
import {Button} from "@mui/material";
import ButtonPrueba from "./ButtonPrueba";
import {ResponsiveAppBar} from "@mui/material";

function App() {

  return (
    <>
    <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Hello</Button>  
<ButtonPrueba variant ="red"></ButtonPrueba>
<ResponsiveAppBar>
  <ul>
    <li>   </li>
  </ul>
</ResponsiveAppBar>
</>)
}

export default App
