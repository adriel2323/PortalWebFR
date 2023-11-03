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

export const OsContext= createContext();

const HomeOs =({usuarios})=>{
    const {cartillaOpen,permisosOsAdmin}= useContext(PerfilContext);
    const usuario= usuarios;

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

    useEffect(()=>{
        console.log(permisosOsAdmin)
    },[permisosOsAdmin])
    return(
        <>
            <OsContext.Provider value={{
                
            }}>
                <div className="normalize font-mont" >
                    <Secciones usuarios={usuario}/>
                    <Carrusel usuarios={usuario}/>
                    <div className=''>
                        {permisosOsAdmin && <OsAdminBotones />}
                        {!permisosOsAdmin && <OsBotones />}
                        {cartillaOpen && <BuscarCartilla urlBusquedas={urlBusquedas} selectores={selectores} />}
                        <Nosotros/>
                        <DatosSanatorio/>
                    </div>
                    <Footer/>
                </div>
            </OsContext.Provider>
        </>
    )

};

export default HomeOs;