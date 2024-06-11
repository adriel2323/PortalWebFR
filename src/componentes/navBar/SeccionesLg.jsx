import { useState, useContext, createContext} from "react";
import UserData from "../../data/data.json";
import SectionsBottom from "./SectionBottom";
import Log from "../Modales/Log"
import { Link } from "react-router-dom";
import useScreenSize from "../../Hooks/UseScreenSize";
import Sesion from "./ComponentesAuxiliares/Sesion";

export const LogContext= createContext()

const SeccionesLg= ({usuarios})=>{

    const[isLoading,setIsLoading]= useState(true);
    const[viewForm,setViewForm]= useState(false);

    const [isOpen, setIsOpen]= useState(false);

    const sectionList= UserData

    const [viewList, setViewList]= useState(false);
    const [viewBars, setViewBars]= useState(false);
    const size= useScreenSize()





    return (
        <div>

        <div className=" bg-secondary text-white py-1">
                <ul className="flex justify-center px-12 text-xs">
                    <li className="flex pr-5">
                        <h1 className=" font-semibold pr-2">Dirección:</h1>
                        <h1>Mitre 594</h1>
                    </li>
                    <li className="flex pr-5"> 
                        <h1 className=" font-semibold pr-2">Teléfono:</h1>
                        <h1>33644458100 0336 - 4458100 al 0336 - 4458129</h1>
                    </li>
                    <li className="flex pr-5">
                        <h1 className=" font-semibold pr-2">Whatsapp:</h1>
                        <h1>5493364436800</h1>
                    </li>
                    
                </ul>
        </div>
        <div className= " bg-white z-65 drop-shadow-2xl py-5  w-[100vw]">
            <div className="  flex justify-between h-[8vh]  px-10">
                <Link className="flex-none items-center align-middle w-[10vw]" to="/">
                    { usuarios !="os" && (<img className=" h-full" src="../../../public/imagenes/logo.png" alt="" />)}
                    { usuarios=="os" && (<img className=" align-middle w-12" src="../../../public/imagenes/logoUOM.png" alt="" />)}
                    
                </Link>
                <div className="grow justify-center content-center">
                    <div className="flex justify-center h-full ">

                        <ul className="text-sm md:text-base flex align-middle justify-around items-center w-full  xl:w-[50vw]">
                            
                            {((sectionList.sections[0])[usuarios]).map(section=> <SectionsBottom key={section.id} className="px-2 flex " oneSection= {section}/>)}
                        </ul>
                    </div>
                </div>
                
                
                {(usuarios==="prestadores" || usuarios=== "pacientes" || usuarios === "rrhh" || usuarios === "os" || usuarios === "personal") &&(
                    <Sesion setViewForm={setViewForm} />
                )

                }
                
            </div>
        </div>
        {
                viewForm  && (<Log />)
         
            }
        </div>
    )
};

export default SeccionesLg;