import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ModalSmButtoms from "../Modales/ModalSmButtoms";
import { useState, useContext } from "react";
import ButtomTemplate from "./ButtomTemplate";
import { botones, dropList } from "../../data/constantes";


const RhBotonesAdmin=()=>{
    const [viewModalEmpleados,setViewModalEmpleados]=useState(false);
    const [viewModalTN,setViewModalTN]=useState(false);
    const empleadosList =dropList.empleadosList
    const trabajaList =dropList.trabajaList
    const botonesData=botones.rrhh_admin

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

 