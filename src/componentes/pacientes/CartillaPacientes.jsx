import React from "react";
import { useContext,useState } from "react";
import { PacientesContext } from "../../Pages/HomePacientes";
import { CartillaPContext } from "./BuscarCartillaPacientes";
 
const CartillaPacientes =()=> {
    const {prestadoresOpen,abrirPrestador, abrirCerrarCartilla}= useContext(CartillaPContext);
    const usuario= "pacientes"
    return(
        <>
            <section className="flex flex-col justify-center text-center w-full">
                <h1 className=" font-semibold text-2xl mb-5">Cartilla médica:</h1>
                <ul>
                    <li className="buttom-yellow">
                        <h1 onClick={abrirPrestador}>Prestadores</h1>
                    </li>
                    <li className=" buttom-yellow">
                        <h1  onClick={abrirFarmacia}>Farmacias</h1>
                    </li>
                </ul>
                
            </section>
        </>
    )
};

export default CartillaPacientes;