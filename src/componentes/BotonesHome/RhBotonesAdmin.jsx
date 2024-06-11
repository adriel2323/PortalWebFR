import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ModalSmButtoms from "../Modales/ModalSmButtoms";
import { useState, useContext } from "react";
import ButtomTemplate from "./ButtomTemplate";


const RhBotonesAdmin=()=>{
    const [viewModal,setViewModal]=useState(false);
    const errorMSG= "No tiene autorizaciones para ver este apartado"

    const empleadosList =[
        {
            "id":1,
            "titulo":"Recibo de sueldo",
            "link": "/rrhh/recibosueldo",
            "logged":1
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "/",
            "logged":1
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/archivos",
            "logged":1
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        },
    ]
    const trabajaList =[
        {
            "id":1,
            "titulo":"Carga tu curricullum",
            "link": "/rrhh/cv",
            "logged":0
        },
        {
            "id":5,
            "titulo":"Declaración Jurada",
            "link": "/rrhh/declaracion",
            "logged":0
        },
        {
            "id":2,
            "titulo":"Areas de trabajo",
            "link": "/",
            "logged":0
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/archivos",
            "logged":0
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        },
    ]

    return(
            <div className="grid-buttoms solapar ">
                <Buttom     redir={0} titulo={"Agregar novedad"} icono={faSquarePlus} link= {"/admin/nov"}  />
                <Buttom     redir={0} titulo={"Buscar CV"} icono={faRectangleList} link= {"/rrhh/buscar"}  />
                {/* <Buttom     redir={0} titulo={"Personal"} icono={faUsers} link= {"/"}  /> */}
                {/* <ButtomDrop  titulo={"Empleados"} icono={faPeopleGroup} lista={empleadosList}  /> */}
                <ButtomTemplate icono={faPeopleGroup} titulo={"Personal"} setViewModal={setViewModal} />
                <ButtomDrop  titulo={"Trabaja con nosotros"} icono={faUserPlus} lista={trabajaList}  />
                <Buttom     redir={0} titulo={"capacitaciones"} icono={faUsers} link= {"/"}  />
                {
                    viewModal && 
                        <ModalSmButtoms titulo={"Empleados"} icono={faPeopleGroup} listButtoms={empleadosList} />
                    
                }
            </div>
    )
}

export default RhBotonesAdmin;

 