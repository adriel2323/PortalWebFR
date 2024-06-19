
import Icon from "../../BotonesHome/IconXs";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext,useState,createContext, useEffect } from "react";
import { PerfilContext } from "../../../App";
import Cartilla from "./Cartilla";
import BuscarPrestador from "./BuscarPrestador";
import BuscarFarmacia from "./BuscarFarmacia";

export const CartillaContext= createContext()

const BuscarCartilla =({selectores, urlBusquedas})=> {
    const {abrirCerrarCartilla, cartilla}= useContext(PerfilContext);
    const [prestadoresOpen,setPrestadoresOpen]=useState(false)
    const [farmaciasOpen,setFarmaciasOpen]=useState(false)
    const [laboratoriosOpen,setLaboratoriosOpen]=useState(false)
    const [buscadorOpen,setBuscadorOpen]=useState(true)


    const abrirPrestador=()=>{
        setBuscadorOpen(false);
        setPrestadoresOpen(true);
        
    };

    const abrirFarmacia=()=>{
        setBuscadorOpen(false);
        setFarmaciasOpen(true)
    };
    const abrirLaboratorio=()=>{
        setBuscadorOpen(false);
        setLaboratoriosOpen(true)
    };
    const volverABuscador=()=>{
        setBuscadorOpen(true);
        setPrestadoresOpen(false);
        setFarmaciasOpen(false);
    };
    useEffect(()=>{

    },[buscadorOpen])
    return(
        <div className="mx-10 md:mx-52 shadow-xl p-5 sm:p-16 mb-20 md:mb-32">
            <CartillaContext.Provider value={{ setLaboratoriosOpen,laboratoriosOpen,abrirLaboratorio,
                setPrestadoresOpen, setFarmaciasOpen, abrirCerrarCartilla,abrirPrestador,abrirFarmacia,volverABuscador
            }}>
                <div className=" h-4" onClick={abrirCerrarCartilla}>
                        <Icon icono={faXmarkCircle}/>
                    </div>
                <section className="flex justify-center">
                    {buscadorOpen && <Cartilla selectores={selectores}/>}
                    {prestadoresOpen && <BuscarPrestador urlBusqueda={urlBusquedas}/>}
                    {farmaciasOpen && <BuscarFarmacia urlBusqueda={urlBusquedas}/>}
                    {laboratoriosOpen && <BuscarLaboratorio urlBusqueda={urlBusquedas}/>}
                </section>
            </CartillaContext.Provider>
        </div>
    )
};
export default BuscarCartilla;