import Buttom from "./ButtomLinkExterno";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { PerfilContext } from "../../App";
import Modal from "../Modales/FormLog"

const PrestadoresBotones=({cuil})=>{
    const {login,usuario,permisosRrhh}= useContext(PerfilContext)
    const [viewForm,setViewForm]= useState(false);
    console.log(usuario.cuil,'estos son los permisos de rrhh ',permisosRrhh)
    function verForm(){
        if(!login){
            setViewForm((prev)=> !prev)
    }
}
    return(
    <>
        <div onClick={verForm} className="solapar grid-buttoms" >    
            <Buttom redir={1}  titulo={"Recibo de Sueldo"} icono={faMoneyCheck} link= {usuario.linkArchivos} />
        </div>
        {
                    viewForm && (
                        <Modal />
                    )
                }
    </>
    )
}

export default PrestadoresBotones;