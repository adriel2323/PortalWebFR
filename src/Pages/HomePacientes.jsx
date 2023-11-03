import Secciones from "../componentes/navBar/Secciones";
import Carrusel from "../componentes/Secciones/Carrusel";
import Novedades from "../componentes/Secciones/Novedades";
import HomeBotones from "../componentes/BotonesHome/PacientesBotones";
import Footer from "../componentes/Footer/Footer";
import ListadoProf from "../componentes/Secciones/ListadoProfesionales";
import { createContext,useContext } from "react";
import { PerfilContext } from "../App";
import BuscarCartilla from "../componentes/ObraSocial/Cartilla/BuscarCartilla";
import { apiBusquedas } from "../services/apiPortal";

export const PacientesContext= createContext();


const HomePacientes =({usuarios})=> {
    const {cartillaOpen}= useContext(PerfilContext);
    const usuario= usuarios;

    

    const selectores={
        prestadores:true,
        farmacias:false,
        laboratorio:false
    };
    const urlBusquedas={
        prestadores:apiBusquedas.buscarProfesionalClinica,
        especialidades:apiBusquedas.especialidadesClinica,
    }
    

    return (
        <>
            <PacientesContext.Provider value={{
            }}>
                <div className="normalize font-mont" >
                    <Secciones usuarios={usuario}/>
                    <Carrusel usuarios={usuario}/>
                    <div >
                        <HomeBotones />
                        {cartillaOpen && <BuscarCartilla urlBusquedas={urlBusquedas}  selectores={selectores} />}
                        <Novedades usuarios={usuario}/>
                        <ListadoProf/>
                    </div>
                    <Footer/>
                    

                </div>
            </PacientesContext.Provider>
        </>
    )

};

export default HomePacientes;