import axios from "axios";
import { Apiurl } from "../../services/apiPortal";
import { apiPrestadores } from "../../services/apiPortal";
import { useState,useEffect, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'

const Formulario = ()=>{
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
  }

  function openModal() {
    setIsOpen(true)
  }


    const HandlerEnviarConsulta=e=>{
        e.preventDefault();
        let url= Apiurl + apiPrestadores.contacto;
        axios.post(url,formulario)
        .then(response=> {
            if(response != undefined){
                e.target.reset();
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
                      Su consulta ha sido enviada correctamente, recibira la respuesta correspondiente a su email
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
            <div className="  bg-white text-mygray px-6 lg:px-10 py-5  rounded-lg mt-[2rem] drop-shadow-xl w-3/4" >
                <form onSubmit={HandlerEnviarConsulta}>
                    <h1 className=" mb-5 text-sm lg:text-xl font-semibold text-center">Formulario de contacto</h1>
                    <div className="flex flex-col">
                        <label className="  form-label " htmlFor="name">Ingrese su nombre:</label>
                        <input className="form-input  " type="text" name="name" placeholder="Ej: Juan García" onChange={handleChange} />
                        <label className="  form-label " htmlFor="email">Ingrese su mail para contactarlo: </label>
                        <input className="form-input " type="email" name="email" placeholder="ejemplo@gmail.com" onChange={handleChange}/>
                        <label className="  form-label " htmlFor="area">Tema de la consulta</label>
                        <select onChange={handleChange} className="form-input "  name="area" id="" >
                            <option id="0" value="default">-Elija una opción-</option>
                            <option id="1" value="sistemas">Sistema</option>
                            <option id="2" value="facturacion">Facturación</option>
                            <option id="3" value="personal">Personal</option>
                            <option id="4" value="mantenimiento">Mantenimiento</option>
                        </select>
                        <label className="  form-label " htmlFor="texto">Consulta: </label>
                        <textarea className="form-input " name="texto" id="" cols="10" rows="5" placeholder="Ingrese su consulta" onChange={handleChange}>
                           
                        </textarea>
                        <div className=" flex flex-col justify-center mt-12 mb-4">
                            <input className="form-buttom-send mb-4 " type="submit" value="Enviar" />
                            <input className="form-buttom-borrar" type="reset" value="Borrar" />
                        </div>
                        
                    </div>
                </form>
            </div>
        </>
    )
};

export default Formulario;