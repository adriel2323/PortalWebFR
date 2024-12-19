import Secciones from "../Components/navBar/Secciones";
import OsBotones from "./Components/OsBotones";
import OsAdminBotones from "./Components/OsAdminBotones";
import Carrusel from "../Components/Carrusel";
import Nosotros from "../Home/Components/Nosotros";
import DatosSanatorio from "./Components/DatosSanatorio";
import Footer from "../Components/Footer/Footer";
import {  createContext,useContext } from "react";
import BuscarCartilla from "./Components/Cartilla/BuscarCartilla";
import { PerfilContext } from "../../App";
import { apiBusquedas } from "../../services/apiPortal";
import Novedades from "../Components/Novedades";
import { useUserStore } from "../../store/userStore";
import { useAppStore } from "../../store/appStore";
import { areas } from "../../data/constantes";

export const OsContext= createContext();

const HomeOs =({usuarios})=>{
    const area= areas.OS
    const setArea= useAppStore((state)=>state.setArea);
    const {cartillaOpen}= useContext(PerfilContext);
    const usuario= useUserStore((state)=>state.user);
    const permisos= usuario.permisos;
    const permisosOsAdmin= permisos.permisosOsAdmin;

    setArea(area)

    const selectores={
        prestadores:true,
        farmacias:true,
        laboratorio:false
    };
    const urlBusquedas={
        prestadores:apiBusquedas.buscarProfesionalOs,
        especialidades:apiBusquedas.especialidadesOs,
        localidades:apiBusquedas.farmaciasLocalidadesOs,
        farmacias:apiBusquedas.buscarFarmaciaOs,
    }

    return(
        <>
            <OsContext.Provider value={{
                
            }}>
                <div className="normalize font-mont" >
                    <Secciones area={area} />
                    <Carrusel usuarios={usuario} area={area}/>
                    <div className=''>
                        {permisosOsAdmin && <OsAdminBotones />}
                        {!permisosOsAdmin && <OsBotones />}
                        {cartillaOpen && <BuscarCartilla urlBusquedas={urlBusquedas} selectores={selectores} />}
                        <Nosotros/>
                        <Novedades/>
                        <DatosSanatorio/>
                    </div>
                    <Footer/>
                </div>
            </OsContext.Provider>
        </>
    )

};

export default HomeOs;