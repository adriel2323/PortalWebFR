import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icon from "../../BotonesHome/Icon"
import { faArrowAltCircleLeft, faX } from "@fortawesome/free-solid-svg-icons"
import { useAppStore } from "../../../store/appStore"

function ModalBusqueda({children}) {
  const setOpenSearch=useAppStore((state)=>state.setOpenSearch)
  const openSearch=useAppStore((state)=>state.openSearch)
  return (
    <>
        <div className="absolute sm:static z-10 sm:z-auto sm:w-[25vw] flex flex-row justify-between w-[100vw] ">
        <div className="  pl-2 lg:pl-4 pt-4 h-[100vh] w-3/4 sm:w-full  text-white bg-secondary justify-start  shadow-md lg:shadow-none   ">
                        <Link  className="pl-2 lg:pl-10 mb-10" to="/rrhh">
                            <Icon icono={faArrowAltCircleLeft}/>
                        </Link>
                        <h1 className="px-8 sm:px-10 pt-5 sm:pt-10 text-lg sm:text-2xl uppercase font-bold">Sanatorio de alta complejidad</h1>
                        <h1 className="px-8 sm:px-10  sm:pb-8 text-md sm:text-xl  font-medium">Fundación nuestra Señora del Rosario</h1>
                        {children}
        </div>
        <div 
        onClick={()=> {
        setOpenSearch(!openSearch)
        }} className=" bg-black bg-opacity-20 w-full relative flex flex-row-reverse sm:hidden">
            <FontAwesomeIcon  className=" absolute z-10 text-xl m-4  " icon={faX} />
        </div>
    </div>
    </>
  )
}
export default ModalBusqueda