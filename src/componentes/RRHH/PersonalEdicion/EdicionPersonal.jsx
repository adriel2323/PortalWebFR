import Categorias from "./PanelBusqueda/Categorias";
import Resultados from "./PanelBusqueda/Resultados";
import { useEffect,createContext,useState } from "react";
import { Apiurl,apiRRHHCv } from "../../services/apiPortal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const cvContext= createContext();

const BuscarCV=()=>{
    const usuario="rrhh"
    const [listaResultados, setListaResultados]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const [isOpen,setIsOpen]= useState(false);
    const [openSearch,setOpenSearch]= useState(false);
    const [busqueda,setBusqueda]=useState({})
    const [busquedaDone,setBusquedaDone]=useState(false);
    const parametrosPersonal=[
        {
            id:1, 
            nombre: "DNI",	
            value:"dni"
        },
        {
            id:2,
            nombre: "Nombre y Apellido",
            value:"nombre"
        },
        {
            id:3,
            nombre: "Legajo",
            value:"legajo"
        }
    ]

    const handleChange= async e=>{
        console.log(busqueda);
        await setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
        
    }
    
    const buscar=e=>{
        let dni= busqueda.dni?busqueda.dni:"";
        let nombre= busqueda.nombre?busqueda.nombre:"";
        let legajo= busqueda.legajo?busqueda.legajo:"";
        e.preventDefault();
        console.log(busqueda);
        fetch(Apiurl+ apiRRHHCv.buscarPersonal+dni+"$"+nombre+"$"+legajo)
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
            <div className="relative flex justify-between w-full  bg-gray-100">
                <cvContext.Provider value={{openSearch,setOpenSearch,listaResultados,setListaResultados,isLoad, setIsLoad,usuario, buscar, setBusqueda, busqueda, handleChange}}>
                    <div className="z-10">
                        {openSearch && <Categorias paramsSerch={parametrosCV}/>}
                    </div>
                    {
                        isLoad && <Resultados resultados={[]}/>
                    }
                    {
                        !isLoad && <section className='z-0 w-3/4 px-10 pt-24 h-[100vh]'>
                        {!openSearch && (<FontAwesomeIcon onClick={()=> setOpenSearch((prev)=> !prev)} className=" text-xl absolute z-10" icon={faBars} />)}
                        <h1 className=' text-mygray font-semibold  pb-6 text-md lg:text-4xl'>Resultados de busqueda</h1>
                        <div className='lg:py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                            <div className=" font-medium lg:text-3xl">Buscando....</div>
                        </div>
                    </section> 
                        
                    }
                </cvContext.Provider>
            </div>
        </>
    )
};

export default BuscarCV;