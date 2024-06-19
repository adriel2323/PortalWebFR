import React from "react";
import Secciones from "../../navBar/Secciones";
import FormularioNovedades from "./FormularioNovedades";
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { PerfilContext } from "../../../App";

const PaginaGestionNov =()=> {
    const {login,usuario,permisosRrhh}= useContext(PerfilContext)
    console.log(usuario);
    useEffect(()=>{
        if(permisosRrhh==false){
            setTimeout(()=>{window.location = '/';}, 3000);

        } else{
        }
    },[])

    const usuarioSec= "rrhh"

    return(
        <>
            <Secciones usuarios={usuarioSec}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[20rem] lg:px-52 py-12 bg-secondary text-white">
                
                {login && permisosRrhh && <FormularioNovedades /> }
                {!login && <div className="mb-5 text-sm lg:text-2xl font-bold text-center">
                    No tiene permisos para cargar novedades. Debe ser administrador.
                </div> }
            </div>
            <Footer/>


        </>
    )
};


export default PaginaGestionNov;