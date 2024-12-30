import axios from "axios";
// import { Apiurl } from "../../services/apiPortal";
// import { apiPrestadores } from "../../services/apiPortal";
import { useState,useEffect, Fragment,useRef } from "react";
import { Dialog, Transition } from '@headlessui/react'
// import { enviarForm } from "../../../Utilities/functions";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store/appStore";
const Formulario = ({formularioPrev,formularioInput, apiSend,adaptador})=>{
  const navigate=useNavigate()
  const url=useAppStore(state=>state.url)
  const {register, handleSubmit, formState: { errors }} = useForm({
    defaultValues: {
      ...formularioPrev
    }
  });
        const [formularioPreview,setFormularioPreview]=useState()
        const formObject= formularioInput
        const [formEnviado,setFormEnviado]= useState(false)
        const [messege,setMessege]=useState("");
        const [formulario,setFormulario]=useState({
        form:{
            ...formularioPrev
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
    setFormularioPreview(formularioPrev)
  },[])
  useEffect(()=>{
    if(formEnviado==true){
        setIsOpen(true)
    }
  }, [formEnviado])



  function closeModal() {
    setIsOpen(false)
    navigate(url)
  }

  function openModal() {
    setIsOpen(true)
  }

    const HandlerEnviarForm= async data=>{
      
      if(adaptador!=undefined){
        console.log(data);

        let url= formObject.url
        let form=adaptador(data)
        axios.post(url, form).then(response=>{
          if(response.status===200){
            
            setMessege("Su consulta ha sido enviada correctamente")
            setFormEnviado(true)
  
            return response
          } else {
            setMessege("Error al enviar la consulta")
            setFormEnviado(true)
            return response
          }

        })
      } else if(adaptador==undefined){
        let url= formObject.url
        axios.post(url,data).then(response=>{
          if(response.status===200){
            setMessege("Su consulta ha sido enviada correctamente")
            setFormEnviado(true)
            return response
          } else {
            setMessege("Error al enviar la consulta")
            setFormEnviado(true)
            return response
          }
        })
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
                    Detalles envio
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                     {messege}
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
              <form
                  action={formObject.url}
                  method="post" // default to post
                  onSuccess={() => {
                    setFormEnviado(true)
                  }} // valid response
                  onError={() => {}} // error response
                  validateStatus={(status) => status >= 200} // validate status code
                  onSubmit={ handleSubmit(HandlerEnviarForm)}>
                        <h1 className=" mb-5 text-sm lg:text-xl font-semibold text-center">{formObject.titulo}</h1>
                        <div className="flex flex-col">
                            {
                              formObject.form.map(form=>{
                                switch (form.type) {
                                  case "input":
                                    return(
                                      <>
                                        
                                        <label className="  form-label " htmlFor={form.label.for}>{form.label.text}:</label>
                                        <input ref={form.input.type==="file"?archivo:null} className={form.input.type==="text"?"form-input":""} type={form.input.type} name={form.input.name}  placeholder={form.input.placeholder} onChange={form.input.type==="file"?handleChangeArchivo:null} {...register(form.input.name, (form.params?form.params:{}))}/>
                                        {
                                          errors[form.input.name] && (
                                            <p className="text-sm text-red-600">{errors[form.input.name].message}</p>
                                          )
                                        }
                                      </>
                                    )
                                    break;
                                  case "select":
                                    return(
                                      <>
                                        
                                        <label className="  form-label " htmlFor={form.label.for}>{form.label.text}:</label>
                                        <select  className="form-input "  name={form.input.name} id={form.input.id} {...register(form.input.name, (form.params?form.params:{}))} >
                                          {
                                            form.options.map(option=>{
                                              return(
                                                <option id={option.id} value={option.value}>{option.text}</option>
                                              )
                                            })
                                          }
                                        </select>
                                        {
                                            errors[form.input.name] && (
                                              <p className="text-sm text-red-600">{errors[form.input.name].message}</p>
                                            )
                                          }
                                      </>
                                    )
                                    break;
                                  case "textarea":
                                    return(
                                      <>
                                        
                                        <label className="  form-label " htmlFor={form.label.for}>{form.label.text}:</label>
                                        <textarea className="form-input " name={form.input.name} id={form.input.id} cols="10" rows="5" placeholder={form.input.placeholder}  {...register(form.input.name, (form.params?form.params:{}))} >
                                        </textarea>
                                        {
                                          errors[form.input.name] && (
                                            <p className="text-sm text-red-600">{errors[form.input.name].message}</p>
                                          )
                                        }
                                      </>
                                    )
                                
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