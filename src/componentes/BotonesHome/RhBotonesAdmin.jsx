import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ModalSmButtoms from "../Modales/ModalSmButtoms";
import { useState, useContext } from "react";
import ButtomTemplate from "./ButtomTemplate";


const RhBotonesAdmin=()=>{
    const [viewModalEmpleados,setViewModalEmpleados]=useState(false);
    const [viewModalTN,setViewModalTN]=useState(false);
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

    const botonesData={
        "rrhh_admin":[
            
            {
                "id":1,
                "titulo":"Agregar novedad",
                "icono":"faSquarePlus",
                "link":"/admin/nov",
                "redir":0
            },
            {
                "id":2,
                "titulo":"Buscar CV",
                "link":"/rrhh/buscar",
                "icono":"faRectangleList",
                "redir":0
            },
            {
                "id":3,
                "titulo":"Capacitacioness",
                "link":"https://archivos.fnsr.com.ar",
                "icono":"faUsers",
                "redir":1
            },

            {
                "id":4,
                "titulo":"Editar Usuarios",
                "link":"/rrhh/admin/editarusuarios",
                "icono":"faUserPen",
                "redir":0
            },
        ]
    }

    return(
            <div className="grid-buttoms solapar ">
                {
                    botonesData.rrhh_admin.map(boton=>
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

 