import Perfil from './Perfil'
import { useState,useEffect, useContext } from 'react';
import { cvContext } from '../BuscarCV';




const Resultados=()=>{
  const {listaResultados, isLoad}= useContext(cvContext)
  const datosPerfil=["nombre","apellido","secundario","superior","titulo","experiencia"]

    
        
    
    return(
        <>
            <section className='w-3/4 px-10 pt-24 h-[100vh]'>
                <h1 className=' text-mygray font-semibold  pb-6 text-4xl'>Resultados de busqueda</h1>
                <div className='py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                    {
                        isLoad && listaResultados.map(resultado=> <Perfil perfil={resultado} datos={datosPerfil}/>)
                    }
                </div>

            </section>
        </>
    )
};

export default Resultados;