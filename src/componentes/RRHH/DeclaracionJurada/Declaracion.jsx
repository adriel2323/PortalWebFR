import React from "react";
import Secciones from "../../navBar/Secciones";
import DeclaracionForm from "./DeclaracionForm"
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const FormularioCV =()=> {
    const usuario= "rrhh"

    return(
        <>
            <Secciones usuarios={usuario}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[55rem] lg:px-[5vh] py-12 bg-secondary text-white">
                <div className="flex justify-start w-11/12 md:w-5/6">
                    <a href="/rrhh">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </a>
                </div>
                <DeclaracionForm />
            </div>
            


        </>
    )
};


export default FormularioCV;