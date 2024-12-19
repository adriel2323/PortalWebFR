import Buttom from "../../Components/BotonesHome/Buttom";
import { faUserPlus,faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import ModalSmButtoms from "../../Components/Modales/ModalSmButtoms";
import { useState } from "react";
import ButtomTemplate from "../../Components/BotonesHome/ButtomTemplate";
import { botones, dropList } from "../../../data/constantes";
import { useUserStore } from "../../../store/userStore";


const RhBotonesAdmin=()=>{
    const usuario=useUserStore(state=> state.user)
    const [viewModalEmpleados,setViewModalEmpleados]=useState(false);
    const [viewModalTN,setViewModalTN]=useState(false);
    const empleadosList =dropList.empleadosList
    const trabajaList =dropList.trabajaList
    let botonesData;
    const permisosAdministrativos= usuario.permisos.permisosAdministrativos
    const permisosAdminRRHH=usuario.permisos.permisosRrhh
    if(permisosAdminRRHH){
        botonesData= botones.rrhh_sudo.concat(botones.rrhh_administrativos)
    }else if(permisosAdministrativos){
        botonesData=botones.rrhh_administrativos
    }
    

    return(
            <div className="grid-buttoms solapar ">
                {
                    botonesData.map(boton=>
                        <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
                <ButtomTemplate icono={faPeopleGroup} titulo={"Personal"} setViewModal={setViewModalEmpleados} />
                <ButtomTemplate  titulo={"Trabaja con nosotros"} icono={faUserPlus}  lista={trabajaList} setViewModal={setViewModalTN}  />
                {
                    viewModalEmpleados && 
                        <ModalSmButtoms titulo={"Empleados"}  listButtoms={empleadosList} />
                }
                {
                    viewModalTN && 
                        <ModalSmButtoms titulo={"Trabaja con nosotros"}  listButtoms={trabajaList} />
                }
            </div>
    )
}

export default RhBotonesAdmin;

 