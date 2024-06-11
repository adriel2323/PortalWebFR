import Carrusel from "../componentes/Secciones/Carrusel"
import Secciones from "../componentes/navBar/Secciones"

import RhBotones from "../componentes/BotonesHome/RhBotones";
import RhBotonesAdmin from "../componentes/BotonesHome/RhBotonesAdmin";
import Novedades from "../componentes/Secciones/Novedades";
import Footer from "../componentes/Footer/Footer";
import { useState, useContext } from "react";
import Modal from "../componentes/Modales/FormLog" 
import { PerfilContext } from "../App";

import PreguntasFrecuentes from "../componentes/Secciones/PreguntasFrecuentes"


const HomeRH =({usuarios})=>{
    const {login,usuario,permisosRrhh}= useContext(PerfilContext)


    return(
        <>
            <Secciones usuarios={usuarios}/>
            <div>

                <Carrusel usuarios={usuarios}/>
                <div className="solapar">
                    {permisosRrhh && <RhBotonesAdmin />}
                    {!permisosRrhh && <RhBotones />}
                    
                    {login && <PreguntasFrecuentes/>}
                    <Novedades usuarios={usuarios}/>
                    
                    
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default HomeRH;