import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ButtomOpen from "./ButtomOpen";
import { useState,useContext } from "react";
import { PerfilContext } from "../../App";


const OsAdminBotones=()=>{
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
        "os_admin":[
            
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
            {
                "id":3,
                "titulo":"Administrar cartilla",
                "link":"/obrasocial/admin/cartilla",
                "icono":"faGear",
                "redir":0
            },

            {
                "id":4,
                "titulo":"Ver afiliaciones",
                "link":"/obrasocial/admin/afiliaciones",
                "icono":"faUsers",
                "redir":0
            },
        ]
    }

    return(
            <div className=" grid-buttoms  ">
                <ButtomDrop  className="" titulo={"Acceso a Oficina Virtual"} icono={faHouseLaptop} lista={empleadosList}  />
                <ButtomOpen onClick={abrirCerrarCartilla} className="" titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                {
                    botonesData.os_admin.map(boton=>
                        <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
            </div>
    )
}

export default OsAdminBotones;