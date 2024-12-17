import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SectionsBottom =({oneSection}) =>{

    return (
        // <li key={key} className=" grid grid-col-1 lg:grid-flow-row place-items-center scroll  lg:hover:text-transparent lg:hover:bg-clip-text lg:hover:bg-gradient-to-br from-primary to-secondary  lg:hover:font-bold">
         <li  className=" my-2 grid grid-col-1 lg:grid-flow-row place-items-center scroll  lg:hover:text-primary   decoration-4 lg:hover:font-bold"> 
                    
                        <Link  className=' flex flex-col justify-center  w-full h-full lg:items-center' to={oneSection.link} >
                            <h1 className=' font-medium  text-sm lg:text-md xl:text-lg   ' >{oneSection.titulo}  </h1>
                        </Link>
        </li>
    )
}

export default SectionsBottom;