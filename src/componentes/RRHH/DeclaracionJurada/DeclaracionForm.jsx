import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Apiurl } from "../../../services/apiPortal";
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'

const DeclaracionForm = ()=>{
    const [formEnviado,setFormEnviado]= useState(false)
    const [formulario,setFormulario]=useState({
        form:{
        },
        error:false,
        errorMsg:""
    })

    let [isOpen, setIsOpen] = useState(false)
  useEffect(()=>{
    if(formEnviado==true){
        setIsOpen(true)
    }

  }, [formEnviado])

  function closeModal() {
    setIsOpen(false)
    location.href =window.location.protocol + "//" + window.location.host + '/rrhh'
    
  }

  function openModal() {
    setIsOpen(true)
  }


    const handleSubmit=e=>{
        e.preventDefault();
        

        let url= Apiurl + "rrhh/declaraciones";
        axios.post(url,formulario)
        .then(response=> {
            if(response != undefined){
                setFormEnviado(true)
            }
        })
    }
    const handleChange= async e=>{
        await setFormulario({
            form:{
                ...formulario.form,
                [e.target.name]: e.target.value
            }
        })
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
                      Su declaracion ha sido enviada correctamente, le llegara un mail con los datos de la misma.
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
            <div className=" bg-white text-mygray px-5 lg:px-10 py-5  rounded-lg mt-[1rem] drop-shadow-xl w-11/12 md:w-5/6 mb-5" >
                <form onSubmit={handleSubmit} action="#">
                    <h1 className=" mb-5 text-xl lg:text-3xl font-bold text-center">Declaracion Jurada</h1>
                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">Datos personales</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="apellido">Apellido:</label>
                            <input className="form-input  " type="text" name="apellido" placeholder="Ej:García" onChange={handleChange} />
                        </div>
                        <div className=" p-3">
                            <label className=" just form-label " htmlFor="nombre">Nombre:</label>
                            <input className="form-input   " type="text" name="nombre" placeholder="Ej: Juan"  onChange={handleChange} />
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="domicilio">Domicilio:</label>
                            <input className="form-input  " type="text" name="domicilio" placeholder="Ej: Roca 234" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="localidad">Localidad:</label>
                            <input className="form-input  " type="text" name="localidad" placeholder="Ej: San Nicolas" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="provincia">Provincia:</label>
                            <input className="form-input  " type="text" name="provincia" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="fecha">Fecha de nacimiento:</label>
                            <input className="form-input  " type="date" name="fecha"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="LNacimiento">Lugar de nacimiento:</label>
                            <input className="form-input  " type="text" name="LNacimiento" placeholder="Ej: San Nicolas" onChange={handleChange}/>
                        </div>
                      
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="dni">Documento:</label>
                            <input className="form-input  " type="text" name="dni" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="cuil">CUIL:</label>
                            <input className="form-input  " type="text" name="cuil" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="telefono">Teléfono: </label>
                            <input className="form-input " type="text" name="telefono" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="email">Correo Electrónico: </label>
                            <input className="form-input " type="email" name="email" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="estadoCivil">Estado Civil:</label>
                            <input className="form-input  " type="text" name="estadoCivil" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>

                    </div>

                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">Antecedentes Familiares</h1>
                    <h1 className=" mb-5 text-sm lg:text-lg font-light text-center">Cónyuge</h1>

                    <div className="grid grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="conyugueNyA">Apellido y nombres:</label>
                            <input className="form-input  " type="text" name="conyugueNyA" placeholder="Ingrese sus datos" onChange={handleChange}/>
                        </div>
                        
                        
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="conyugueNacimiento">Fecha de nacimiento:</label>
                            <input className="form-input  " type="date" name="conyugueNacimiento"  onChange={handleChange}/>
                        </div>
                        
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="conyugueDNI">DNI:</label>
                            <input className="form-input  " type="text" name="conyugueDNI" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="conyugueACargo">A cargo:</label>
                            <div className="flex lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input type="radio" id="si" name="conyugueACargo" value="si"onChange={handleChange}/>
                                    <label htmlFor="conyugueACargo"> Si</label>
                                </div>
                                <div className="flex ">
                                    <input type="radio" id="no" name="conyugueACargoN" value="no"onChange={handleChange}/>
                                    <label htmlFor="conyugueACargoN"> No</label>
                                </div>
                            </div>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="conyugueV">Vive: </label>
                            <div className="flex lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input type="radio" id="si" name="conyugueV" value="si"onChange={handleChange}/>
                                    <label htmlFor="conyugueV"> Si</label>
                                </div>
                                <div className="flex ">
                                    <input type="radio" id="no" name="conyugueV" value="no"onChange={handleChange}/>
                                    <label htmlFor="conyugueV"> No</label>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    
                    <h1 className="  text-lg lg:text-2xl font-bold text-center">Hijos</h1>


                    <div>
                        <h1 className="  text-sm lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor='hijoNyA1' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA1' placeholder="Ej:García" onChange={handleChange} />
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoNacimiento1">Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name="hijoNacimiento1"  onChange={handleChange} />
                            </div>
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoDNI1">DNI:</label>
                                <input className="form-input  " type="text" name="hijoDNI1" placeholder="ingrese los datos" onChange={handleChange} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoACargo1">A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoACargo1" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoACargo"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoACargo1" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoACargo1"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoV1">Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoV1" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoV1"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoV1" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoV1"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>


                    <div>
                        <h1 className="  text-sm lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor='hijoNyA2' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' placeholder="Ej:García" onChange={handleChange} />
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoNacimiento2">Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name="hijoNacimiento2"  onChange={handleChange} />
                            </div>
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoDNI2">DNI:</label>
                                <input className="form-input  " type="text" name="hijoDNI2" placeholder="ingrese los datos" onChange={handleChange} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoACargo2">A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoACargo2" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoACargo"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoACargo2" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoACargo2"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoV2">Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoV2" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoV2"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoV2" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoV2"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>

                    <div>
                        <h1 className="  text-sm lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor='hijoNyA3' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA3' placeholder="Ej:García" onChange={handleChange} />
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoNacimiento3">Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name="hijoNacimiento3"  onChange={handleChange} />
                            </div>
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoDNI3">DNI:</label>
                                <input className="form-input  " type="text" name="hijoDNI3" placeholder="ingrese los datos" onChange={handleChange} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoACargo3">A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoACargo3" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoACargo"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoACargo3" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoACargo3"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoV3">Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoV3" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoV3"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoV3" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoV3"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>

                    <div>
                        <h1 className="  text-sm lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor='hijoNyA4' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA4' placeholder="Ej:García" onChange={handleChange} />
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoNacimiento4">Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name="hijoNacimiento4"  onChange={handleChange} />
                            </div>
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoDNI4">DNI:</label>
                                <input className="form-input  " type="text" name="hijoDNI4" placeholder="ingrese los datos" onChange={handleChange} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoACargo4">A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoACargo4" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoACargo"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoACargo4" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoACargo4"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoV4">Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoV4" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoV4"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoV4" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoV4"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>

                    <div>
                        <h1 className="  text-sm lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-5 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor='hijoNyA5' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA5' placeholder="Ej:García" onChange={handleChange} />
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoNacimiento5">Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name="hijoNacimiento5"  onChange={handleChange} />
                            </div>
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoDNI5">DNI:</label>
                                <input className="form-input  " type="text" name="hijoDNI5" placeholder="ingrese los datos" onChange={handleChange} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoACargo5">A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoACargo5" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoACargo"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoACargo5" value="no"onChange={handleChange} />
                                        <label htmlFor="hijoACargo5"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="hijoV5">Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="hijoV5" value="si"onChange={handleChange} />
                                        <label htmlFor="hijoV5"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="hijoV5" value="no"onSubmit={handleChange} />
                                        <label htmlFor="hijoV5"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>



                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">Estudios cursados</h1>

                    <div className="lg:grid lg:grid-cols-3   lg:w-full justify-between">
                        <div className="flex flex-col">
                            <label className="  form-label " htmlFor="primario">Primario completo:</label>
                            <div className="flex lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input type="radio" id="si" name="primario" value="si"onChange={handleChange}/>
                                    <label htmlFor="primario"> Si</label>
                                </div>
                                <div className="flex ">
                                    <input type="radio" id="no" name="primario" value="no"onChange={handleChange}/>
                                    <label htmlFor="primario"> No</label>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col">
                            <label className="  form-label " htmlFor="secundario">Secundario Completo :</label>
                            <div className="flex lg:mb-2 lg:py-4" >
                                <div className="flex  mr-5">
                                    <input type="radio" id="si" name="secundario" value="si"onChange={handleChange}/>
                                    <label htmlFor="secundario"> Si</label>
                                </div>
                                <div className="flex">
                                    <input type="radio" id="no" name="secundario" value="no"onChange={handleChange}/>
                                    <label htmlFor="secundario"> No</label>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col">
                            <label className="  form-label " htmlFor="superior">Terciario o nivel superio completo:</label>
                            <div className="flex lg:mb-2 lg:py-4">
                                <div className="flex mr-5">
                                    <input type="radio" id="si" name="superior" value="si" onChange={handleChange}/>
                                    <label htmlFor="primario"> Si</label>
                                </div>
                                <div className="flex">
                                    <input type="radio" id="no" name="superior" value="no" onChange={handleChange}/>
                                    <label htmlFor="primario"> No</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                        <div className="flex flex-col">
                            
                            <label className="form-label" htmlFor="institicion-t">Titulo: </label>
                            <input className="form-input" type="text" name="titulo" onChange={handleChange}/>
                            <label className="form-label" htmlFor="curso1">Curso 1: </label>
                            <input className="form-input" type="text" name="curso1" onChange={handleChange}/>
                            <label className="form-label" htmlFor="curso2">Curso 2: </label>
                            <input className="form-input" type="text" name="curso2" onChange={handleChange}/>
                        </div>
                    
                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">Antecedentes laborales</h1>
                    <h1 className="  text-sm lg:text-lg font-light text-center">Empresa 1</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALempresa1">Empresa:</label>
                            <input className="form-input  " type="text" name="ALempresa1"  onChange={handleChange}/>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALdesde1">Desde:</label>
                                <input className="form-input   " type="date" name="ALdesde1" onChange={handleChange}/>
                            </div>
                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALhasta1">Hasta:</label>
                                <input className="form-input   " type="date" name="ALhasta1" onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALtarea1">Tareas Realizadas:</label>
                            <input className="form-input  " type="text" name="ALtarea1"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALegreso1">Motivo de egreso:</label>
                            <input className="form-input  " type="text" name="ALegreso1"  onChange={handleChange}/>
                        </div>
                        
                        

                    </div>

                    <h1 className="  text-sm lg:text-lg font-light text-center">Empresa 2</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALempresa2">Empresa:</label>
                            <input className="form-input  " type="text" name="ALempresa2"  onChange={handleChange}/>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALdesde2">Desde:</label>
                                <input className="form-input   " type="date" name="ALdesde2" onChange={handleChange}/>
                            </div>
                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALhasta2">Hasta:</label>
                                <input className="form-input   " type="date" name="ALhasta2" onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALtarea2">Tareas Realizadas:</label>
                            <input className="form-input  " type="text" name="ALtarea2"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALegreso2">Motivo de egreso:</label>
                            <input className="form-input  " type="text" name="ALegreso2"  onChange={handleChange}/>
                        </div>
                        



                        

                    </div>
                        <h1 className="  text-sm lg:text-lg font-light text-center">Empresa 3</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALempresa3">Empresa:</label>
                            <input className="form-input  " type="text" name="ALempresa3"  onChange={handleChange}/>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALdesde3">Desde:</label>
                                <input className="form-input   " type="date" name="ALdesde3" onChange={handleChange}/>
                            </div>
                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALhasta3">Hasta:</label>
                                <input className="form-input   " type="date" name="ALhasta3" onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALtarea3">Tareas Realizadas:</label>
                            <input className="form-input  " type="text" name="ALtarea3"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALegreso3">Motivo de egreso:</label>
                            <input className="form-input  " type="text" name="ALegreso3"  onChange={handleChange}/>
                        </div>
                        
                        

                    </div>

                    <h1 className="  text-sm lg:text-lg font-light text-center">Empresa 4</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALempresa4">Empresa:</label>
                            <input className="form-input  " type="text" name="ALempresa4"  onChange={handleChange}/>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2">

                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALdesde4">Desde:</label>
                                <input className="form-input   " type="date" name="ALdesde4" onChange={handleChange}/>
                            </div>
                            <div className=" p-3">
                                <label className=" just form-label " htmlFor="ALhasta4">Hasta:</label>
                                <input className="form-input   " type="date" name="ALhasta4" onChange={handleChange}/>
                            </div>
                        </div>
                        
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALtarea4">Tareas Realizadas:</label>
                            <input className="form-input  " type="text" name="ALtarea4"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="ALegreso4">Motivo de egreso:</label>
                            <input className="form-input  " type="text" name="ALegreso4"  onChange={handleChange}/>
                        </div>
                        
                        

                    </div>


                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">Declaración Jurada de Domicilio</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDcalle">Calle:</label>
                            <input className="form-input  " type="text" name="DJDcalle" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className=" just form-label " htmlFor="DJDnumero">N°:</label>
                            <input className="form-input   " type="text" name="DJDnumero" placeholder="Ej: Juan" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDpiso">Piso:</label>
                            <input className="form-input  " type="text" name="DJDpiso" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDdto">Dto:</label>
                            <input className="form-input  " type="text" name="DJDdto" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDcp">Codigo Postal:</label>
                            <input className="form-input  " type="text" name="DJDcp" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDlocalidad">Localidad:</label>
                            <input className="form-input  " type="text" name="DJDlocalidad" placeholder="Ej: San Nicolas" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDprovincia">Provincia:</label>
                            <input className="form-input  " type="text" name="DJDprovincia" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="DJDtelefono">Telefo:</label>
                            <input className="form-input  " type="phone" name="DJDtelefono"  onChange={handleChange}/>
                        </div>
                        

                    </div>

                    <div className="lg:flex lg:justify-between">

                    </div>
                    {/* <div>
                        <label className="form-label" htmlFor="firma">Cargar archivo de CV personal  </label>
                        <input type="file" name="firma" />
                    </div> */}
                    <div className=" mt-12 mb-4">
                        <input className="form-buttom-send mr-10 " type="submit" value="Enviar" />
                        <input className="form-buttom-borrar" type="reset" value="Borrar" />
                    </div>
                </form>
            </div>
        </>
    )
};

export default DeclaracionForm;
