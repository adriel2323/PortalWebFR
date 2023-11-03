import { useState } from "react";
import UserData from "../../data/data.json";
import SectionsBottom from "./SectionBottom";
import Icon from "../BotonesHome/Icon";
import { faLitecoinSign, faUserCircle, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modales/FormLog"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const SeccionesSmall= ({usuarios})=>{



    const[isLoading,setIsLoading]= useState(true);
    const[viewForm,setViewForm]= useState(false);

    const [isOpen, setIsOpen]= useState(false);

    const sectionList= UserData

    // const login=  ()=> {
    //   setViewForm(true)

    // }
  



    return (
        <div>

        <div className= "  bg-white py-2 z-65 drop-shadow-xl px-10">
            <div className="flex justify-between items-center align-middle">
                <Link className="flex   " href="/">
                    <img className="py-2 h-[10vh] " src="../../../public/imagenes/logoS.png" alt="" />
                </Link>
                
                {isOpen && (<FontAwesomeIcon onClick={()=> setIsOpen((prev)=> !prev)} className=" text-xl " icon={faX} />)}
                {!isOpen && (<FontAwesomeIcon onClick={()=> setIsOpen((prev)=> !prev)} className=" text-xl" icon={faBars} />)}
                
                {(usuarios==="prestadores" || usuarios=== "pacientes" || usuarios === "rrhh" || usuarios === "os") &&(
                    <div onClick={()=> setViewForm((prev)=> !prev)} className="flex flex-col justify-center w-20  " >
                        <Icon className=" " icono={faUserCircle}/>
                        <h4 className="flex text-center leading-none text-xs w-full">Iniciar sesión</h4>
                    </div>
                )

                }
                
            </div>
            <ul className="flex flex-col  justify-center">
                {isOpen && (
                    <>
                        {((sectionList.sections[0])[usuarios]).map(section=> <SectionsBottom key={section.id} oneSection= {section}/>)}
                    </>
                        )}
                </ul>
        </div>
        {
                viewForm && (
                <Modal/>
                )
            }
        </div>
    )
};

export default SeccionesSmall;