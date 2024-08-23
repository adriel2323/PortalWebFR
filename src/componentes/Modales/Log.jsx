import { useContext } from "react";
import FormLog from "./FormLog";
import FormLogOut from "./FormLogOut";
import { PerfilContext } from "../../App";

const Log=({viewForm, setViewForm})=>{
    const {login}=useContext(PerfilContext);

    return(
        <>
            {
                login && <FormLogOut viewForm={viewForm} setViewForm={setViewForm}/>
            }
            {
                !login && <FormLog viewForm={viewForm} setViewForm={setViewForm}/>
            }
        </>

    )

}

export default Log;