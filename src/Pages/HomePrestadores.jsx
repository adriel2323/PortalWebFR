import Secciones from "../componentes/navBar/Secciones";
import PrestadoresBotones from "../componentes/BotonesHome/PrestadoresBotones";
import PrestadoresNoLogBotones from "../componentes/BotonesHome/PrestadoresNoLog";
import Carrusel from "../componentes/Secciones/Carrusel";
import Novedades from "../componentes/Secciones/Novedades";
import Footer from "../componentes/Footer/Footer"
import ContactoInterno from "../componentes/Prestadores/ContactoInterno"
import { PerfilContext } from "../App";
import { useContext,useState,useEffect } from "react";
import { Apiurl,apiLinks } from "../services/apiPortal";
import {links} from "../constantes/constantes";
import { transformacionLink_URL } from "../Utilities/transformadorArray.utilities";


const HomePrestadores =({usuarios})=>{
    const [buttons, setButtons]= useState([]);
    // console.log('esto es lo que va a entrar ',links.prestadores,usuarios)
    let ids=transformacionLink_URL(links,usuarios);

    useEffect(()=>{
        fetch(Apiurl+apiLinks.LINKS_BOTONES+'/'+ids)
        .then(response=>response.json())
        .then(response=>{
            setButtons(response.links)
            console.log('estos son los botones ', buttons[0]);
        })
        .catch(error=>console.log(error))
    },[])
    const {login,usuario,permisosPrestadores}= useContext(PerfilContext)
    useEffect(()=>{
    },[permisosPrestadores])

    return(
        <>
            <div className="normalize font-mont  " >
                <Secciones usuarios={usuarios}/>
                <Carrusel className="" usuarios={usuarios}/>
                <div className=' z-30 '>
                    {/* <PrestadoresBotones /> */}
                    {/* <PrestadoresNoLogBotones /> */}
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
