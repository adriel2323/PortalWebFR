import { useState, useEffect, useContext } from "react";
import { Apiurl,MESSAGES } from "../../services/apiPortal";
import { PerfilContext } from "../../App";
import { Link } from "react-router-dom";
import { Dialog } from '@headlessui/react';


const Novedades=({usuarios})=>{
    const {verNovedad}= useContext(PerfilContext)
    const [novedades, setNovedades]= useState([])
    const [isLoad,setIsLoad]= useState(false);
    const usuario=usuarios
    const textoGenerico= "Busca en nuestro portal las ultimas noticias.."
    
    useEffect(()=>{
        fetch(Apiurl+"/novedades/"+usuario)
        .then(response=>response.json())
        .then(response=>{
            setNovedades(response.novedades)
            if(response == MESSAGES.SIN_RESULTADOS_MESSAGE){
                setIsLoad(false)
            }else{
                setIsLoad(true)
            }
        })
        .catch(error=>console.log(error))
    },[])
    return(
        < div className=" mx-10 lg:mx-32 mb-5">
            
            <h2 className=" text-secondary text-center my-4 text-4xl font-bold" >Ultimas novedades</h2>
            <p className=" text-base font-light text-center mb-10">Enterate de las novedades sobre mejoras en sistemas, regulaciones y temas de interes</p>
            {
                isLoad && (
                <div className="">
                    <ul className="mb-15 grid grid-cols-1 lg:grid-cols-3  lg:h-[35rem] w-full bg-white  ">
                    
                    {   
                        novedades.map(novedad=>(
                            
                            <>
                            {    
                            <li key={novedad.id} className=" h-52 " >
                                 <div  className="flex lg:flex-col  h-full justify-between py-3 md:p-5 " href={novedad.link}>
                                    <div className=" mr-4 md:mr-0 lg:mr-0 w-10/12  aspect-square  ">
                                        <img src={(Apiurl+ "novedades/imagenes/"+novedad.imagen)||(Apiurl+ "novedades/imagenes/imageDefault")} alt=""className=" rounded-md h-[100%] md:w-[100%] aspect-square object-cover" />
                                    </div>
                                    <h4 className="hidden lg:flex text-gray-400">{novedad.fecha}</h4>

                                    <div className=" w-full text-rigth ">
                                        
                                        <h2 className="text-secondary text-lg font-semibold">{novedad.titulo}</h2>
                                        <p className=" sm:hidden md:flex md:text-sm h-[50%] overflow-scroll ">{novedad.descripcion.slice(0,130)} ...</p>
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
            {
                !isLoad && (
                    <Link to="/">
                        <li key="1" >
                                    <div  className="flex lg:flex-col  w-1/4 justify-start   p-5 " >
                                    {/* <div onClick={verNovedad(novedad.id)} className="flex lg:flex-col  w-full justify-between  p-5 " href={novedad.link}> */}
                                        <div className=" mr-4 lg:mr-0 w-10/12  aspect-square  ">
                                            <img src={(Apiurl+ "novedades/imagenes/imageDefault")} alt=""className=" rounded-md  h-full aspect-square object-cover" />
                                        </div>
                                        <h4 className="hidden lg:flex text-gray-400">{"..."}</h4>

                                        <div className=" w-full text-rigth h-[5rem] ">
                                            
                                            <h2 className="text-secondary text-lg font-semibold">{"Ultimas noticias"}</h2>
                                            <p className=" sm:hidden md:flex md:text-sm h-full overflow-hidden ">{textoGenerico.slice(0,130)} ...</p>
                                            <h4 className="lg:hidden text-gray-400">{"..."}</h4>
                                        </div>
                                    </div>
                                </li>
                    </Link>
                    )
            }
           
        </div>
    )
};

export default Novedades;

