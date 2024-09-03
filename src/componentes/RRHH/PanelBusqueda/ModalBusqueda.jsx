import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icon from "../../BotonesHome/Icon"
import { faArrowAltCircleLeft, faX } from "@fortawesome/free-solid-svg-icons"

function ModalBusqueda({children,setOpenSearch}) {
  return (
    <>
        <div className="absolute sm:static z-10 sm:z-auto sm:w-[20vw] flex flex-row justify-between w-[100vw] ">
        <div className="  pl-2 lg:pl-4 pt-4 w-3/4 lg:w-full  text-white bg-secondary justify-start  shadow-md lg:shadow-none   ">
                        <Link  className="pl-2 lg:pl-10 mb-10" to="/rrhh">
                            <Icon icono={faArrowAltCircleLeft}/>
                        </Link>
                        <h1 className="px-8 lg:px-10 pt-5 lg:pt-10 text-xl lg:text-3xl uppercase font-bold">Sanatorio de alta complejidad</h1>
                        <h1 className="px-8 lg:px-10  lg:pb-8 text-md lg:text-3xl  font-medium">Fundación nuestra Señora del Rosario</h1>

                        {children}
            
        </div>
        <div onClick={()=> setOpenSearch((prev)=> !prev)} className=" bg-black bg-opacity-20 w-full relative flex flex-row-reverse sm:hidden">
            <FontAwesomeIcon  className=" absolute z-10 text-xl m-4  " icon={faX} />
        </div>
    </div>
    </>
  )
}
export default ModalBusqueda