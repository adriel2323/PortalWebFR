import React, { useEffect } from "react";
import Icon from "../BotonesHome/IconXs";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import {CartillaContext} from "./BuscarCartillaPacientes";
import Opciones from "../ObraSocial/Cartilla/Opciones";
import { Apiurl } from "../../services/apiPortal";



const BuscarPrestador =()=> {
    const {volverABuscador,}=useContext(CartillaContext);
    const [isLoad,setIsLoad]=useState(true)
    const [especialidadesCompletas,setEspecialidadesCompletas]= useState(["Elija una opción"])

    useEffect(()=>{
        let lista=[]
        fetch(Apiurl+"clinica/personal/lista/especialidades")
        .then(response=>response.json())
        .then(response=>{
          for(let i=0;i<response.especialidades.length;i++){
            lista.push(response.especialidades[i]);
          }
          setEspecialidadesCompletas(lista)
        })
        .catch(error=>console.log(error))
        
      },[])


    const usuario= "os"

    return(
        <>
            <section>
                <h1 className="font-semibold text-2xl mb-5">Prestadores:</h1>
                <div>
                    <form  action="">
                        <div className="flex justify-between mb-5">
                            <h1 className="self-center font-medium text-xl  mr-3">Especialidad</h1>
                            <select className="form-input font-sans text-base mb-1 w-full"  name="area" id="">
                                <Opciones opcion={"Elija una opción"}/>
                                {
                                    especialidadesCompletas.map(e=>
                                        <Opciones opcion={e.especialidades}/>
                                    )
                                }
                        </select>
                        </div>
                            <input className="form-buttom-send w-full" type="submit" value="Buscar" />
                    </form> 
                </div>
                <div className="flex mt-3" onClick={volverABuscador}>
                    <Icon icono={faArrowAltCircleLeft}/>
                    <h1 className="ml-3 self-center">
                        Volver
                    </h1>
                </div>
            </section>
        </>
    )
};


export default BuscarPrestador;