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
import { useUserStore } from "../store/userStore";


const HomeRH =({})=>{
    const area="rrhh"
    const usuario= useUserStore((state)=>state.user)
    const permisos=usuario.permisos
    const permisosRrhh= permisos.permisosRrhh
    const {login}= useContext(PerfilContext)


    return(
        <>
            <Secciones area={area}/>
            <div>

                <Carrusel usuarios={area}/>
                <div className="solapar">
                    {permisosRrhh && <RhBotonesAdmin />}
                    {!permisosRrhh && <RhBotones />}
                    
                    {login && <PreguntasFrecuentes/>}
                    <Novedades usuarios={area}/>
                    
                    
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default HomeRH;