import Secciones from "../componentes/navBar/Secciones";
import OsBotones from "../componentes/BotonesHome/OsBotones";
import OsAdminBotones from "../componentes/BotonesHome/OsAdminBotones";
import Carrusel from "../componentes/Secciones/Carrusel";
import Nosotros from "../componentes/novedades/Nosotros";
import DatosSanatorio from "../componentes/Secciones/DatosSanatorio";
import Footer from "../componentes/Footer/Footer";
import {  createContext,useContext,useEffect } from "react";
import BuscarCartilla from "../componentes/ObraSocial/Cartilla/BuscarCartilla";
import { PerfilContext } from "../App";
import { apiBusquedas } from "../services/apiPortal";
import Novedades from "../componentes/Secciones/Novedades";
import { useUserStore } from "../store/userStore";
import { areas } from "../data/constantes";

export const OsContext= createContext();

const HomeOs =({usuarios})=>{
    const area= areas.OS
    const {cartillaOpen}= useContext(PerfilContext);
    const usuario= useUserStore((state)=>state.user);
    const permisos= usuario.permisos;
    const permisosOsAdmin= permisos.permisosOsAdmin;

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