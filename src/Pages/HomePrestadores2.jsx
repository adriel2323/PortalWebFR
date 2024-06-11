import Secciones from "../componentes/navBar/Secciones";
import PrestadoresBotones from "../componentes/BotonesHome/PrestadoresBotones";
import PrestadoresNoLogBotones from "../componentes/BotonesHome/PrestadoresNoLog";
import Carrusel from "../componentes/Secciones/Carrusel";
import Novedades from "../componentes/Secciones/Novedades";
import Footer from "../componentes/Footer/Footer"
import ContactoInterno from "../componentes/Prestadores/ContactoInterno"
import { PerfilContext } from "../App";
import { useContext,useState } from "react";




const HomePrestadores =({usuarios})=>{
    
    const {login,usuario,permisosPrestadores}= useContext(PerfilContext)
    useEffect(()=>{

    },[permisosPrestadores])
    
    return(
        <>
<h1>Algo pasa</h1>
            <div className="normalize font-mont  " >
                <Secciones usuarios={usuarios}/>
                <Carrusel className="" usuarios={usuarios}/>
                <div className=' z-30 '>
                    {permisosPrestadores && <PrestadoresBotones />}
                    {!permisosPrestadores && <PrestadoresNoLogBotones />}
                    <ContactoInterno/>
                    <Novedades usuarios={usuarios}/>
                </div>
                <Footer/>

            </div>
        </>
    )

};

export default HomePrestadores;
