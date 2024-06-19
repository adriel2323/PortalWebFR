import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers, faMoneyCheck,faChalkboardUser,faNotesMedical,faLaptopMedical,faPeopleRoof,faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faLaptop, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed} from "@fortawesome/free-solid-svg-icons";

const Icon = ({icono})=>{
    return(
        <FontAwesomeIcon className=" text-center text-3xl lg:text-5xl" icon={icono} />
    )
}
export default Icon;