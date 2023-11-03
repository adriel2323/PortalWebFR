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

    const verForm=()=> !login? setViewForm((prev)=> !prev): location.href =window.location.protocol + "//" + window.location.host + item.link;
    

    return(
    <>

        <div onClick={()=> setIsOpen((prev)=> !prev)} className=" mb-2 flex justify-center w-full">
            <div className="mb-2 lg:mb-0  p-4 divide-x-2 bg-gray-100 w-full drop-shadow-md  hover:bg-primary hover:text-white border-4 border-transparent active:border-black duration-300 active:text-white">
                <div className="flex md:flex-col md:h-36  justify-center m-2  text-left md:text-center"  target="_blank" rel="noopener noreferrer">
                    <div className="grid place-items-stretch content-end h-1/3">
                        <Icon  icono={icono} />
                    </div>
                    <div className="text-center flex justify-center h-1/3">
                        <h3 className="pl-2 md:pl-0 mt-1 leading-tight lg:leading-normal lg:mt-2 text-lg lg:text-xl" >{titulo}</h3>
                    </div>
                </div>
            </div>
        </div>
        {
        isOpen && (
            <div className=" lg:mt-[65vh] lg:mr-[35vw] xl:mt-[90vh] mb-2 w-full lg:w-1/4 xl:mr-[53vw] bg-gray-300 lg:absolute top-20 flex flex-col items-start  p-2" >
                {lista.map(item=>(

                    item.logged===1?
                    (<div  onClick={()=> !login? setViewForm((prev)=> !prev): location.href =window.location.protocol + "//" + window.location.host + item.link} key={item.id} className="md:z-1 flex w-full justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                    <h3 className=" buttom-T"> {item.titulo}</h3>
                </div >)
                :
                (<Link to={item.link}  key={item.id} className="z-1 flex w-full justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                    <h3 className=" font-medium text-xl p-4"> {item.titulo}</h3>
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