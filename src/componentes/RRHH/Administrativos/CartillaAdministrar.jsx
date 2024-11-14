import Secciones from "../../navBar/Secciones";
import ModalBusqueda from "../PanelBusqueda/ModalBusqueda";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { Apiurl } from "../../../services/apiPortal";

const CartillaAdministrar = ({area}) => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [openSearch,setOpenSearch]=useState(false)  

    useEffect(()=>{
        let lista=[]
        fetch(Apiurl+"clinica/personal/lista/especialidades")
        .then(response=>response.json())
        .then(response=>{
          for(let i=0;i<response.especialidades.length;i++){
            lista.push(response.especialidades[i]);
          }
          setEspecialidadesCompletas(lista)
        })
        .catch(error=>console.log(error))
        
      },[])

    return (
        <>
            <Secciones usuarios={area} />
            <ModalBusqueda setOpenSearch={setOpenSearch}>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <div className="w-11/12">
                            <label className=" mb-2 text-white"  htmlFor="nombre">Nombre</label>
                            <input className="form-input text-base mb-1 " type="text" name="nombre" {...register("nombre")} />
                        </div>
                        <div className="w-11/12">
                            <label className=" mb-2 text-white"  htmlFor="especialidad">Especialidad</label>
                            <select name="especialidad" id="" {...register("especialidad")}>
                                <option value="">Elija una opcion</option>
                            </select>
                            
                        </div>
                    </div>
                </form>
            </ModalBusqueda>
        </>
    );
}

export default CartillaAdministrar;
