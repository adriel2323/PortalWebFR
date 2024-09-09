import Secciones from "../componentes/navBar/Secciones";
import PrestadoresBotones from "../componentes/BotonesHome/PrestadoresBotones";
import PrestadoresNoLogBotones from "../componentes/BotonesHome/PrestadoresNoLog";
import Carrusel from "../componentes/Secciones/Carrusel";
import Novedades from "../componentes/Secciones/Novedades";
import Footer from "../componentes/Footer/Footer"
import ContactoInterno from "../componentes/Prestadores/ContactoInterno"
import { useState } from "react";
import {links} from "../constantes/constantes";
import { useUserStore } from "../store/userStore";
import { buscarBotones } from "../Utilities/functions";

const HomePrestadores =({usuarios})=>{
    const usuario= useUserStore((state)=>state.user)
    const permisos= useUserStore((state)=>state.permisos)
    const botones= useState(buscarBotones(links["prestadores"]))


    return(
        <>
            <div className="normalize font-mont  " >
                <Secciones usuarios={usuarios}/>
                <Carrusel className="" usuarios={usuarios}/>
                <div className=' z-30 '>
                    {permisos.permisosPrestadores && <PrestadoresBotones data={botones[0]} />}
                    {!permisos.permisosPrestadores && <PrestadoresNoLogBotones />}
                    <ContactoInterno/>
                    <Novedades usuarios={usuarios}/>
                </div>
                <Footer/>

            </div>
        </>
    )

};

export default HomePrestadores;
