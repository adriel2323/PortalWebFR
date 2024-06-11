import { Fragment, useRef, useState, useContext,useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { logear } from '../../services/apiPortal'
import { PerfilContext } from '../../App'
import { Link } from 'react-router-dom';


export default function ModalSmButtoms({errorMSG, listButtoms, viewModal}) {
    const {usuario,setUsuario, setLogin}=useContext(PerfilContext)
    const [open, setOpen] = useState(true)
    const [datosUsuario,setDatosUsuario]=useState({})
    const [stateRequest,setStateRequest]=useState(true)

    useEffect(()=>{

    },[stateRequest])

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
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
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
                        <div className="  mb-2 w-full  flex flex-col items-start  p-2" >
                            {listButtoms.map(item=>(
                                
                                item.logged===1?
                                (
                                        <Link    to={item.link}  key={item.id} className="z-1 w-full flex p-4  justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4" >
                                            <h3 className=" buttom-T"> {item.titulo}</h3>
                                        </Link >
                            )
                            :
                            (<Link to={item.link}  key={item.id} className="z-1 flex  justify-between hover:bg-secondary hover:text-white w-full p-4 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4" rel="noopener noreferrer">
                                <h3 className=" buttom-T"> {item.titulo}</h3>
                            </Link >)
                                
                            )) }
                        </div>
                    <div className="sm:flex sm:items-start w-full ">
                    </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                    >
                        Cerrar
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