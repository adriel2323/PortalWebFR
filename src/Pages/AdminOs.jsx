import Icon from "../BotonesHome/Icon";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Categorias from "./PanelBusqueda/Categorias";
import Resultados from "./PanelBusqueda/Resultados";
import { useEffect,createContext,useState } from "react";
import { Apiurl,apiRRHHCv } from "../../services/apiPortal";
import { Link } from "react-router-dom";
import {usuarios} from "../constantes"
import { apiLinks } from "../services/apiPortal";
import { links } from "../constantes/constantes";


export const cvContext= createContext();

const AdminOS=()=>{
    const usuario=usuarios.OBRASOCIAL
    const [listaResultados, setListaResultados]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const [busqueda,setBusqueda]=useState({})
    const [busquedaDone,setBusquedaDone]=useState(false);
    const handleChange= async e=>{
        console.log(busqueda);
        await setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        }) 
    }   
    const buscar=e=>{
        let tipo= busqueda.area?busqueda.tipo:"";
        let nombre= busqueda.nombre?busqueda.nombre:"";
        let especialidad= busqueda.experiencia?busqueda.especialidad:"";
        e.preventDefault();
        console.log(busqueda);
        fetch(Apiurl+ +tipo+"$"+nombre+"$"+especialidad)
        .then(response=>response.json())
        .then(response=>{
            setListaResultados(response.result)
            setBusquedaDone(true);
        })
        .catch(error=>console.log(error))
    }
    useEffect(()=>{
    
        fetch(Apiurl+apiRRHHCv.listaCv)
        .then(response=>response.json())
        .then(response=>{
            setListaResultados(response.Cv)
            setIsLoad(true)
        })
        .catch(error=>console.log(error))

        
        
    },[])

    


    return(
        <>
            

            <div className="flex justify-between w-full  bg-gray-100">
                <cvContext.Provider value={{listaResultados,setListaResultados,isLoad, setIsLoad,usuario, buscar, setBusqueda, busqueda, handleChange}}>

                    <div className="pl-4 pt-4 w-1/4 text-white bg-secondary justify-start  ">
                        <Link  className="pl-10 mb-10" to="/rrhh">
                            <Icon icono={faArrowAltCircleLeft}/>
                        </Link>
                        <h1 className="px-10 pt-10 text-3xl uppercase font-bold">Sanatorio de alta complejidad</h1>
                        <h1 className="px-10 pb-8 text-xl  font-medium">Fundación nuestra Señora del Rosario</h1>
                        <Categorias/>
                    </div>
                    {
                        isLoad && <Resultados resultados={[]}/>
                    }
                    {
                        !isLoad && <section className='w-3/4 px-10 pt-24 h-[100vh]'>
                        <h1 className=' text-mygray font-semibold  pb-6 text-4xl'>Resultados de busqueda</h1>
                        <div className='py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                            <div className=" font-medium text-3xl">Buscando....</div>
                        </div>
        
                    </section> 
                        
                    }
                    {/* <Resultados  /> */}
                </cvContext.Provider>
            </div>
            {/* <Footer/> */}
        </>
    )
};

export default BuscarCV;