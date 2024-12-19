import React from "react";
import Secciones from "../../../Components/navBar/Secciones";
import Footer from "../../../Components/Footer/Footer";
// import Icon from "../../../../Components/BotonesHome/Icon";
// import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { PerfilContext } from "../../../../App";
import Carrusel from "../../../Components/Carrusel";
import PersonalBotones from "../../Components/PersonalBotones";
// import ContactoMail from "../../Components/Secciones/Contacto/ContactoMail";
// import Modal from "../../../../Components/Modales/FormLog"
// import { useState } from "react";
import { useUserStore } from "../../../../store/userStore";
const ReciboSueldo =()=> {
    const usuarios= "personal"
    const usuario= useUserStore((state)=>state.user)
    const {login}= useContext(PerfilContext)

    return(
        <>
            <Secciones usuarios={usuarios}/>
            <Carrusel usuarios={usuarios} area={usuarios}/>
            <PersonalBotones  cuil={usuario?.userName?usuario.userName:""}/>
            
            {/* <ContactoMail/> */}
            
            <Footer/>
        </>
    )
};


export default ReciboSueldo;