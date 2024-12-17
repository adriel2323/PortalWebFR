import { useContext } from "react"
import { PerfilContext } from "../../../../App"
import Icon from "../../../Components/BotonesHome/Icon";
import {  faUserCircle} from "@fortawesome/free-solid-svg-icons";


const Sesion=({setViewForm})=>{
    const contexto= useContext(PerfilContext)
    return(
        <div className="h-16">

            {contexto.login && (
                <div className="flex flex-col justify-center">
                            <div  onClick={()=> setViewForm((prev)=> !prev)} className="flex  flex-col  p-2 justify-center  hover:text-primary h-full max-h-16" >
                                <Icon className=" " icono={faUserCircle}/>
                                <h4 className="text-center leading-none text-xs w-full">Log Out</h4>
                            </div>
            </div>
            )}
            {
                !contexto.login && (
                    <div className="flex flex-col justify-center ">
                        <div  onClick={()=> setViewForm((prev)=> !prev)} className="flex  flex-col  p-2 justify-center  hover:text-primary h-full max-h-16" >
                            <Icon className="" icono={faUserCircle}/>
                            <h4 className="  text-center leading-none text-xs w-full">Iniciar sesión</h4>
                        </div>
                    </div>  
                )
            }
        </div>
    )
}

export default Sesion;