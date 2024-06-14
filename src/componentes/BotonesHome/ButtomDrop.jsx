import { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import Modal from "../Modales/FormLog"
import ItemDrop from "./ItemDrop";
import { PerfilContext } from "../../App";
import { Link } from "react-router-dom";


const Buttom = ({titulo, icono, link, lista})=>{

    const {login}= useContext(PerfilContext)
    const [isOpen, setIsOpen]= useState(false);
    const[viewForm,setViewForm]= useState(false);
    const [isLogged,setIsLogged]= useState(false)
    const verForm=()=> ()=> !login? setViewForm((prev)=> !prev):'';
    return(
    <>

        <div onClick={()=> setIsOpen((prev)=> !prev)} className=" mb-2 flex justify-center w-full">
            <div className="buttom-A">
                <div className="buttom-B"  target="_blank" rel="noopener noreferrer">
                    <div className="grid place-items-stretch content-end h-1/3">
                        <Icon  icono={icono} />
                    </div>
                    <div className="sm:text-center flex sm:justify-center h-1/3">
                        <h3 className="pl-2 md:pl-0 mt-1 leading-tight lg:leading-normal lg:mt-2 text-lg lg:text-xl" >{titulo}</h3>
                    </div>
                </div>
            </div>
        </div>
        {
        isOpen && (
            <div className=" mb-2 w-full bg-gray-300   flex flex-col items-start  p-2" >
                {lista.map(item=>(
                    
                    item.logged===1?
                    (
                            <Link    to={item.link} onClick={()=> !login? setViewForm((prev)=> !prev):null} key={item.id} className="z-1 flex  justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4" >
                                <h3 className=" buttom-T"> {item.titulo}</h3>
                            </Link >
                )
                :
                (<Link to={item.link}  key={item.id} className="z-1 flex  justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4" rel="noopener noreferrer">
                    <h3 className=" buttom-T"> {item.titulo}</h3>
                </Link >)
                    
                )) }
            </div>
            
        )
        }
        {
                    viewForm && (
                        <Modal />
                    )
                }
    </>
    )

}

export default Buttom;

// <div  onClick={verForm} id={item.id} className="flex w-full justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                    //     <h3 className=" font-medium text-xl p-4"> {item.titulo}</h3>
                    // </div >