import { useSearchParams } from "react-router-dom";
import Categorias from "./PanelBusqueda/Categorias";
import Resultados from "./PanelBusqueda/Resultados";
import PerfilPersonal from "./PanelBusqueda/PerfilPersonal";
import Perfil from "./PanelBusqueda/Perfil";
import { useEffect,createContext,useState,useContext } from "react";
import { Apiurl,apiRRHHCv } from "../../services/apiPortal";

import {  faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Secciones from "../navBar/Secciones";
import { userAdapter } from "../../Utilities/Adapters/user.adapter";

import { useUserStore } from "../../store/userStore";
import { useAppStore } from "../../store/appStore";
import  {datosPerfil} from "../../data/constantes"

export const busquedaContext= createContext();

const BuscarPerfil=({descripcion})=>{
    const [params, setParams]= useSearchParams();
    const usuario= useUserStore((state)=>state.user)
    const permisosRrhh= usuario.permisos.permisosRrhh
    const login= usuario.isLogin
    const listaResultados= useAppStore((state)=>state.listaResultados)
    const setListaResultados= useAppStore((state)=>state.setListaResultados)
    const isLoad= useAppStore((state)=>state.isLoad)
    const setIsLoad= useAppStore((state)=>state.setIsLoad)
    const showSmall= useAppStore((state)=>state.showSmall)
    const openSearch= useAppStore((state)=>state.openSearch)
    const setOpenSearch= useAppStore((state)=>state.setOpenSearch)
    const [busqueda,setBusqueda]=useState({})
    const [busquedaDone,setBusquedaDone]=useState(false);

    useEffect(()=>{
        if(permisosRrhh==false){
            setTimeout(()=>{window.location = '/rrhh';}, 5000);
        } else{
        }
    },[])

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
        setListaResultados([])
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
                <busquedaContext.Provider value={{descripcion,setOpenSearch, buscar, busqueda, handleChange}}>
                    
                        {openSearch && showSmall && <Categorias contexto={busquedaContext}/>}
                        {!showSmall && <Categorias contexto={busquedaContext}/>}
                    
                    {
                        isLoad && 

                        <Resultados >
                            {
                                isLoad && descripcion==="CV" && listaResultados.map(resultado=> <Perfil perfil={resultado} datos={datosPerfil} className="shadow-[0 4px 6px 0 hsla(0, 0%, 0%, 0.2)]"/>)
                            }
                            {
                                isLoad && descripcion != "CV" && listaResultados.map(resultado=> <PerfilPersonal className="shadow-[0 4px 6px 0 hsla(0, 0%, 0%, 0.2)]" perfil={resultado} datos={datosPerfil}/>)
                            }
                        </Resultados>
                        
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
            {
                !login && 
                <div className="mb-5 text-sm lg:text-2xl font-bold text-center">
                    No tiene permisos para acceder a esta informacion. Debe ser administrador.
                </div>
                }
        </>
    )
};

export default BuscarPerfil;