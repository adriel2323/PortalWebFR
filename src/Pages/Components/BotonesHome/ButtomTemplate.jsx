import { faUserPen, faPeopleGroup,faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { PerfilContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import Icon from "../BotonesHome/Icon";

const ButtomTemplate=({reqLogin,link,icono,titulo, redir, setViewModal})=>{
    // const {login,usuario,permisosRrhh}= useContext(PerfilContext)
    // const [viewForm,setViewForm]= useState(false);
    

    return(
    <>
        <div className="flex justify-center w-full"  >
        <div className="buttom-A">
            <buttom onClick={()=> setViewModal((prev)=> !prev)}  id="boton_ir" className=" buttom-B"  rel="noopener noreferrer" target="_blank">
                <div className="grid place-items-stretch content-end h-1/3">
                    <Icon  icono={icono} />
                </div>
                <div className=" text-center flex justify-center h-1/3">
                    <h3 className="buttom-T" >{titulo}</h3>
                </div>
            </buttom>
        </div>
    </div>
    </>
    )
}

export default ButtomTemplate;