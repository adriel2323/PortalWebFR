import React from "react";
import Secciones from "../../../Components/navBar/Secciones";
import AfiliacionesForm from "./AfiliacionesForm"
import Icon from "../../../Components/BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Afiliaciones =()=> {
    const usuario= "os"

    return(
        <>
            <Secciones usuarios={usuario}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[55rem] lg:px-[5vh] py-12 bg-secondary text-white">
                <div className="flex  justify-start w-11/12 md:w-5/6">
                    <Link to="/obrasocial">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </Link>
                </div>
                <AfiliacionesForm />
            </div>
            


        </>
    )
};


export default Afiliaciones;