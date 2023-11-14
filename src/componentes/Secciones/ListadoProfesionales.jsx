import { useState, useEffect } from "react";
import { Apiurl } from "../../services/apiPortal";

const Novedades=({usuarios})=>{

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
                                                        
                                                        return(<h1 data-tooltip={e.osNo} key={e.id} className=" flex text-gray-400">{e.name}{(e.osNo == ""?e.osNo:" - "+e.osNo)}</h1>)})
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
    // return(
    //     < div className="lg:mx-52 mx-10 mb-5">
            
    //         <h2 className=" text-secondary text-center my-4 text-4xl font-bold" >Ultimas novedades</h2>
    //         <p className=" text-base font-light text-center mb-10">Enterate de las novedades sobre mejoras en sistemas, regulaciones y temas de interes</p>
    //         {
    //             isLoad && (
    //                 <div className="">
    //             <ul className="grid grid-cols-1 lg:grid-cols-3 w-full bg-white  ">
                    
    //                 {
    //                     novedades.map(novedad=>(
                            
    //                         <>
    //                         {    
    //                         <li key={novedad.id} >
    //                             <a className="flex lg:flex-col  w-full justify-between  p-1 " href={"/"}>
    //                                 {/* <div className=" mr-4 lg:mr-0 w-10/12  aspect-square  ">
    //                                     <img src={(Apiurl+ "novedades/imagenes/"+novedad.imagen)||(Apiurl+ "novedades/imagenes/imageDefault")} alt=""className=" rounded-md  h-full aspect-square object-cover" />
    //                                 </div> */}
    //                                 <h4 className="hidden lg:flex text-gray-400">{novedad.especialidad}</h4>
    //                                 <h2 className="text-secondary text-lg font-semibold">{novedad.name}</h2>
    //                                 <div className=" w-full text-rigth ">
                                        
                                        
    //                                 </div>

    //                             </a>
                                
    //                         </li>}
                            
    //                         </>
                            
                            
    //                     ))
    //                 }
    //             </ul>
    //         </div>
    //             )
    //         }
           
    //     </div>
    // )
};

export default Novedades;

