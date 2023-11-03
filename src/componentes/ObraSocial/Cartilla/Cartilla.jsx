import React from "react";
import { useContext } from "react";

import { CartillaContext } from "./BuscarCartilla";
 
const Cartilla =({selectores})=> {
    const prestadores= selectores?.prestadores?selectores.prestadores:false;
    const farmacias= selectores?.farmacias?selectores.farmacias:false;
    const laboratorios= selectores?.laboratorios?selectores.laboratorios:false;

    const {abrirPrestador,abrirFarmacia}= useContext(CartillaContext);
    const usuario= "os"
    return(
        <>
            <section className="flex flex-col justify-center text-center w-full">
                <h1 className=" font-semibold text-2xl mb-5">Cartilla médica:</h1>
                <ul>
                    {
                        prestadores && (<li className="buttom-yellow">
                        <h1 onClick={abrirPrestador}>Prestadores</h1>
                    </li>)
                    }
                    {
                        farmacias && (<li className=" buttom-yellow">
                        <h1  onClick={abrirFarmacia}>Farmacias</h1>
                    </li>)
                    }
                </ul> 
            </section>
        </>
    )
};

export default Cartilla;