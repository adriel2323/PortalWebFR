import React from "react";
import Secciones from "../../navBar/Secciones";
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PerfilContext } from "../../../App";
import Carrusel from "../../Secciones/Carrusel";
import PersonalBotones from "../../BotonesHome/PersonalBotones";
import ContactoMail from "../../Secciones/Contacto/ContactoMail";
import Modal from "../../Modales/FormLog"
import { useState } from "react";
import { useUserStore } from "../../../store/userStore";
const ReciboSueldo =()=> {
    const usuarios= "personal"
    const usuario= useUserStore((state)=>state.user)
    const {login}= useContext(PerfilContext)

    return(
        <>
            <Secciones usuarios={usuarios}/>
            <Carrusel usuarios={usuarios} area={usuarios}/>
            <PersonalBotones  cuil={usuario?.userName?usuario.userName:""}/>
            
            <ContactoMail/>
            
            <Footer/>
        </>
    )
};


export default ReciboSueldo;