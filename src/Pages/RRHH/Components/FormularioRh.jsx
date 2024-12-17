import { useState,useEffect, useRef, Fragment } from "react";
import { apiPortal, Apiurl } from "../../../services/apiPortal";
import { Dialog, Transition } from '@headlessui/react';
import { enviarForm } from "../../../Utilities/functions";
import { useForm } from "react-hook-form";

const FormularioRh = ()=>{

    const {register, handleSubmit, formState: { errors }} = useForm();

    const [send, setSend]=useState(false);
    const [formEnviado,setFormEnviado]= useState(false)
    const [formulario,setFormulario]=useState({
        form:{    
        },
        error:false,
        errorMsg:""
    })
    console.log(errors)
    const archivo= useRef()
    const imagen= useRef()

    let [isOpen, setIsOpen] = useState(false)
    useEffect(()=>{
        if(formEnviado==true){
            setIsOpen(true)
        }
    }, [formEnviado])
    function closeModal() {
        setIsOpen(false)
        location.href =window.location.protocol + "//" + window.location.host + '/'
    }
    const enviarFormularioCV= async data=>{
        console.log("esta es la data:", data);
        
        let url=Apiurl+apiPortal.enviarCV
        setFormulario(data)
        setFormEnviado(true)
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
                            El Cv ha sido cargado correctamente.
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
            <div className="  bg-white text-mygray px-5 lg:px-10 py-5  rounded-lg mt-[1rem] drop-shadow-xl w-11/12 md:w-5/6 mb-5" >
                <form 
                    actiom={Apiurl+apiPortal.enviarCV}
                    method="post"
                    onSuccess={()=>{
                        setFormEnviado(true)
                    }}
                    onSubmit={handleSubmit(enviarFormularioCV)}
                >
                    <h1 className=" mb-5 text-sm lg:text-2xl font-bold text-center">Formulario de curricullum vitae</h1>
                    <div className="lg:flex lg:justify-between">

                    <div className="flex flex-col lg:w-1/2">
                        <label className="  form-label " htmlFor="nombre" >Nombre:</label>
                        <input {...register("nombre",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            }) } 
                            className="form-input  " type="text" name="nombre" placeholder="Ej: Juan" />
                        {
                            errors.nombre && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.nombre.message}</span>
                            </div>
                        }
                        
                        <label className="  form-label " htmlFor="apellido">Apellido:</label>
                        <input {...register("apellido",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })}className="form-input  " type="text" name="apellido" placeholder="Ej:García" />
                        {
                            errors.apellido && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.apellido.message}</span>
                            </div>
                        }
                        <label className="  form-label " htmlFor="fecha">Fecha de nacimiento:</label>
                        <input {...register("fecha",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} className="form-input  " type="date" name="fecha"  />
                        {
                            errors.fecha && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.fecha.message}</span>
                            </div>
                        }
                        <label className="  form-label " htmlFor="Telefono">Ingrese su telefono para contactarlo: </label>
                        <input {...register("telefono",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} className="form-input " type="tel" name="telefono" />
                        {
                            errors.telefono && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.telefono.message}</span>
                            </div>
                        }
                        <label className="  form-label " htmlFor="email">Ingrese su email para contactarlo: </label>
                        <input {...register("email",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} className="form-input " type="email" name="email" />
                        {
                            errors.email && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.email.message}</span>
                            </div>
                        }
                        <label className="  form-label " htmlFor="area">Área a la que se quiere postular</label>
                        <select {...register("area",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} className="form-input "  name="area" id="">
                            <option id="0" value="nn">Elija una opción</option>
                            <option id="1" value="administracion/atencionalpublico">Administracion/atención al público</option>
                            <option id="2" value="chofer">Chofer</option>
                            <option id="3" value="anatomiPatologica">Anatomía Patológica</option>
                            <option id="4" value="enfermeria">Enfermería</option>
                            <option id="5" value="camillero">Camillero</option>
                            <option id="6" value="diagnosticoPorimagen">Diagnóstico por imágenes</option>
                            <option id="7" value="Limpieza">Limpieza</option>
                            <option id="8" value="Cocina">Cocina</option>
                            <option id="9" value="Farmacia">Farmacia</option>
                            <option id="10" value="Hemoterapia">Hemoterapia</option>
                            <option id="11" value="Mantenimiento">Mantenimiento</option>
                        </select>
                        {
                            errors.area && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.area.message}</span>
                            </div>
                        }
                        <label className="  form-label " htmlFor="experiencia">Experiencia: </label>
                        <textarea {...register("experiencia",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} className="form-input " name="experiencia" id="" cols="10" rows="6" placeholder="Ej: - Hospital San Felipe (fecha durante la que trabajo) / Area donde estuvo/ Tareas realizadas">
                            
                        </textarea>
                        {
                            errors.experiencia && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.experiencia.message}</span>
                            </div>
                        }
                    </div>
                    <div className="lg:pl-6  lg:w-1/2">
                        <div className="flex flex-col">
                            <label className="  form-label " htmlFor="primario">Primario completo:</label>
                            <div className="flex lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input {...register("primario", {
                                        required:true,
                                    })} type="radio" id="si" name="primario" value="si"/>
                                    <label htmlFor="primario"> Si</label>
                                </div>
                                <div className="flex ">
                                    <input {...register("primario")} type="radio" id="no" name="primario" value="no"/>
                                    <label htmlFor="primario"> No</label>
                                </div>
                            </div>
                            {
                            errors.primario && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.primario.message}</span>
                            </div>
                        }
                            <label className="form-label" htmlFor="institicionP">Institución: </label>
                            <input {...register("institucionP",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} className="form-input" type="text" name="institucionP" />
                            {
                            errors.institucionP && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.institucionP.message}</span>
                            </div>
                        }
                        </div>
                        <div className="flex flex-col">
                            <label className="  form-label " htmlFor="primario">Secundario Completo :</label>
                            <div className="flex lg:mb-2 lg:py-4" >
                                <div className="flex mr-5">
                                    <input {...register("secundario")} type="radio" id="si" name="secundario" value="si"/>
                                    <label htmlFor="secundario"> Si</label>
                                </div>
                                <div className="flex">
                                    <input {...register("secundario")} type="radio" id="no" name="secundario" value="no"/>
                                    <label htmlFor="secundario"> No</label>
                                </div>
                            </div>
                            <label className="form-label" htmlFor="institicionS">Institución: </label>
                            <input {...register("institucionS")} className="form-input" type="text" name="institucionS" />
                        </div>
                        <div className="flex flex-col">
                            <label className="  form-label " htmlFor="terciario">Terciario o nivel superio completo:</label>
                            <div className="flex lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input {...register("terciario")} type="radio" id="si" name="terciario" value="si"/>
                                    <label htmlFor="terciario"> Si</label>
                                </div>
                                <div className="flex">
                                    <input {...register("terciario")} type="radio" id="no" name="terciario" value="no"/>
                                    <label htmlFor="terciario"> No</label>
                                </div>
                            </div>
                            <label className="form-label" htmlFor="institicionT">Institución: </label>
                            <input {...register("institucionT")} className="form-input" type="text" name="institucionT" />
                            <label className="form-label" htmlFor="titulo">Titulo: </label>
                            <input {...register("titulo")} className="form-input" type="text" name="titulo" />
                        </div>
                    </div>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="archivo">Cargar archivo de CV personal  </label>
                        <input {...register("archivo",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })}  type="file" name="archivo"  />
                        {
                            errors.archivo && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.archivo.message}</span>
                            </div>
                        }
                    </div>
                    <div>
                        <label className="form-label" htmlFor="imagen">Cargar foto de perfil</label>
                        <input {...register("imagen",{
                                required:{
                                    value:true,
                                    message:"Este campo es requerido"
                                }
                            })} type="file" name="imagen" />
                        {
                            errors.imagen && 
                            <div class="text-sm -mt-3 bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                                <span class="block sm:inline">{errors.imagen.message}</span>
                            </div>
                        }
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

export default FormularioRh;