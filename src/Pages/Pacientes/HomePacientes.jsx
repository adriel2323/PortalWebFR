import Secciones from "../Components/navBar/Secciones";
import Carrusel from "../Components/Carrusel";
import Novedades from "../Components/Novedades";
import HomeBotones from "./Components/PacientesBotones";
import Footer from "../Components/Footer/Footer";
import ListadoProf from "./Components/ListaProfesionales";
import { useContext,useState,useEffect, createContext , useRef} from "react";
import { Apiurl,apiLinks } from "../../services/apiPortal";
import {links} from "../../constantes/constantes";
import { PerfilContext } from "../../App";
import BuscarCartilla from "../OS/Components/Cartilla/BuscarCartilla";
import { apiBusquedas } from "../../services/apiPortal";
import { transformacionLink_URL } from "../../Utilities/transformadorArray.utilities";
import { useAppStore } from "../../store/appStore";

export const PacientesContext= createContext();


const HomePacientes =({area})=> {
    const setArea= useAppStore((state)=>state.setArea);
    const {cartillaOpen}= useContext(PerfilContext);
    const {login,permisosPrestadores}= useContext(PerfilContext);
    const [buttons, setButtons]= useState([]);
    const irACartilla=useRef();

    setArea(area)

    const scrollCallback = () => {
        irACartilla.current?.scrollIntoView({ behavior: 'smooth' })
     }
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
                        <HomeBotones scrollCallback={scrollCallback} refProp={irACartilla} >
                            <div >
                                {cartillaOpen && <BuscarCartilla urlBusquedas={urlBusquedas}  selectores={selectores} />}
                            </div>

                        </HomeBotones>
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