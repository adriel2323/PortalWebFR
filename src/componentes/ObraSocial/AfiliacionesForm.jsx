import { useState, useEffect, Fragment } from "react";
import React from "react";
import { Apiurl } from "../../services/apiPortal";
import axios from "axios";
import { Dialog, Transition } from '@headlessui/react'

// const formularioTipo = {
//     filial: "", 
//     alta: "",
//     fecha: "",
//     alta: "",
//     apellidoTitular: "",
//     calleEmpresaFiscal: "",
//     calleEmpresaLaboral: "",
//     calleTitular: "",
//     codFamiliar1: "",
//     cpEmpresa: "",
//     cpEmpresaLaboral: "",
//     cpTitular: "",
//     cuil: "",
//     cuitEmpresa: "",
//     deptoEmpresaFiscal: "",
//     deptoEmpresaLaboral: "",
//     deptoTitular: "",
//     discapacidad: "",
//     dniFamiliar1: "",
//     dvFamiliar1: "",
//     estadoCivil: "",
//     fecha: "",
//     fechaAlta: "",
//     fechaInicio: "",
//     filial: "",
//     hijoNyA2: "",
//     localidadEmpresaFiscal: "",
//     localidadEmpresaLaboral: "",
//     localidadTitular: "",
//     nacimientoFamiliar1: "",
//     nacionalidad: "",
//     nombreTitular: "",
//     nroEmpresaFiscal: "",
//     nroEmpresaLaboral: "",
//     nroTitular: "",
//     numeroDNI: "",
//     opcion: "",
//     parentescoFamiliar1: "",
//     pisoEmpresaFiscal: "",
//     pisoEmpresaLaboral:"",
//     pisoTitular:"",
//     provinciaEmpresa:"",
//     provinciaEmpresaLaboral: "",
//     provinciaTitular: "",
//     razonEmpresa: "",
//     sexo: "",
//     telefonoCelular: "",
//     telefonoLaboral: "",
//     telefonoOtro: "",
//     telefonoParticular: "",
// }

