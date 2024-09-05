import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ButtomOpen from "./ButtomOpen";
import { useState,useContext } from "react";
import { PerfilContext } from "../../App";
import { botones, dropList } from "../../data/constantes";


const OsAdminBotones=()=>{
    const {abrirCerrarCartilla}= useContext(PerfilContext);
    const empleadosList =dropList.empleadosList
    const botonesData=botones.os_admin

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