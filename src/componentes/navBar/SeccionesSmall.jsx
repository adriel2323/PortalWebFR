import { useState, useContext } from "react";
import SectionsBottom from "./SectionBottom";
import Icon from "../BotonesHome/Icon";
import { faLitecoinSign, faUserCircle, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Log from "../Modales/Log";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { PerfilContext } from "../../App";
import Sesion from "./ComponentesAuxiliares/Sesion";
import { useUserStore } from "../../store/userStore";
import { sections } from "../../data/constantes";



const SeccionesSmall= ({usuarios})=>{
    const {login}= useContext(PerfilContext)
    const[viewForm,setViewForm]= useState(false);
    const [isOpen, setIsOpen]= useState(false);
    // const sectionsNav=  usuarios != "admin" || usuarios != "os" || usuarios != "personal" ? sections.public : sections.privates
    const sectionsNav=  sections.public

    const user= useUserStore((state)=>state.user)
    
    return (
        <div>

        <div className= "  bg-white py-2 z-65 drop-shadow-xl px-10">
            <div className="flex justify-between items-center align-middle">
                <Link className="flex   " to="/">
                    <img className="py-2 aspect-square h-[10vh] " src="../../../public/imagenes/logoS.png" alt="" />
                </Link>
                {isOpen && (<FontAwesomeIcon onClick={()=> setIsOpen((prev)=> !prev)} className=" text-xl " icon={faX} />)}
                {!isOpen && (<FontAwesomeIcon onClick={()=> setIsOpen((prev)=> !prev)} className=" text-xl" icon={faBars} />)}
                
                {(usuarios==="prestadores" || usuarios=== "pacientes" || usuarios === "rrhh" || usuarios === "os" || usuarios === "personal") &&(
                    <Sesion setViewForm={setViewForm} />
                )
                }
                
            </div>
            <ul className="flex flex-col  justify-center">
                {isOpen && (
                    <>
                        {sectionsNav.map(section=> <SectionsBottom key={section.id} oneSection= {section}/>)}
                    </>
                        )}
                </ul>
        </div>
            
        {
                viewForm  && (<Log viewForm={viewForm} setViewForm={setViewForm} />)
            }
        </div>
    )
};

export default SeccionesSmall;

