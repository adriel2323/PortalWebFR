import { useState,useEffect } from "react";
import { Apiurl } from "../../services/apiPortal";
import axios from 'axios';

const Carrusel=({usuarios})=>{
    const[imagen, setImagen]=useState();
    const [load,setLoad]=useState(false);

    const imagenes= {
        prestadores:"../../../public/imagenes/banner/prestadores.png",
        general:"../../../public/imagenes/banner/generalSanatorio.png",
        cdi:"../../../public/imagenes/banner/cdi.png",
        pacientes:"../../../public/imagenes/banner/pacientes.png",
        rrhh:"../../../public/imagenes/banner/RRHH.png",
        os:"../../../public/imagenes/banner/obraSocial.png",
    }
    

    return(
        <div className="w-[100vw] aspect-square md:aspect-bannerXs ">
            <img className=" w-full h-full object-cover" src={(Apiurl+ "carrusel/imagenes/"+usuarios)||(Apiurl+ "novedades/imagenes/imageDefault")} alt="" />
        </div>
    )


}

export default Carrusel;