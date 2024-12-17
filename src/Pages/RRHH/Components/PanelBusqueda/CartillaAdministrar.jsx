import Secciones from "../../../Components/navBar/Secciones";
import ModalBusqueda from "./ModalBusqueda";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { Apiurl } from "../../../services/apiPortal";
import Resultados from "./Resultados";
import { useAppStore } from "../../../store/appStore";
import CardProfesional from "./cardProfesional";

const CartillaAdministrar = ({area}) => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const openSearch=useAppStore((state)=>state.openSearch)
    const setOpenSearch=useAppStore((state)=>state.setOpenSearch) 
    const [especialidades,setEspecialidades]=useState([])
    const [busqueda,setBusqueda]=useState([])
    const showSmall=useAppStore((state)=>state.showSmall)
    const [isLoad,setIsLoad]=useState(false)

    useEffect(()=>{

        let lista=[]
        fetch(Apiurl+"clinica/personal/lista/especialidades")
        .then(response=>response.json())
        .then(response=>{
            lista=response.result
            setEspecialidades(lista)
        })
        .catch(error=>console.log(error))
        fetch(Apiurl+"/clinica/personal/lista/profesionales")
        .then(response=>response.json())
        .then(response=>{
            setBusqueda(response.profesionales)
            setIsLoad(true)
            
        })
        .catch(error=>console.log(error))    
    },[])
    const buscarProfesional=(data)=>{
        let lista=[]
        fetch(Apiurl+"clinica/personal/busqueda/"+data.nombre+"&"+data.especialidad)
        .then(response=>response.json())
        .then(response=>{
            lista=response.result
            setBusqueda(lista)
        })
        .catch(error=>console.log(error))
    }

    return (
        <main>
            <Secciones usuarios={area} />
            <div className="flex flex-row">
                {
                    openSearch && showSmall &&
                    <ModalBusqueda setOpenSearch={setOpenSearch}  >
                        <form onSubmit={handleSubmit(buscarProfesional)} action="">
                            <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">

                                        <label className=" text-white form-label " htmlFor="nombre">Nombre</label>
                                        <input className="form-input text-base mb-1 " type="text" name="nombre" {...register("nombre")} />
                                    </div>
                                </li>
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">
                                        <label className=" text-white form-label text-base" htmlFor="Especialidad">Especialidad</label>
                                        <select className="form-input text-base " name="especialidad" id="" {...register("especialidad")}>
                                        <option value="">Elija una opcion</option>
                                        {
                                            especialidades.map((item)=>{
                                                return(
                                                    <option value={item.especialidades}>{item.especialidades}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    </div>
                                    
                                </li>
                            </ul>
                            <input className="ml-6 p-4 mr-4 w-9/12 form-buttom-send2 text-lg " type="submit" value="Buscar" />
                        </form>
                    </ModalBusqueda>
                }
                {
                    !openSearch && !showSmall &&
                    <ModalBusqueda setOpenSearch={setOpenSearch}  >
                        <form onSubmit={handleSubmit(buscarProfesional)} action="">
                            <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">
                                        <label className=" text-white form-label " htmlFor="nombre">Nombre</label>
                                        <input className="form-input text-base mb-1 " type="text" name="nombre" {...register("nombre")} />
                                    </div>
                                </li>
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">
                                        <label className=" text-white form-label text-base" htmlFor="nombre">Especialidad</label>
                                        <select className="form-input text-base " name="especialidad" id="" {...register("especialidad")}>
                                        <option value="">Elija una opcion</option>
                                        {
                                            especialidades.map((item)=>{
                                                return(
                                                    <option value={item.especialidades}>{item.especialidades}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    </div>
                                </li>
                                <input className="ml-6 p-4 mr-4 w-10/12 form-buttom-send2 text-lg " type="submit" value="Buscar" />
                            </ul>
                        </form>
                    </ModalBusqueda>
                }
                
                <Resultados>
                    {
                        !isLoad && 
                        <h1 className="text-white text-xl text-center">Cargando...</h1>
                    }
                    {
                        isLoad && busqueda==undefined && (
                            <h1 className="text-white text-center">No se encontraron resultados</h1>
                        )
                    }
                    {
                        isLoad && busqueda != undefined && busqueda.map((item)=>{
                            return(
                                <CardProfesional  perfil={item} />
                            )
                        })
                    }
                </Resultados>
            </div>
        </main>
    );
}

export default CartillaAdministrar;
