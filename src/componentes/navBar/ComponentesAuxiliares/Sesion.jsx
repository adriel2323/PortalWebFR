import { useContext } from "react"
import { PerfilContext } from "../../../App"
import Icon from "../../BotonesHome/IconXs";
import { faLitecoinSign, faUserCircle, faBars, faX } from "@fortawesome/free-solid-svg-icons";


const Sesion=({setViewForm})=>{
    const contexto= useContext(PerfilContext)
    return(
        <div>

            {contexto.login && (
                <div className="flex-none w-[10vw]">
    
                            <div  onClick={()=> setViewForm((prev)=> !prev)} className="flex  flex-col  p-2 justify-center  hover:text-primary" >
                                <Icon className="" icono={faUserCircle}/>
                                <h4 className=" text-base text-center">Log Out</h4>
                            </div>
            </div>
            )}
            {
                !contexto.login && (
                    <div className="flex-none w-[10vw]">

                        <div  onClick={()=> setViewForm((prev)=> !prev)} className="flex  flex-col  p-2 justify-center  hover:text-primary" >
                            <Icon className="" icono={faUserCircle}/>
                            <h4 className=" text-base text-center">Iniciar sesión</h4>
                        </div>
                    </div>  
                )
            }
        </div>
    )
}

export default Sesion;