import React, { useState } from "react";
import Icon from "../../../Components/BotonesHome/IconXs";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext,useEffect } from "react";
import { OsContext } from "../../HomeOs";
import {CartillaContext} from "./BuscarCartilla";
import Opciones from "./Opciones";
import { Apiurl } from "../../../../services/apiPortal";
import ResultadosCartilla from "./ResultadosCartilla";

const BuscarFarmacias =({urlBusqueda})=> {
    const {abrirCerrarCartilla}= useContext(OsContext)
    const usuario= "os"
    const {volverABuscador}=useContext(CartillaContext);
    const [localidades,setLocalidades]=useState([])
    const [busqueda, setBusqueda]= useState({});
    const [busquedaDone,setBusquedaDone]=useState(false);
    const [resultados,setResultados]= useState(["No se obtuvieron resultados"])

    const handleChange= async e=>{
        await setBusqueda({
            palabraBuscada: e.target.value=="Elija una opción"?"":e.target.value
        })
        
    }

    useEffect(()=>{
        let lista=[]
        fetch(Apiurl+urlBusqueda.localidades)
        .then(response=>response.json())
        .then(response=>{
            
          for(let i=0;i<response.result.length;i++){
            lista.push(response.result[i]);
          }
          setLocalidades(lista)
        })
        .catch(error=>console.log(error))
        
      },[])

      const buscar=e=>{
        e.preventDefault();
        fetch(Apiurl+urlBusqueda.farmacias+"$"+busqueda.palabraBuscada)
        .then(response=>response.json())
        .then(response=>{
          setResultados(response.result)
        })
        .catch(error=>console.log(error))
        setBusquedaDone(true);
    }

    return(
        <>
            <section className="sm:w-full sm:px-10">
            <h1 className="font-semibold text-2xl mb-5 w-full">Farmacias:</h1>
                <div className="">
                    <form action="">
                        <div className="flex justify-between mb-5 w-full">
                            
                            <h1 className="self-center font-medium text-xl  mr-3">Localidad</h1>
                            <select onChange={handleChange} className="form-input font-sans text-base mb-1 w-full"  name="area" id="">
                                    <Opciones opcion={"Elija una opción"}/>
                                    {
                                        localidades.map(e=>
                                            <Opciones  opcion={e.localidad}/>
                                        )
                                    }
                            </select>
                        </div>
                        <input onClick={buscar} className="form-buttom-send w-full" type="submit" value="Buscar" />

                    </form>
                    
                </div>
                <div className="flex mt-3" onClick={volverABuscador}>
                    <Icon icono={faArrowAltCircleLeft}/>
                    <h1 className="ml-3 self-center">
                        Volver
                    </h1>
                </div>
                {
                    busquedaDone && <ResultadosCartilla resultados={resultados}/>
                }
            </section>
        </>
    )
};


export default BuscarFarmacias;