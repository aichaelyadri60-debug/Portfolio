import { useContext } from "react";
import NavigateContext from "../ApiContext/NavigationContext";

export default function Navbar() {
  const {changeCurrentPage} = useContext(NavigateContext);
  

  return (<>

<div className="flex flex-cols-1 gap-10">

  <button  onClick={()=>changeCurrentPage("Experience")}>
    Experience
  </button>


    <button onClick={()=>changeCurrentPage("Project")}>
    Project
  </button>


    <button onClick={()=>changeCurrentPage("Home")}>
    Home
  </button>

  
</div>
  </>);
}
