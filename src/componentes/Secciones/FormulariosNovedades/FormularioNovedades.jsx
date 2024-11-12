import {useEffect, useState, Fragment } from "react";
import {cargarNovedad } from "../../../services/apiPortal";
import { Dialog, Transition } from '@headlessui/react'
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { Apiurl } from "../../../services/apiPortal";
import { useUserStore } from "../../../store/userStore";

const FormularioNovedades = ()=>{
    const usuario= useUserStore((state)=>state.user);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today =`${yyyy}-${mm}-${dd}`

    const {register,handleSubmit,control,formState:{errors}}=useForm({
        defaultValues: {
            responsable: usuario.name,
            fecha: today,
            area: usuario.area,
        }
    });
    const [send, setSend]=useState(false);
    const [formEnviado,setFormEnviado]= useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(formEnviado==true){
            setIsOpen(true)
        }
    }, [formEnviado])

  /**
   * Cierra el modal y redirige a la pagina de inicio
   */
  function closeModal() {
    setIsOpen(false)
    location.href =window.location.protocol + "//" + window.location.host + '/'
    
  }
  function openModal() {
    setIsOpen(true)
  }
    const handleSubmitForm=async(data)=>{
        const formData= {
            ...data,
            idCreate:usuario.id,
        }

        const response= await axios.post(Apiurl+'cargarnovedad',formData)
        
        if(response != undefined){
            setFormEnviado(true)
            setSend(true)
            openModal()
        }else{
            setFormEnviado(false)
            console.log("error")
        }
    }
    return(
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                        >
                            Enviado exitoso
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                            La novedad ha sido cargada correctamente.
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-blue-100 hover:text-secondary hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            Volver a página principal
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
            <div className="  bg-white text-mygray px-5 lg:px-10 py-5  rounded-lg mt-[1rem] drop-shadow-xl w-11/12 md:w-5/6 mb-20" >
                <form action="" method="post" encType="multipart/form-data" onSubmit={handleSubmit(handleSubmitForm)}>
                    <h1 className=" mb-5 text-sm lg:text-2xl font-bold text-center">Formulario para novedades </h1>
                    <div className="lg:flex lg:justify-between">

                    <div className="flex flex-col lg:w-full">
                        <label className="  form-label " htmlFor="titulo">Titulo :</label>
                        <input {...register("titulo")} className="form-input"   type="text" name="titulo" placeholder="Ej: Capacitación en gestión de PAMI"  />
                        
                        <label className="  form-label " htmlFor="fecha">Fecha de novedad:</label>
                        <input {...register("fecha")} className="form-input  " type="date" name="fecha"  />
                        <label className="  form-label " htmlFor="responsable">Responsable : </label>
                        <input {...register("responsable")} className="form-input " type="text" name="responsable"  />
                        <label className="  form-label " htmlFor="area">Área: </label>
                        <select {...register("area")}   className="form-input "  name="area" id="" >
                            <option id="0" value="nn">Elija una opción</option>
                            <option id="1" value="prestadores">Enfermería/Otros profesionales de la salud</option>
                            <option id="2" value="sistemas">Sistemas y Tecnología</option>
                            <option id="3" value="pacientes">Atención al Cliente y Áreas Administrativas</option>
                            <option id="4" value="rrhh">Mantenimiento y servicios generales</option>
                            <option id="5" value="rrhh">Administración, Contabilidad y Finanzas</option>
                            <option id="6" value="rrhh">Recursos Humanos</option>
                            <option id="7" value="legales">Legales</option>
                            <option id="7" value="general">General</option>
                        </select>
                        <label className="  form-label " htmlFor="descripcion">Descripcion/texto: </label>
                        <textarea {...register("descripcion")} className="form-input " name="descripcion" id="" cols="10" rows="6" placeholder="El día dd del mes de julio se realizara..." >
                            
                        </textarea>
                    </div>
                    
                    </div>
                    <div>
                        <label className="form-label" htmlFor="imagen">Cargar imagen para portada:  </label>
                        <h1 className=" text-sm font-light pb-2">(recuerde que el formato de imagen debe ser 2:5)</h1>
                        <input  type="file" name="imagen" {...register("imagen")} className="block w-full text-sm text-mygray file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-mygray file:text-white hover:file:bg-primary"  />
                    </div>
                    <div className=" mt-12 mb-4">
                        <input className="form-buttom-send mr-10 " type="submit" value="Enviar" />
                        <input className="form-buttom-borrar" type="reset" value="Borrar" />
                    </div>
                </form>
            </div>
        </>
    )
};

export default FormularioNovedades;