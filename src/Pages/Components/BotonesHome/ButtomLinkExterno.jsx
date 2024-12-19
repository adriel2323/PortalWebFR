import { useState, useContext } from "react";
import { PerfilContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import Icon from "./Icon";
import { useUserStore } from "../../../store/userStore";

const ButtomLinkExterno=({link,icono,titulo, redir})=>{
    const usuario= useUserStore((state)=>state.user);
    const permisos = usuario.permisos;
    const permisosRrhh = permisos.permisosPersonal;
    const {login}= useContext(PerfilContext)
    const [viewForm,setViewForm]= useState(false);
    const navigate = useNavigate();

    function checkLog(){
        if(!login){
            setViewForm((prev)=> !prev)
    } else if(login){
        switch (redir) {
            case 0:
                navigate(link)
                break;
            case 1:
                window.open(link)
                break;
            default:
                break;
        }
    }}
    return(
    <>
        <div className="flex justify-center w-full"  >
        <div className="buttom-A">
            <buttom onClick={checkLog} id="boton_ir" className=" buttom-B"  rel="noopener noreferrer" target="_blank">
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

export default ButtomLinkExterno;