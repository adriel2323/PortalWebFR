import Perfil from './Perfil'
import PerfilPersonal from './PerfilPersonal';
import { useContext } from 'react';
import {  faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppStore } from '../../../store/appStore';

const Resultados=({contexto, small})=>{
    // const {openSearch, listaResultados,setOpenSearch, isLoad,descripcion}= useContext(contexto)
    const showSmall=useAppStore((state)=>state.showSmall)
    const openSearch=useAppStore((state)=>state.openSearch)
    const setOpenSearch=useAppStore((state)=>state.setOpenSearch)
    const listaResultados=useAppStore((state)=>state.listaResultados)
    const isLoad=useAppStore((state)=>state.isLoad)
    const setListaResultados=useAppStore((state)=>state.setListaResultados)
    const descripcion=useAppStore((state)=>state.descripcion)

    const datosPerfil=["nombre","apellido","secundario","superior","titulo","experiencia"]
    
    return(
        <>
            <section className=' z-0 mx-auto lg:w-3/4  flex flex-col justify-center p-5 sm:pt-24 h-[100vh]'>
                <div className='flex '>
                    {showSmall && !openSearch && (<FontAwesomeIcon 
                    onClick={()=> {
                        console.log("cerrar")
                        setOpenSearch(true)
                        }} className=" text-xl mr-4" icon={faBars} />)}
                    <h1 className=' text-mygray font-semibold  pb-6 text-xl lg:text-4xl'>Resultados de busqueda</h1>
                </div>
                <div className='rounded bg-gray-300 py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                    {
                        isLoad && descripcion==="CV" && listaResultados.map(resultado=> <Perfil perfil={resultado} datos={datosPerfil} className="shadow-[0 4px 6px 0 hsla(0, 0%, 0%, 0.2)]"/>)
                    }
                    {
                        isLoad && descripcion==="PERSONAL" && listaResultados.map(resultado=> <PerfilPersonal className="shadow-[0 4px 6px 0 hsla(0, 0%, 0%, 0.2)]" perfil={resultado} datos={datosPerfil}/>)
                    }
                    {
                        isLoad && descripcion==="PROFESIONALES" && listaResultados.map(resultado=> <PerfilPersonal className="shadow-[0 4px 6px 0 hsla(0, 0%, 0%, 0.2)]" perfil={resultado} datos={datosPerfil}/>)
                    }
                </div>
            </section>
        </>
    )
};

export default Resultados;