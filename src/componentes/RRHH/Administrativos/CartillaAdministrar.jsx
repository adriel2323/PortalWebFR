import Secciones from "../../navBar/Secciones";
import ModalBusqueda from "../PanelBusqueda/ModalBusqueda";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { Apiurl } from "../../../services/apiPortal";
import Resultados from "../PanelBusqueda/Resultados";
import { useAppStore } from "../../../store/appStore";
import CardProfesional from "./components/cardProfesional";

const CartillaAdministrar = ({area}) => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const openSearch=useAppStore((state)=>state.openSearch)
    const setOpenSearch=useAppStore((state)=>state.setOpenSearch) 
    const [especialidades,setEspecialidades]=useState([])
    const [busqueda,setBusqueda]=useState([])
    const showSmall=useAppStore((state)=>state.showSmall)

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
        })
        
      },[])

    return (
        <main>
            <Secciones usuarios={area} />
            <div className="flex flex-row">
                {
                    openSearch && showSmall &&
                    <ModalBusqueda setOpenSearch={setOpenSearch}  >
                        <form onSubmit={handleSubmit} action="">
                            <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">

                                        <label className=" text-white form-label " htmlFor="nombre">Nombre</label>
                                        <input className="form-input text-base mb-1 " type="text" name="nombre" {...register("nombre")} />
                                    </div>
                                </li>
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">
                                        <label className=" text-white form-label text-base" htmlFor="nombre">Nombre</label>
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
                        </form>
                    </ModalBusqueda>
                }
                {
                    !openSearch && !showSmall &&
                    <ModalBusqueda setOpenSearch={setOpenSearch}  >
                        <form onSubmit={handleSubmit} action="">
                            <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">

                                        <label className=" text-white form-label " htmlFor="nombre">Nombre</label>
                                        <input className="form-input text-base mb-1 " type="text" name="nombre" {...register("nombre")} />
                                    </div>
                                </li>
                                <li className="buttomList-item pr-2">
                                    <div className=" w-11/12">
                                        <label className=" text-white form-label text-base" htmlFor="nombre">Nombre</label>
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
                        </form>
                    </ModalBusqueda>
                }
                
                <Resultados>
                    {
                        busqueda.map((item)=>{
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
