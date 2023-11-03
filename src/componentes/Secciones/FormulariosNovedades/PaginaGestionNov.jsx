import React from "react";
import Secciones from "../../navBar/Secciones";
import FormularioNovedades from "./FormularioNovedades";
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

const PaginaGestionNov =()=> {
    const usuario= "rrhh"

    return(
        <>
            <Secciones usuarios={usuario}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[20rem] lg:px-52 py-12 bg-secondary text-white">
                <div className="flex w-11/12 md:w-5/6  justify-start ">
                    <a href="/">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </a>
                </div>
                <FormularioNovedades />
            </div>
            <Footer/>


        </>
    )
};


export default PaginaGestionNov;