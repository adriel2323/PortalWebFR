import { useState, useEffect } from "react";
import { Apiurl } from "../../../services/apiPortal";

const ListadoProfesionales=({usuarios})=>{

    const [novedades, setNovedades]= useState([])
    const [especialidades, setEspecialidades]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const usuario=usuarios


    useEffect(()=>{
        fetch(Apiurl+"clinica/personal/lista/profesionales")
        // fetch("http://localhost:3001/api/novedades/"+usuario)

        .then(response=>response.json())
        .then(response=>{

        //   setNovedades(response.novedades)
          setNovedades(response.profesionales)
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
        < div className="lg:mx-52 mx-10 mb-5">

            <h2 className=" text-secondary text-center my-4 text-4xl font-bold" >Nuestros profesionales</h2>
            <p className=" text-base font-light text-center mb-10">Contamos con un amplio staf de médicos para brindarte la mejor atención </p>
            {
                isLoad && (
                    <div className="">
                <ul className="grid grid-cols-1 lg:grid-cols-4 grid-flow-row-dense w-full bg-white  ">
                {
                        especialidades.map(especialidad=>(


                                    <li >
                                        <h1 key={especialidad.id} className="text-secondary text-lg font-semibold">
                                            {especialidad.especialidades}
                                        </h1>
                                            <ul>
 <li>

                                                    {novedades.map((e)=>{


                                                        if(e.especialidad===especialidad.especialidades)

                                                        return(<>
                                                                <h1 data-tooltip={e.osNo} key={e.id} className=" flex font-medium text-gray-600">{e.name}</h1>
                                                                <h2 data-tooltip={e.osNo} key={e.id} className=" flex text-gray-400">{(e.osNo == ""?e.osNo:" - "+e.osNo)}</h2>
                                                                </>)})
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

export default ListadoProfesionales