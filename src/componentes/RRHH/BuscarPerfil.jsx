import Icon from "../BotonesHome/Icon";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons"
import Categorias from "./PanelBusqueda/Categorias";
import CategoriasL from "./PanelBusqueda/CategoriasL";
import Resultados from "./PanelBusqueda/Resultados";
import { useEffect,createContext,useState,useContext } from "react";
import { Apiurl,apiRRHHCv } from "../../services/apiPortal";
import { Link } from "react-router-dom";
import {  faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Secciones from "../navBar/Secciones";
import { userAdapter } from "../../Utilities/Adapters/user.adapter";
import { PerfilContext } from "../../App";
import Footer from "../Footer/Footer";
import { useUserStore } from "../../store/userStore";
export const busquedaContext= createContext();

const paramsSerch=[
    {
        id:1, 
        nombre: "Administración y Atención al Público",	
        value:"administracion/atencionalpublico"
    },
    {
        id:2,
        nombre: "Contabilidad",
        value:"contable"
    },
    {
        id:3,
        nombre: "Enfermería",
        value:"enfermeria"
    },
    {
        id:4,
        nombre: "Farmacia",
        value:"farmacia"
    },
    {
        id:5,
        nombre: "Anatomía Patológica",
        value:"anatomiPatologica"
    },
    {
        id:6,
        nombre: "Chofer",
        value:"chofer"
    },
    {
        id:7,
        nombre: "Diagnostico por imagen",
        value:"diagnosticoPorimagen"
    },
    {
        id:8,
        nombre: "Limpieza",
        value:"limpieza"
    },
    {
        id:9,
        nombre: "Mantenimiento",
        value:"Mantenimiento"
    },
    {
        id:10,
        nombre: "Camillero",
        value:"camillero"
    }

]


const BuscarPerfil=({descripcion})=>{
    const usuario= useUserStore((state)=>state.user)
    const permisosRrhh= usuario.permisos.permisosRrhh
    const {login}= useContext(PerfilContext)

    const [listaResultados, setListaResultados]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const [isOpen,setIsOpen]= useState(false);
    const [openSearch,setOpenSearch]= useState(false);
    const [busqueda,setBusqueda]=useState({})
    const [busquedaDone,setBusquedaDone]=useState(false);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [showSmall,setShowSmall]= useState(false);

    console.log("Esto es el load:", isLoad);
    console.log("Esto es el permiso:", permisosRrhh);
    
    const show=()=>{     
        if(width< 1024){
            setShowSmall(true);
        } else {
            setShowSmall(false);
        }
    }

    useEffect(()=>{
        if(permisosRrhh==false){
            setTimeout(()=>{window.location = '/rrhh';}, 5000);

        } else{
        }
    },[])

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    
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
        if(descripcion==="CV"){
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
        } else if( descripcion==="PERSONAL"){
            let area= busqueda.area?busqueda.area:"";
            let apellido= busqueda.apellido?busqueda.apellido:"";
            let experiencia= busqueda.experiencia?busqueda.experiencia:"";
            e.preventDefault();
            console.log(busqueda);
            fetch(Apiurl+ apiRRHHCv.buscarPersonal+area+"$"+apellido+"$"+experiencia)
            .then(response=>response.json())
            .then(response=>{
                setListaResultados(response.result)
                setBusquedaDone(true);
            })
            .catch(error=>console.log(error))
            
        }
        
    }

    useEffect(()=>{
        if(descripcion==="CV"){
            fetch(Apiurl+apiRRHHCv.listaCv)
            .then(response=>response.json())
            .then(response=>{
            let resultados=response.Cv
            // let resultadosAdaptados=resultados.map((result)=>{
            //     return userAdapter(result)
            // })
            setListaResultados(resultados)
            setIsLoad(true)
            })
            .catch(error=>console.log(error))
            
        } else if(descripcion==="PERSONAL"){
            
            fetch(Apiurl+apiRRHHCv.listaPersonal)
            .then(response=>response.json())
            .then(response=>{
            let resultados=response.result
            let resultadosAdaptados=resultados.map((result)=>{
                return userAdapter(result)
            })
            setListaResultados(resultadosAdaptados)
            console.log(resultadosAdaptados);
            
    
            setIsLoad(true)
            })
            .catch(error=>console.log(error))
        }
      
    },[])
    return(
        <>
            <Secciones usuarios={usuario}/>
            
            {login && permisosRrhh && 
            (<div className={showSmall?"relative flex justify-between w-full  h-fit bg-gray-100":"flex justify-between"}>
                <busquedaContext.Provider value={{descripcion,paramsSerch,openSearch,setOpenSearch,listaResultados,setListaResultados,isLoad, setIsLoad,usuario, buscar, setBusqueda, busqueda, handleChange}}>

                        {openSearch && showSmall && <Categorias contexto={busquedaContext}/>}
                        {!showSmall && <Categorias contexto={busquedaContext}/>}
                    {/* <div className={showSmall?"z-10":""}>
                    </div> */}
                    
                    {
                        isLoad && <Resultados contexto={busquedaContext}/>
                    }
                    {
                        !isLoad && <section className='z-0 w-3/4 px-10 h-[100vh]'>

                        {
                            !openSearch && 
                                (<FontAwesomeIcon onClick={()=> setOpenSearch((prev)=> !prev)} className=" text-xl absolute z-10" icon={faBars} />)
                        }
                        <h1 className=' text-mygray font-semibold  pb-6 text-md lg:text-4xl'>Resultados de busqueda</h1>
                        <div className='lg:py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                            <div className=" font-medium lg:text-3xl">Buscando....</div>
                        </div>
                    </section> 
                    }
                </busquedaContext.Provider>
            </div>)
            }
            {!login && <div className="mb-5 text-sm lg:text-2xl font-bold text-center">
                    No tiene permisos para acceder a esta informacion. Debe ser administrador.
                </div> }
        </>
    )
};

export default BuscarPerfil;