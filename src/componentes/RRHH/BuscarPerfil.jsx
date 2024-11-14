import { useSearchParams } from "react-router-dom";
import Categorias from "./PanelBusqueda/Categorias";
import Resultados from "./PanelBusqueda/Resultados";
import { useEffect,createContext,useState,useContext } from "react";
import { Apiurl,apiRRHHCv } from "../../services/apiPortal";
// import { Link } from "react-router-dom";
import {  faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Secciones from "../navBar/Secciones";
import { userAdapter } from "../../Utilities/Adapters/user.adapter";
// import { PerfilContext } from "../../App";
import { useUserStore } from "../../store/userStore";
export const busquedaContext= createContext();



const BuscarPerfil=({descripcion})=>{
    const [params, setParams]= useSearchParams();
    const usuario= useUserStore((state)=>state.user)
    const permisosRrhh= usuario.permisos.permisosRrhh
    const login= usuario.isLogin
    const [listaResultados, setListaResultados]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const [isOpen,setIsOpen]= useState(false);
    const [openSearch,setOpenSearch]= useState(false);
    const [busqueda,setBusqueda]=useState({})
    const [busquedaDone,setBusquedaDone]=useState(false);

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [showSmall,setShowSmall]= useState(false);
    
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
            fetch(Apiurl+ apiRRHHCv.buscarCv+area+"$"+apellido+"$"+experiencia)
            .then(response=>response.json())
            .then(response=>{
                setListaResultados(response.result)
                setBusquedaDone(true);
            })
            .catch(error=>console.log(error))
        } else if( descripcion==="PERSONAL"){
            e.preventDefault();
            let area= busqueda.area?busqueda.area:"";
            let apellido= busqueda.apellido?busqueda.apellido:"";
            let dni= busqueda.dni?busqueda.dni:"";
            let legajo= busqueda.legajo?busqueda.legajo:"";
            setParams(busqueda);

            fetch(Apiurl+ apiRRHHCv.buscarPersonal+dni+"$"+apellido+"$"+legajo+"$"+area)
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
                <busquedaContext.Provider value={{descripcion,openSearch,setOpenSearch,listaResultados,setListaResultados,isLoad, setIsLoad,usuario, buscar, setBusqueda, busqueda, handleChange}}>

                        {openSearch && showSmall && <Categorias contexto={busquedaContext}/>}
                        {!showSmall && <Categorias contexto={busquedaContext}/>}
                    {/* <div className={showSmall?"z-10":""}>
                    </div> */}
                    
                    {
                        isLoad && <Resultados small={showSmall} contexto={busquedaContext}/>
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