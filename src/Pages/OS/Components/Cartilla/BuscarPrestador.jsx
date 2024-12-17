import { useEffect } from "react";
import Icon from "../../BotonesHome/IconXs";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import {CartillaContext} from "./BuscarCartilla";
import Opciones from "./Opciones";
import { Apiurl } from "../../../services/apiPortal";
import ResultadosCartilla from "./ResultadosCartilla";
import { apiBusquedas } from "../../../services/apiPortal";
import { useAppStore } from "../../../store/appStore";



const BuscarPrestador =({urlBusqueda, urlEspecialidades})=> {

    const area= useAppStore((state)=>state.area);
    
    const {volverABuscador,}=useContext(CartillaContext);
    const [isLoad,setIsLoad]=useState(true)
    const [busquedaDone,setBusquedaDone]=useState(false);
    const [busqueda, setBusqueda]= useState({});
    const [especialidadesCompletas,setEspecialidadesCompletas]= useState(["Elija una opción"])
    const [resultados,setResultados]= useState(["No se obtuvieron resultados"])
    const [sinResultados,setSinResultados]= useState(false);

    const handleChange= async e=>{
        await setBusqueda({
            palabraBuscada: e.target.value
        })
        
    }
    
    const buscar=e=>{
        e.preventDefault();
        
        switch (area) {
            case "os":
                console.log("entro en os");
                
                fetch(Apiurl+urlBusqueda.prestadores+busqueda.palabraBuscada)
                .then(response=>response.json())
                .then(response=>{
                    
                    if(response=="No se encontraron resultados de la busqueda"){
                        setSinResultados(true)
                    }
                    
                setResultados(response.result)
                setBusquedaDone(true);
                })
                .catch(error=>console.log(error))
                
                break;
            case "pacientes":
                console.log("entro en pacientes");
                fetch(Apiurl+urlBusqueda.prestadores+"&"+busqueda.palabraBuscada)
                .then(response=>response.json())
                .then(response=>{
                    
                    if(response=="No se encontraron resultados de la busqueda"){
                        setSinResultados(true)
                    }
                    
                setResultados(response.result)
                setBusquedaDone(true);
                })
                .catch(error=>console.log(error))
                break;

        
            default:
                console.log("entro en default");
                fetch(Apiurl+urlBusqueda.prestadores+"&"+busqueda.palabraBuscada)
                .then(response=>response.json())
                .then(response=>{
                    console.log(response);
                    
                    
                    if(response=="No se encontraron resultados de la busqueda"){
                        setSinResultados(true)
                    }
                    
                setResultados(response.result)
                setBusquedaDone(true);
                })
                .catch(error=>console.log(error))
                break;
        }
        console.log("el area:", area);
        console.log("La url:",Apiurl+urlBusqueda.prestadores+busqueda.palabraBuscada )
        
    }

    useEffect(()=>{
        let lista=[]
        fetch(Apiurl+urlBusqueda.especialidades)
        .then(response=>response.json())
        .then(response=>{
          for(let i=0;i<response.result.length;i++){
            lista.push(response.result[i]);
          }
          setEspecialidadesCompletas(lista)
        })
        .catch(error=>console.log(error))
        
      },[])

    return(
        <>
            <section>
                <h1 className="font-semibold text-2xl mb-5">Prestadores:</h1>
                <div>
                    <form  onSubmit={buscar} action="#">
                        <div className="flex flex-col sm:flex-row justify-between mb-5">
                            <h1 className="sm:self-center font-medium text-xl  mr-3">Especialidad</h1>
                            <select onChange={handleChange} className="form-input font-sans text-base mb-1 w-full"  name="especialidad" id="">
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
                <div className="flex mt-3 h-4" onClick={volverABuscador}>
                    <Icon icono={faArrowAltCircleLeft}/>
                    <h1 className="ml-3 self-center">
                        Volver
                    </h1>
                </div>
                {
                    sinResultados && <h1 className="mt-10 mb-2 font-semibold text-2xl">No se encontraron resultados de la busqueda</h1>
                }
                {
                    busquedaDone && <ResultadosCartilla resultados={resultados}/>
                }
            </section>
        </>
    )
};


export default BuscarPrestador;