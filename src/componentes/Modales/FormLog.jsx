import { Fragment, useRef, useState, useContext,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import {logear} from "../../services/apiPortal"
import {PerfilContext} from '../../App';
import { permisosValidos } from '../../Utilities/functions';
import { useUserStore } from '../../store/userStore';


export default function FormLog( {setViewForm}) {

  const usuario= useUserStore((state)=>state.user)
  const permisos= useUserStore((state)=>state.permisos)
  const setUser= useUserStore((state)=>state.setUser)

  const errorMSG="Credenciales invalidas"
  const { setLogin}=useContext(PerfilContext)
  const [open, setOpen] = useState(true)
  const [datosUsuario,setDatosUsuario]=useState({})
  const [stateRequest,setStateRequest]=useState(true)

  const handleChange= async e=>{
    await setDatosUsuario({
        form:{
            ...datosUsuario.form,
            [e.target.name]: e.target.value
        }
    })
}
useEffect(()=>{
},[stateRequest])
  
  const logearse=()=>{
    logear(datosUsuario).then(
      (response) => {
        if(response.msg!=errorMSG){
          console.log('Esta es la respuesta',response);
          
          setUser(response)
          
          localStorage.setItem('user', JSON.stringify(response));
          localStorage.setItem('permisos', JSON.stringify(response.permisos));
          console.log('Este es el usuario en el local storage:',localStorage.getItem('user'));
          
          setLogin(true)
          setViewForm(false)
          setOpen(false)
          setStateRequest(true)
        } else{
          setStateRequest(false)
          
        }
      }    
    )
  }



  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start w-full ">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary sm:mx-0 sm:h-10 sm:w-10">
                      {/* <ExclamationTriangleIcon  /> */}
                      <UserCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Debe iniciar sesión para continuar
                      </Dialog.Title>
                      {
                        !stateRequest && <h1 className=' font'>Credenciales invalidas</h1>
                      }
                      <div className="mt-2 w-full">
                        <form action="" className="">
                            <label className="form-label" htmlFor="userName">Nombre de usuario</label>
                            <input className="form-input " type="text" name="userName" onChange={handleChange}/>
                            <label className="form-label" htmlFor="password">Contraseña</label>
                            <input className="form-input" type="password" name="password"  onChange={handleChange}/>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={logearse}
                  >
                    Ingresar al sistema
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}