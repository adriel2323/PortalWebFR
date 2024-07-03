import Perfil from './Perfil'
import { useContext } from 'react';
import {  faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





const Resultados=({contexto})=>{
    const {openSearch, listaResultados,setOpenSearch, isLoad}= useContext(contexto)
    // const {openSearch,setOpenSearch}=useContext(cvContext)
    // const {listaResultados, isLoad}= useContext(cvContext)
    const datosPerfil=["nombre","apellido","secundario","superior","titulo","experiencia"]
    

    return(
        <>
            <section className='z-0 mx-auto lg:w-3/4  flex flex-col justify-center p-5 lg:px-10 lg:pt-24 h-[100vh]'>
                <div className='flex '>
                    {!openSearch && (<FontAwesomeIcon onClick={()=> setOpenSearch((prev)=> !prev)} className=" text-xl mr-4" icon={faBars} />)}
                    <h1 className=' text-mygray font-semibold  pb-6 text-xl lg:text-4xl'>Resultados de busqueda</h1>
                </div>
                <div className='rounded bg-gray-300 py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                    {
                        isLoad && listaResultados.map(resultado=> <Perfil perfil={resultado} datos={datosPerfil}/>)
                    }
                </div>
            </section>
        </>
    )
};

export default Resultados;