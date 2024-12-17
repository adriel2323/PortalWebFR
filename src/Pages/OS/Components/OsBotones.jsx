import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ButtomOpen from "./ButtomOpen";
import { useState,useContext } from "react";
import { PerfilContext } from "../../App";
import { botones, dropList } from "../../data/constantes";


const RhBotones=()=>{
    const {abrirCerrarCartilla}= useContext(PerfilContext);
    const empleadosList =dropList.empleadosList


    const botonesData=botones.os

    return(
            <div className=" grid-buttoms ">
                <ButtomDrop  className="" titulo={"Acceso a Oficina Virtual"} icono={faHouseLaptop} lista={empleadosList} link={"http://gsannicolas.ddns.net:5001/Home/IniciarSesion"}  />
                <ButtomOpen onClick={abrirCerrarCartilla} className="" titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                {
                    botonesData.map(boton=>
                        <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
            </div>
    )
}

export default RhBotones;