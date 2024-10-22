import React from "react";
import Secciones from "../navBar/Secciones"
import FormularioRh from "./FormularioRh";
import Footer from "../Footer/Footer";
import Icon from "../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FormularioCV =()=> {
    const usuario= "rrhh"
    
    return(
        <>
            <Secciones area={usuario}/>
            
            <div className="flex flex-col place-items-center h-[40rem] mb-[55rem] lg:px-52 py-12 bg-secondary text-white">
                <div className="flex  justify-start w-11/12 md:w-5/6">
                    <Link to="/rrhh">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </Link>
                </div>
                <FormularioRh />
            </div>
            <Footer/>


        </>
    )
};


export default FormularioCV;