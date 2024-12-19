import Carrusel from "../Components/Carrusel";
import Secciones from "../Components/navBar/Secciones";
import Footer from "../Components/Footer/Footer";

import RhBotones from "./Components/RhBotones";
import RhBotonesAdmin from "./Components/RhBotonesAdmin";
import Novedades from "../Components/Novedades";
import {  useContext } from "react";
// import Modal from "../componentes/Modales/FormLog" 
import { PerfilContext } from "../../App";

import PreguntasFrecuentes from "./Components/PreguntasFrecuentes"
import { useUserStore } from "../../store/userStore";


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

                <Carrusel usuarios={area} area={area}/>
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