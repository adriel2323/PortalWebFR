import Icon from '../../../../componentes/BotonesHome/Icon'
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Categorias from "../PanelBusqueda/Categorias";
import Resultados from "../PanelBusqueda/Resultados";
import { useEffect,createContext,useState } from "react";
import { Apiurl,apiRRHHCv } from "../../../../services/apiPortal";
import { Link } from "react-router-dom";
import {  faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Secciones from "../../../../componentes/Secciones/navBar/Secciones";

export const edicionPersonalContext= createContext();

const Personal=()=>{
    const usuario="rrhh"
    const [listaResultados, setListaResultados]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const [isOpen,setIsOpen]= useState(false);
    const [openSearch,setOpenSearch]= useState(false);
    const [busqueda,setBusqueda]=useState({})
    const [busquedaDone,setBusquedaDone]=useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [showSmall,setShowSmall]= useState(false);
    const paramSerch=[
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
    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    const show=()=>{     
            if(width< 1024){
                setShowSmall(true);
            } else {
                setShowSmall(false);
            }
        }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);
    useEffect(() => {  
        show()
    }, [width]);

    const handleChange= async e=>{
        console.log(busqueda);
        await setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
        
    }
    
    const buscar=e=>{
        let area= busqueda.area?busqueda.area:"";
        let apellido= busqueda.apellido?busqueda.apellido:"";
        let experiencia= busqueda.experiencia?busqueda.experiencia:"";
        e.preventDefault();
        console.log(busqueda);
        fetch(Apiurl+ apiRRHHCv.buscarCv+area+"$"+apellido+"$"+experiencia)
        .then(response=>response.json())
        .then(response=>{
            setListaResultados(response.result)
            setBusquedaDone(true);
        })
        .catch(error=>console.log(error))
        
    }

    useEffect(()=>{
      fetch(Apiurl+apiRRHHCv.listaPersonal)
      .then(response=>response.json())
      .then(response=>{
        setListaResultados(response.result)
        setIsLoad(true)
      })
      .catch(error=>console.log(error))
      
    },[])

    return(
        <>
            <edicionPersonalContext.Provider value={{paramSerch, openSearch,setOpenSearch,listaResultados,setListaResultados,isLoad, setIsLoad,usuario, buscar, setBusqueda, busqueda, handleChange}}>
                <Secciones usuarios={usuario}/>
                <div className="relative flex justify-between w-full  bg-gray-100">
                        <div className="z-10">
                            {/* {openSearch && <Categorias contexto={edicionPersonalContext} />} */}
                        </div>
                        
                        {
                            isLoad && <Resultados contexto={edicionPersonalContext}  />
                        }
                        {
                            !isLoad && <section className='z-0 w-3/4 px-10 h-[100vh]'>
                            {!openSearch && (<FontAwesomeIcon onClick={()=> setOpenSearch((prev)=> !prev)} className=" text-xl absolute z-10" icon={faBars} />)}
                            <h1 className=' text-mygray font-semibold  pb-6 text-md lg:text-4xl'>Resultados de busqueda</h1>
                            <div className='lg:py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                                <div className=" font-medium lg:text-3xl">Buscando....</div>
                            </div>
            
                        </section> 
                            
                        }
                </div>
            </edicionPersonalContext.Provider>
        </>
    )
};

export default Personal;