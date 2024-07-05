import { useContext } from "react";
import FormLog from "./FormLog";
import FormLogOut from "./FormLogOut";
import { PerfilContext } from "../../App";

const Log=({viewForm, setViewForm})=>{
    const {login}=useContext(PerfilContext);

    if(login){
        return(
            <FormLogOut viewForm={viewForm} setViewForm={setViewForm}/>
        )
    } else {
        return (
            <FormLog viewForm={viewForm} setViewForm={setViewForm}/>
        )
    }
}

export default Log;