const DeclaracionForm = ()=>{

    const [formEnviado,setFormEnviado]= useState(false)
    const [formulario,setFormulario]=useState({
        form:{},
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
    location.href =window.location.protocol + "//" + window.location.host + '/obrasocial'
    
  }

  function openModal() {
    setIsOpen(true)
  }


    const handleSubmit=e=>{
        e.preventDefault();
        console.log(formulario);
        // let url= Apiurl + "obrasocial/declaraciones";
        // axios.post(url,formulario)
        // .then(response=> {
        //     if(response != undefined){
        //         setFormEnviado(true)
        //     }
        // })
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
                    <h1 className=" mb-5 text-xl lg:text-3xl font-bold text-center">Declaración jurada del trabajador y su grupo familiar adheridos a la obbra social de la U.O.M.R.A.</h1>
                    <div className="border-y-2 pb-10 mt-10 grid grid-cols-1 lg:grid-cols-3 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="filial">Seccional/Filial:</label>
                            <input className="form-input  " type="text" name="filial"  onChange={handleChange} />
                        </div>
                        <section className="flex flex-row justify-between content-center ">
                            <div className=" p-3 content-center">
                                    <div className=" mr-5t content-center ">
                                        <label className="  form-label pr-2 " htmlFor="alta">Alta:</label>
                                        <input type="radio" id="si" name="alta" value="si"onChange={handleChange}/>
                                    </div>
                            </div>
                            <div className=" p-3">
                                    <div className=" mr-5t content-center ">
                                        <label className="  form-label pr-2 " htmlFor="baja">Baja:</label>
                                        <input className=" justify-center" type="radio" id="si" name="baja" value="si"onChange={handleChange}/>
                                    </div>
                            </div>
                            <div className=" p-3">
                                    <div className=" mr-5t content-center ">
                                        <label className="  form-label pr-2 " htmlFor="alta">Modificación:</label>
                                        <input type="radio" id="si" name="modificacion" value="si"onChange={handleChange}/>
                                    </div>
                            </div>
                        </section>
                       
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="fecha">Fecha:</label>
                            <input className="form-input  " type="date" name="fecha"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="fechaInicio">Fecha de inicio Rel. Lab. :</label>
                            <input className="form-input  " type="date" name="fechaInicio"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="fechaAlta">Fecha de Alta O.S. :</label>
                            <input className="form-input  " type="date" name="fechaAlta"  onChange={handleChange}/>
                        </div>
                        <div className=" grid grid-cols-3">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="discapacidad">Discapacidad :</label>
                                <select onChange={handleChange} className="form-input "  name="discapacidad" id="">
                                    <option id="0" value="">Elija una opción</option>
                                    <option id="1" value="si">SI
</option>
                                    <option id="2" value="no">NO
</option>
                            
                                </select>
                                
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="sexo">Sexo :</label>
                                <select onChange={handleChange} className="form-input "  name="sexo" id="">
                                    <option id="0" value="">Elija una opción</option>
                                    <option id="1" value="femenino">F
</option>
                                    <option id="2" value="masculino">M
</option>
                            
                                </select>
                            </div>
                            <div className="flex flex-col jus p-3">
                                <label className="  form-label pr-10 " htmlFor="opcion">Opción:</label>
                                <div className="flex justify-between lg:mb-2">
                                    <div className=" mr-5">
                                        <label className="flex flex-row " htmlFor="opcion"> Si</label>
                                        <input type="radio" id="si" name="opcion" value="si"onChange={handleChange}/>
                                    </div>
                                    <div className=" mr-5">
                                        <label className="flex flex-row " htmlFor="opcion"> No</label>
                                        <input type="radio" id="no" name="opcion" value="no"onChange={handleChange}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                      
                        

                    </div>
                    <h1 className="pb-10 mt-10 mb-5 text-lg lg:text-3xl font-medium text-center">Datos del titular</h1>

                    {/* Primer seccion */}
                    <div className="py-5 mt-4 border-b-2 grid grid-cols-1 lg:grid-cols-3 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="cuil">CUIL:</label>
                            <input className="form-input  " type="text" name="cuil" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="apellidoTitular">Apellido:</label>
                            <input className="form-input  " type="text" name="apellidoTitular" placeholder="Ej:García" onChange={handleChange} />
                        </div>
                        <div className=" p-3">
                            <label className=" just form-label " htmlFor="nombreTitular">Nombre:</label>
                            <input className="form-input   " type="text" name="nombreTitular" placeholder="Ej: Juan"  onChange={handleChange} />
                        </div>
                        <div>
                            <div className=" pt-3">
                                <label className="  form-label " htmlFor="dni">Documento:</label>
                            </div>
                            <div className="flex flex-row px-3">
                                <label className="  form-label mr-2" htmlFor="tipoDNI">Tipo:</label>
                                <select onChange={handleChange} className="form-input mr-5 "  name="sexo" id="">
                                    <option id="0" value="">Elija una opción</option>
                                    <option id="1" value="LE">LE
</option>
                                    <option id="2" value="LC">LC
</option>
                                    <option id="3" value="DNI">DNI
</option>
                                    <option id="4" value="DU">DU
</option>
                                    <option id="5" value="CI">CI
</option>
                            
                                </select>
                                <label className="  form-label mr-2" htmlFor="numeroDNI">Número:</label>
                                <input className="form-input mr-2 " type="text" name="numeroDNI" placeholder="ingrese los datos" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="fecha">Fecha de nacimiento:</label>
                            <input className="form-input  " type="date" name="fecha"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="estadoCivil">Estado Civil:</label>
                            <input className="form-input  " type="text" name="estadoCivil" placeholder="ingrese los datos" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="nacionalidad">Nacionalidad:</label>
                            <input className="form-input  " type="text" name="nacionalidad"  onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="calleTitular">Calle:</label>
                            <input className="form-input  " type="text" name="calleTitular"  onChange={handleChange}/>
                        </div>
                        <div className="flex flex-row px-3">
                            <div className=" p-3">

                                <label className="  form-label mr-2"htmlFor="nroTitular">Nro:</label>
                                <input className=" form-input  mr-2" type="text" name="nroTitular"  onChange={handleChange}/>
                            </div>
                            <div className=" p-3">

                                <label className="  form-label mr-2" htmlFor="pisoTitular">Piso:</label>
                                <input className="form-input mr-2 " type="text" name="pisoTitular"  onChange={handleChange}/>
                            </div>
                            <div className=" p-3">

                                <label className="  form-label " htmlFor="deptoTitular">Depto:</label>
                                <input className="form-input  " type="text" name="deptoTitular" onChange={handleChange}/>
                            </div>
                        </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="localidadTitular">Localidad:</label>
                                <input className="form-input  " type="text" name="localidadTitular" placeholder="Ej: San Nicolas" onChange={handleChange}/>
                            </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="cpTitular">Código Postal:</label>
                            <input className="form-input  " type="text" name="cpTitular" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="provinciaTitular">Provincia:</label>
                            <input className="form-input  " type="text" name="provinciaTitular" onChange={handleChange}/>
                        </div>
                    </div>

                    {/* Segunda seccion */}
                    <h1 className=" py-5 text-lg lg:text-2xl font-bold text-center">Datos de la empresa</h1>
                    <div className="grid lg:grid-cols-3 lg:w-full">
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="cuitEmpresa">CUIT:</label>
                            <input className="form-input  " type="text" name="cuitEmpresa" placeholder="Ingrese sus datos" onChange={handleChange}/>
                        </div>
                        <div className="lg col-span-2 p-3">
                            <label className="  form-label " htmlFor="razonEmpresa">Razón Social:</label>
                            <input className="form-input  " type="text" name="razonEmpresa" placeholder="Ingrese sus datos" onChange={handleChange}/>
                        </div>
                    </div>
                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">DOMICILIO FISCAL</h1>
                    <div className="grid  lg:grid-cols-3 lg:w-full">
                        <div className=" lg:col-span-2 p-3">
                            <label className="  form-label " htmlFor="calleEmpresaFiscal">Calle:</label>
                            <input className="form-input  " type="text" name="calleEmpresaFiscal" placeholder="Ingrese sus datos" onChange={handleChange}/>
                        </div>
                        <div className="flex flex-row px-3">
                            <div className=" p-3">

                                <label className="  form-label mr-2"htmlFor="nroEmpresaFiscal">Nro:</label>
                                <input className=" form-input  mr-2" type="text" name="nroEmpresaFiscal"  onChange={handleChange}/>
                            </div>
                            <div className=" p-3">

                                <label className="  form-label mr-2" htmlFor="pisoEmpresaFiscal">Piso:</label>
                                <input className="form-input mr-2 " type="text" name="pisoEmpresaFiscal"  onChange={handleChange}/>
                            </div>
                            <div className=" p-3">

                                <label className="  form-label " htmlFor="deptoEmpresaFiscal">Depto:</label>
                                <input className="form-input  " type="text" name="deptoEmpresaFiscal" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className=" p-3">
                                <label className="  form-label " htmlFor="localidadEmpresaFiscal">Localidad:</label>
                                <input className="form-input  " type="text" name="localidadEmpresaFiscal" placeholder="Ej: San Nicolas" onChange={handleChange}/>
                            </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="cpEmpresa">Código Postal:</label>
                            <input className="form-input  " type="text" name="cpEmpresa" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="provinciaEmpresa">Provincia:</label>
                            <input className="form-input  " type="text" name="provinciaEmpresa" onChange={handleChange}/>
                        </div>
                    </div>
                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">DOMICILIO LABORAL</h1>
                    <div className="grid  lg:grid-cols-3 lg:w-full">
                        <div className=" lg:col-span-2 p-3">
                            <label className="  form-label " htmlFor="calleEmpresaLaboral">Calle:</label>
                            <input className="form-input  " type="text" name="calleEmpresaLaboral" placeholder="Ingrese sus datos" onChange={handleChange}/>
                        </div>
                        <div className="flex flex-row px-3">
                            <div className=" p-3">

                                <label className="  form-label mr-2"htmlFor="nroEmpresaLaboral">Nro:</label>
                                <input className=" form-input  mr-2" type="text" name="nroEmpresaLaboral"  onChange={handleChange}/>
                            </div>
                            <div className=" p-3">

                                <label className="  form-label mr-2" htmlFor="pisoEmpresaLaboral">Piso:</label>
                                <input className="form-input mr-2 " type="text" name="pisoEmpresaLaboral"  onChange={handleChange}/>
                            </div>
                            <div className=" p-3">

                                <label className="  form-label " htmlFor="deptoEmpresaLaboral">Depto:</label>
                                <input className="form-input  " type="text" name="deptoEmpresaLaboral" onChange={handleChange}/>
                            </div>
                        </div>
                        <div className=" p-3">
                                <label className="  form-label " htmlFor="localidadEmpresaLaboral">Localidad:</label>
                                <input className="form-input  " type="text" name="localidadEmpresaLaboral" placeholder="Ej: San Nicolas" onChange={handleChange}/>
                            </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="cpEmpresaLaboral">Código Postal:</label>
                            <input className="form-input  " type="text" name="cpEmpresaLaboral" onChange={handleChange}/>
                        </div>
                        <div className=" p-3">
                            <label className="  form-label " htmlFor="provinciaEmpresaLaboral">Provincia:</label>
                            <input className="form-input  " type="text" name="provinciaEmpresaLaboral" onChange={handleChange}/>
                        </div>
                    </div>
                    {/* Segunda seccion */}
                    <h1 className=" border-t-2 pt-5  text-lg lg:text-2xl font-bold text-center">Grupo Familiar</h1>

                    <div className="grid  lg:grid-cols-3 lg:w-full">

                        <div>
                            <h1 className="  text-lg lg:text-base font-bold text-center">CUIL</h1>
                            <div className="grid grid-cols-3  lg:w-full">
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor='codFamiliar1' >Cód.:</label>
                                    <input className="form-input  " type="number" name='codFamiliar1' onChange={handleChange} />
                                </div>
                                <div className="p-3">
                                    <label className="  form-label text-xs " htmlFor="dniFamiliar1">DNI:</label>
                                    <input className="form-input  " type="text" name="dniFamiliar1" placeholder="ingrese los datos" onChange={handleChange} />
                                </div>
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor="dvFamiliar1">DV:</label>
                                    <input className="form-input  " type="number" name="dvFamiliar1"  onChange={handleChange} />
                                </div>
                            </div>        
                        </div>
                        <div className=" p-3 self-end ">
                                <label className="  form-label " htmlFor='nombreFamiliar1' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' onChange={handleChange} />
                        </div>
                            
                            <div className="flex self-end p-3">

                                <div className="pr-6">
                                    <label className="  form-label  " htmlFor="nacimientoFamiliar1">Fecha de nacimiento:</label>
                                    <input className="form-input  " type="date" name="nacimientoFamiliar1"  onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <label className="  form-label " htmlFor='parentescoFamiliar1' >Parentesco:</label>
                                    <input className="form-input  " type="text" name='parentescoFamiliar1' placeholder="Ej:Hijo" onChange={handleChange} />
                                </div>
                            </div>
                    </div>
                    <div className="grid  lg:grid-cols-3 lg:w-full">

                        <div>
                            <h1 className="  text-lg lg:text-base font-bold text-center">CUIL</h1>
                            <div className="grid grid-cols-3  lg:w-full">
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor='codFamiliar2' >Cód.:</label>
                                    <input className="form-input  " type="number" name='codFamiliar2' onChange={handleChange} />
                                </div>
                                <div className="p-3">
                                    <label className="  form-label text-xs " htmlFor="dniFamiliar2">DNI:</label>
                                    <input className="form-input  " type="text" name="dniFamiliar2" placeholder="ingrese los datos" onChange={handleChange} />
                                </div>
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor="dvFamiliar2">DV:</label>
                                    <input className="form-input  " type="number" name="dvFamiliar2"  onChange={handleChange} />
                                </div>
                            </div>        
                        </div>
                        <div className=" p-3 self-end ">
                                <label className="  form-label " htmlFor='nombreFamiliar2' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' onChange={handleChange} />
                        </div>
                            
                            <div className="flex self-end p-3">

                                <div className="pr-6">
                                    <label className="  form-label  " htmlFor="nacimientoFamiliar2">Fecha de nacimiento:</label>
                                    <input className="form-input  " type="date" name="nacimientoFamiliar2"  onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <label className="  form-label " htmlFor='parentescoFamiliar2' >Parentesco:</label>
                                    <input className="form-input  " type="text" name='parentescoFamiliar2' placeholder="Ej:Hijo" onChange={handleChange} />
                                </div>
                            </div>
                    </div>
                    <div className="grid  lg:grid-cols-3 lg:w-full">

                        <div>
                            <h1 className="  text-lg lg:text-base font-bold text-center">CUIL</h1>
                            <div className="grid grid-cols-3  lg:w-full">
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor='codFamiliar3' >Cód.:</label>
                                    <input className="form-input  " type="number" name='codFamiliar3' onChange={handleChange} />
                                </div>
                                <div className="p-3">
                                    <label className="  form-label text-xs " htmlFor="dniFamiliar3">DNI:</label>
                                    <input className="form-input  " type="text" name="dniFamiliar3" placeholder="ingrese los datos" onChange={handleChange} />
                                </div>
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor="dvFamiliar3">DV:</label>
                                    <input className="form-input  " type="number" name="dvFamiliar3"  onChange={handleChange} />
                                </div>
                            </div>        
                        </div>
                        <div className=" p-3 self-end ">
                                <label className="  form-label " htmlFor='nombreFamiliar3' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' onChange={handleChange} />
                        </div>
                            
                            <div className="flex self-end p-3">

                                <div className="pr-6">
                                    <label className="  form-label  " htmlFor="nacimientoFamiliar3">Fecha de nacimiento:</label>
                                    <input className="form-input  " type="date" name="nacimientoFamiliar3"  onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <label className="  form-label " htmlFor='parentescoFamiliar3' >Parentesco:</label>
                                    <input className="form-input  " type="text" name='parentescoFamiliar3' placeholder="Ej:Hijo" onChange={handleChange} />
                                </div>
                            </div>
                    </div>
                    <div className="grid  lg:grid-cols-3 lg:w-full">

                        <div>
                            <h1 className="  text-lg lg:text-base font-bold text-center">CUIL</h1>
                            <div className="grid grid-cols-3  lg:w-full">
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor='codFamiliar4' >Cód.:</label>
                                    <input className="form-input  " type="number" name='codFamiliar4' onChange={handleChange} />
                                </div>
                                <div className="p-3">
                                    <label className="  form-label text-xs " htmlFor="dniFamiliar4">DNI:</label>
                                    <input className="form-input  " type="text" name="dniFamiliar4" placeholder="ingrese los datos" onChange={handleChange} />
                                </div>
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor="dvFamiliar4">DV:</label>
                                    <input className="form-input  " type="number" name="dvFamiliar4"  onChange={handleChange} />
                                </div>
                            </div>        
                        </div>
                        <div className=" p-3 self-end ">
                                <label className="  form-label " htmlFor='nombreFamiliar4' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' onChange={handleChange} />
                        </div>
                            
                            <div className="flex self-end p-3">

                                <div className="pr-6">
                                    <label className="  form-label  " htmlFor="nacimientoFamiliar4">Fecha de nacimiento:</label>
                                    <input className="form-input  " type="date" name="nacimientoFamiliar4"  onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <label className="  form-label " htmlFor='parentescoFamiliar4' >Parentesco:</label>
                                    <input className="form-input  " type="text" name='parentescoFamiliar4' placeholder="Ej:Hijo" onChange={handleChange} />
                                </div>
                            </div>
                    </div>
                    <div className="grid  lg:grid-cols-3 lg:w-full">

                        <div>
                            <h1 className="  text-lg lg:text-base font-bold text-center">CUIL</h1>
                            <div className="grid grid-cols-3  lg:w-full">
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor='codFamiliar5' >Cód.:</label>
                                    <input className="form-input  " type="number" name='codFamiliar5' onChange={handleChange} />
                                </div>
                                <div className="p-3">
                                    <label className="  form-label text-xs " htmlFor="dniFamiliar5">DNI:</label>
                                    <input className="form-input  " type="text" name="dniFamiliar5" placeholder="ingrese los datos" onChange={handleChange} />
                                </div>
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor="dvFamiliar5">DV:</label>
                                    <input className="form-input  " type="number" name="dvFamiliar5"  onChange={handleChange} />
                                </div>
                            </div>        
                        </div>
                        <div className=" p-3 self-end ">
                                <label className="  form-label " htmlFor='nombreFamiliar5' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' onChange={handleChange} />
                        </div>
                            
                            <div className="flex self-end p-3">

                                <div className="pr-6">
                                    <label className="  form-label  " htmlFor="nacimientoFamiliar5">Fecha de nacimiento:</label>
                                    <input className="form-input  " type="date" name="nacimientoFamiliar5"  onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <label className="  form-label " htmlFor='parentescoFamiliar5' >Parentesco:</label>
                                    <input className="form-input  " type="text" name='parentescoFamiliar5' placeholder="Ej:Hijo" onChange={handleChange} />
                                </div>
                            </div>
                    </div>
                    <div className="grid  lg:grid-cols-3 lg:w-full">

                        <div>
                            <h1 className="  text-lg lg:text-base font-bold text-center">CUIL</h1>
                            <div className="grid grid-cols-3  lg:w-full">
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor='codFamiliar6' >Cód.:</label>
                                    <input className="form-input  " type="number" name='codFamiliar6' onChange={handleChange} />
                                </div>
                                <div className="p-3">
                                    <label className="  form-label text-xs " htmlFor="dniFamiliar6">DNI:</label>
                                    <input className="form-input  " type="text" name="dniFamiliar6" placeholder="ingrese los datos" onChange={handleChange} />
                                </div>
                                <div className=" p-3">
                                    <label className="  form-label text-xs " htmlFor="dvFamiliar6">DV:</label>
                                    <input className="form-input  " type="number" name="dvFamiliar6"  onChange={handleChange} />
                                </div>
                            </div>        
                        </div>
                        <div className=" p-3 self-end ">
                                <label className="  form-label " htmlFor='nombreFamiliar6' >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name='hijoNyA2' onChange={handleChange} />
                        </div>
                            
                            <div className="flex self-end p-3">

                                <div className="pr-6">
                                    <label className="  form-label  " htmlFor="nacimientoFamiliar6">Fecha de nacimiento:</label>
                                    <input className="form-input  " type="date" name="nacimientoFamiliar6"  onChange={handleChange} />
                                </div>
                                
                                <div>
                                    <label className="  form-label " htmlFor='parentescoFamiliar6' >Parentesco:</label>
                                    <input className="form-input  " type="text" name='parentescoFamiliar6' placeholder="Ej:Hijo" onChange={handleChange} />
                                </div>
                            </div>
                    </div>
                    
                    <h1 className=" mb-5 text-lg lg:text-xl font-medium text-center">Teléfonos</h1>
                        <div className="grid grid-cols-4">

                            <div className="p-3">
                            <label className="form-label" htmlFor="telefonoParticular">Particular: </label>
                            <input className="form-input" type="phone" name="telefonoParticular" onChange={handleChange}/>
                            </div>
                            <div className="p-3">
                                <label className="form-label" htmlFor="telefonoLaboral">Laboral: </label>
                                <input className="form-input" type="phone" name="telefonoLaboral" onChange={handleChange}/>
                            </div>
                            <div className="p-3">
                                <label className="form-label" htmlFor="telefonoCelular">Celular: </label>
                                <input className="form-input" type="phone" name="telefonoCelular" onChange={handleChange}/>
                            </div>
                            <div className="p-3">
                                <label className="form-label" htmlFor="telefonoOtro">Otro: </label>
                                <input className="form-input" type="phone" name="telefonoOtro" onChange={handleChange}/>
                            </div>

                        </div>
                        <p className="mt-10">* Tipo de Documento: Libreta de Enrolamiento LE Libreta Cívica LC Documento Nacional de Identidad DNI Documento Único DU Cédula de Identidad CI
                        </p>
                        <p>* Discapacidad: SI ó NO
                        </p>
                        <p>* Sexo: Femenino: F Masculino: M
                        </p>
                        <div className=" border-y-2 p-5 font-semibold mt-5">
                            <p>El presente formulario reviste el carácter de Declaración Jurada, debiendo ser completado
sin omitir ni falsear ningún dato, sujetando a los infractores a las penalidades previstas
en los Arts. 172, 292 y 293 del Código Penal para los delitos de estafa y falsificación de
documentos.</p>
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

export default DeclaracionForm;