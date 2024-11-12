import Secciones from "../componentes/navBar/Secciones";
import Carrusel from "../componentes/Secciones/Carrusel";
import Novedades from "../componentes/Secciones/Novedades";
import HomeBotones from "../componentes/BotonesHome/PacientesBotones";
import Footer from "../componentes/Footer/Footer";
import ListadoProf from "../componentes/Secciones/ListadoProfesionales";
import { useContext,useState,useEffect, createContext } from "react";
import { Apiurl,apiLinks } from "../services/apiPortal";
import {links} from "../constantes/constantes";
import { PerfilContext } from "../App";
import BuscarCartilla from "../componentes/ObraSocial/Cartilla/BuscarCartilla";
import { apiBusquedas } from "../services/apiPortal";
import { transformacionLink_URL } from "../Utilities/transformadorArray.utilities";

export const PacientesContext= createContext();


const HomePacientes =({area})=> {
    const {cartillaOpen}= useContext(PerfilContext);
    const {login,permisosPrestadores}= useContext(PerfilContext);
    const [buttons, setButtons]= useState([]);
    // console.log('esto es lo que va a entrar ',links.prestadores,usuarios)
    let ids=transformacionLink_URL(links,area);
    // const usuario=

    const selectores={
        prestadores:true,
        farmacias:false,
        laboratorio:false
    };
    const urlBusquedas={
        prestadores:apiBusquedas.buscarProfesionalClinica,
        especialidades:apiBusquedas.especialidadesClinica,
    };

    useEffect(()=>{
        
        fetch(Apiurl+apiLinks.LINKS_BOTONES+'/'+ids)
        .then(response=>response.json())
        .then(response=>{
            setButtons(response.links)
        })
        .catch(error=>console.log(error))
    },[])
    
    useEffect(()=>{
    },[permisosPrestadores])
    

    return (
        <>
            <PacientesContext.Provider value={{
            }}>
                <div className="normalize font-mont" >
                    <Secciones area={area}/>
                    <Carrusel usuarios={area} area={area}/>
                    <div >
                        <HomeBotones />
                        {cartillaOpen && <BuscarCartilla urlBusquedas={urlBusquedas}  selectores={selectores} />}
                        <Novedades usuarios={area}/>
                    </div>
                    <ListadoProf/>
                    <Footer/>
                    

                </div>
            </PacientesContext.Provider>
        </>
    )

};

export default HomePacientes;