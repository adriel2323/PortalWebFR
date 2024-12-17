import { useState, useEffect } from "react";
import { Apiurl } from "../../../services/apiPortal";

const Novedades=({usuarios})=>{

    const [profesionales, setProfesionales]= useState([])
    const [especialidades, setEspecialidades]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const usuario=usuarios
    

    useEffect(()=>{
        fetch(Apiurl+"clinica/personal/lista/profesionales")
        // fetch("http://localhost:3001/api/novedades/"+usuario)
        .then(response=>response.json())
        .then(response=>{
        //   setNovedades(response.novedades)
        setProfesionales(response.profesionales)
        setIsLoad(true)
        })
        .catch(error=>console.log(error))

        fetch(Apiurl+"clinica/personal/lista/especialidades")
        // fetch("http://localhost:3001/api/novedades/"+usuario)
        
        .then(response=>response.json())
        .then(response=>{
        //   setNovedades(response.novedades)
        setEspecialidades(response.result)
        if(especialidades!=undefined){
            setIsLoad(true)
          }
        })
        .catch(error=>console.log(error))
        
      },[])
   
    return(
        < div className="lg:px-52 px-10 py-10  mb-5 w-full bg-gray-50 ">
            
            <h2 className=" text-secondary text-center my-4 text-4xl font-bold" >Nuestros profesionales</h2>
            <p className=" text-base font-light text-center mb-10">Contamos con un amplio staf de médicos para brindarte la mejor atención </p>
            {
                isLoad && (
                    <div className="">
                <ul className="grid grid-cols-1 lg:grid-cols-4 grid-flow-row-dense">
                {
                        especialidades.map(especialidad=>(
                                    <li >
                                        <h1 key={especialidad.id} className="text-secondary text-lg font-semibold mt-10">
                                            {especialidad.especialidades}
                                        </h1>
                                            <ul>
                                                <li>
                                                    {profesionales.map((e)=>{
                                                        if(e.especialidad===especialidad.especialidades)
                                                        return(<div key={e.id}>
                                                                <h1 data-tooltip={e.osNo}  className=" flex font-medium text-gray-600">{e.name}</h1>
                                                                <h2 data-tooltip={e.osNo} className=" flex text-gray-400">{(e.osNo == ""?e.osNo:" - "+e.osNo)}</h2>
                                                                </div>)})
                                                    }
                                                </li>
                                            </ul>
                                    </li>
                            
                            
                        ))
                    }
                </ul>
            </div>
                )
            }
            {
                !isLoad && (
                    
                        <li >
                            <h1 key="1" className="text-secondary text-lg font-semibold">
                                No se encontraron especialidades
                            </h1>
                        </li>
                    
                )
            }
           
        </div>
    )
};

export default Novedades;

