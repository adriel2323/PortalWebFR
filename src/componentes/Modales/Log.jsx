import { useContext } from "react";
import FormLog from "./FormLog";
import FormLogOut from "./FormLogOut";
import { PerfilContext } from "../../App";

const Log=({viewForm})=>{
    const {login}=useContext(PerfilContext);

    if(login){
        return(
            <FormLogOut viewForm={viewForm}/>
        )
    } else {
        return (
            <FormLog viewForm={viewForm}/>
        )
    }
}

export default Log;