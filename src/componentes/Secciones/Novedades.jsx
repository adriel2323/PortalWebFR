import { useState, useEffect, useContext } from "react";
import { Apiurl } from "../../services/apiPortal";
import { PerfilContext } from "../../App";

const Novedades=({usuarios})=>{
    const {verNovedad}= useContext(PerfilContext)

    const [novedades, setNovedades]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const usuario=usuarios
    console.log(Apiurl+"/api/novedades/"+usuari);

    useEffect(()=>{
        fetch(Apiurl+"/api/novedades/"+usuario)
        
        .then(response=>response.json())
        .then(response=>{
          
          setNovedades(response.novedades)
          setIsLoad(true)
        })
        .catch(error=>console.log(error))
        
      },[])
   
     
   
    return(
        < div className="lg:mx-52 mx-10 mb-5">
            
            <h2 className=" text-secondary text-center my-4 text-4xl font-bold" >Ultimas novedades</h2>
            <p className=" text-base font-light text-center mb-10">Enterate de las novedades sobre mejoras en sistemas, regulaciones y temas de interes</p>
            {
                isLoad && (
                    <div className="">
                <ul className="grid grid-cols-1 lg:grid-cols-3  h-[35rem] w-full bg-white  ">
                    
                    {
                        novedades.map(novedad=>(
                            
                            <>
                            {    
                            <li key={novedad.id} >
                                 <div  className="flex lg:flex-col  w-full justify-between  p-5 " href={novedad.link}>
                                {/* <div onClick={verNovedad(novedad.id)} className="flex lg:flex-col  w-full justify-between  p-5 " href={novedad.link}> */}
                                    <div className=" mr-4 lg:mr-0 w-10/12  aspect-square  ">
                                        <img src={(Apiurl+ "novedades/imagenes/"+novedad.imagen)||(Apiurl+ "novedades/imagenes/imageDefault")} alt=""className=" rounded-md  h-full aspect-square object-cover" />
                                    </div>
                                    <h4 className="hidden lg:flex text-gray-400">{novedad.fecha}</h4>

                                    <div className=" w-full text-rigth h-[5rem] ">
                                        
                                        <h2 className="text-secondary text-lg font-semibold">{novedad.titulo}</h2>
                                        <p className=" sm:hidden md:flex md:text-sm h-full overflow-hidden ">{novedad.descripcion.slice(0,130)} ...</p>
                                        <h4 className="lg:hidden text-gray-400">{novedad.fecha}</h4>
                                    </div>
                                </div>
                            </li>}
                            
                            </>
                            
                            
                        ))
                    }
                </ul>
            </div>
                )
            }
           
        </div>
    )
};

export default Novedades;

