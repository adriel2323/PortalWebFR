import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ButtomOpen from "./ButtomOpen";
import { useState,useContext } from "react";
import { PerfilContext } from "../../App";


const RhBotones=()=>{
    const {abrirCerrarCartilla}= useContext(PerfilContext);
    const empleadosList =[
        {
            "id":1,
            "titulo":"Descargas utiles",
            "link": "/"
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "/"
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/"
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/"
        },
    ]
    const trabajaList =[
        {
            "id":1,
            "titulo":"Carga tu curricullum",
            "link": "/"
        },
        {
            "id":2,
            "titulo":"Areas de trabajo",
            "link": "/"
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/"
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/"
        },
    ]

    const botonesData={
        "os":[
            {
                "id":1,
                "titulo":"Afiliaciones online",
                "icono":"faPersonCirclePlus",
                "link":"/obrasocial/afiliaciones",
                "redir":0
            },
            {
                "id":2,
                "titulo":"Asociate",
                "link":"/obrasocial/afiliaciones",
                "icono":"faSquarePlus",
                "redir":0
            },
        ]
    }

    return(
            <div className=" grid-buttoms ">
                <ButtomDrop  className="" titulo={"Acceso a Oficina Virtual"} icono={faHouseLaptop} lista={empleadosList} link={"http://gsannicolas.ddns.net:5001/Home/IniciarSesion"}  />
                <ButtomOpen onClick={abrirCerrarCartilla} className="" titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                {
                    botonesData.os.map(boton=>
                        <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
            </div>
    )
}

export default RhBotones;