import axios from "axios";
import { Apiurl } from "../../services/apiPortal";
import { apiPrestadores } from "../../services/apiPortal";
import { useState,useEffect, Fragment,useRef } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { enviarForm } from "../../Utilities/functions";

const Formulario = ({formularioInput, apiSend})=>{
        const formObject= formularioInput
        const [formEnviado,setFormEnviado]= useState(false)
        const [formulario,setFormulario]=useState({
        form:{
        },
        error:false,
        errorMsg:""
    })
    let [isOpen, setIsOpen] = useState(false)
    const archivo= useRef()

    const handleChangeArchivo= async e=>{
      await setFormulario({
          form:{
              ...formulario.form,
              archivo: archivo.current.files[0]
          }
      })
  }

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

  const handleChange= async e=>{
    await setFormulario({
        form:{
            ...formulario.form,
            [e.target.name]: e.target.value
        }
    })
}

    const HandlerEnviarForm=e=>{
        e.preventDefault();
        console.log(formulario);
        let url= Apiurl + apiSend;

        enviarForm(formulario.form,url).then(response=>{
            if(response != undefined){
                e.target.reset();
                setFormEnviado(true)
            }
          }
        )
        // axios.post(url,formulario)
        // .then(response=> {
        //     if(response != undefined){
        //         e.target.reset();
        //         setFormEnviado(true)
        //     }
        // })
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
            <div className="  bg-white text-mygray px-5 lg:px-10 py-5  rounded-lg mt-[2rem] drop-shadow-xl w-3/4" >
              <form onSubmit={HandlerEnviarForm}>
                        <h1 className=" mb-5 text-sm lg:text-xl font-semibold text-center">{formObject.titulo}</h1>
                        <div className="flex flex-col">
                            {
                              formObject.form.map(form=>{
                                switch (form.type) {
                                  case "input":
                                    return(
                                      <>
                                        <label className="  form-label " htmlFor={form.label.for}>{form.label.text}:</label>
                                        <input ref={form.input.type==="file"?archivo:null} className={form.input.type==="text"?"form-input":""} type={form.input.type} name={form.input.name} value={form.input.value} placeholder={form.input.placeholder} onChange={form.input.type==="file"?handleChangeArchivo:handleChange} />
                                      </>
                                    )
                                    
                                    break;
                                  case "select":
                                    return(
                                      <>
                                        <label className="  form-label " htmlFor={form.label.for}>{form.label.text}:</label>
                                        <select onChange={handleChange} className="form-input "  name={form.input.name} id={form.input.id} >
                                          {
                                            form.options.map(option=>{
                                              return(
                                                <option id={option.id} value={option.value}>{option.text}</option>
                                              )
                                            })
                                          }
                                        </select>
                                      </>
                                    )
                                    break;
                                  case "textarea":
                                    return(
                                      <>
                                        <label className="  form-label " htmlFor={form.label.for}>{form.label.text}:</label>
                                        <textarea className="form-input " name={form.input.name} id={form.input.id} cols="10" rows="5" placeholder={form.input.placeholder} onChange={handleChange}>
                                        </textarea>
                                      </>
                                    )
                                    break;
                                
                                  default:
                                    break;
                                }
                              }
                              )
                            }
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