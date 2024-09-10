import Buttom from "./ButtomLinkExterno";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { PerfilContext } from "../../App";
import Modal from "../Modales/FormLog"
import { useUserStore } from "../../store/userStore";

const PrestadoresBotones=({cuil})=>{
    const usuario= useUserStore((state)=>state.user)
    const permisos= usuario.permisos
    const permisosPersonal= permisos.permisosPersonal
    const {login}= useContext(PerfilContext)
    const [viewForm,setViewForm]= useState(false);
    console.log(usuario.userName,'estos son los permisos de rrhh ',permisosPersonal)
    function verForm(){
        if(!login){
            setViewForm((prev)=> !prev)
    }
}
    return(
    <>
        <div onClick={verForm} className="solapar grid-buttoms" >    
            <Buttom redir={1}  titulo={"Recibo de Sueldo"} icono={faMoneyCheck} link= {usuario.archivos} />
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