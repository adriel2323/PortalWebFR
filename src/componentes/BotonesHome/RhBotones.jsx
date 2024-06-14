import { useState } from "react";
import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomTemplate from "./ButtomTemplate";
import ModalSmButtoms from "../Modales/ModalSmButtoms";
import data from "../../data/data.json";

const RhBotones=()=>{
    const [viewModalEmpleados,setViewModalEmpleados]=useState(false);
    const [viewModalTN,setViewModalTN]=useState(false);
    const errorMSG= "No tiene autorizaciones para ver este apartado"
    const empleadosList= data.empleadosList
    const trabajaList= data.trabajaList
    return(
            <div className="grid-buttoms">
                <ButtomTemplate icono={faPeopleGroup} titulo={"Personal"} setViewModal={setViewModalEmpleados} />
                <ButtomTemplate  titulo={"Trabaja con nosotros"} icono={faUserPlus}  lista={trabajaList} setViewModal={setViewModalTN}  />
                <Buttom     redir={0} titulo={"capacitaciones"} icono={faUsers} link= {"https://archivos.fnsr.com.ar/index.php/apps/files/?dir=/Instructivos"}  />
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

export default RhBotones;
