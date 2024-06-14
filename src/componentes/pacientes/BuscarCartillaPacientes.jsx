
import Icon from "../BotonesHome/IconXs";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext,useState,createContext, useEffect } from "react";
import { PacientesContext } from "../../Pages/HomePacientes";
import Cartilla from "./CartillaPacientes"
import BuscarPrestador from "./BuscarPrestadorPacientes";

export const CartillaPContext= createContext()

const BuscarCartillaPacientes =()=> {
    const {abrirCerrarCartilla}= useContext(PacientesContext);
    const [prestadoresOpen,setPrestadoresOpen]=useState(false)

    const [buscadorOpen,setBuscadorOpen]=useState(true)
    const usuario= "os"

    const abrirPrestador=()=>{
        setBuscadorOpen(false);
        setPrestadoresOpen(true);
        
    };

    const volverABuscador=()=>{
        setBuscadorOpen(true);
        setPrestadoresOpen(false);
        setFarmaciasOpen(false);
    };

    useEffect(()=>{

    },[buscadorOpen])


    return(
        <div className="mx-52 shadow-xl p-16 mb-32">
            <PacientesContext.Provider value={{
                setPrestadoresOpen,  abrirCerrarCartilla,abrirPrestador,volverABuscador
            }}>
                <div onClick={abrirCerrarCartilla}>
                        <Icon  icono={faXmarkCircle}/>
                </div>
                <section className="flex justify-center">
                    {buscadorOpen && <Cartilla/>}
                    {prestadoresOpen && <BuscarPrestador/>}
                </section>
            </PacientesContext.Provider>
        </div>
    )
};
export default BuscarCartillaPacientes;