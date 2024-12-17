import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen,faFilePen,faUsers,faMoneyCheck,faChalkboardUser,faNotesMedical,faLaptopMedical,faPeopleRoof,faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faLaptop, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const Buttom = ({titulo, icono, link, redir })=>{

    const iconMap= {
        "faMoneyCheck":faMoneyCheck,
        "faChalkboardUser":faChalkboardUser,
        "faNotesMedical":faNotesMedical,
        "faLaptopMedical":faLaptopMedical,
        "faPeopleRoof":faPeopleRoof,
        "faGear":faGear,
        "faPersonCirclePlus":faPersonCirclePlus,
        "faSquarePlus":faSquarePlus,
        "faHouseLaptop":faHouseLaptop,
        "faUserPlus":faUserPlus,
        "faPeopleGroup":faPeopleGroup,
        "faUser":faUser,
        "faLaptop":faLaptop,
        "faRectangleList":faRectangleList,
        "faHelmetSafety":faHelmetSafety,
        "faBoxTissue":faBoxTissue,
        "faFlaskVial":faFlaskVial,
        "faUserDoctor":faUserDoctor,
        "faHospitalUser":faHospitalUser,
        "faHospital":faHospital,
        "faCaretDown":faCaretDown,
        "faCommentDots":faCommentDots,
        "faCalendarCheck":faCalendarCheck,
        "faBuilding":faBuilding,
        "faBed":faBed,
        "faUsers":faUsers,
        "faUserPen":faUserPen,
        "faFilePen":faFilePen
    }

    return(
    <div className="flex justify-center w-full"  >
        <div className="buttom-A">
            {
                redir==1 ?
                <a href={link} className=" buttom-B"  rel="noopener noreferrer" target="_blank" >
                    <div className="grid place-items-stretch content-end h-1/3">
                        <Icon  icono={iconMap[icono]} />
                    </div>
                    <div className=" text-center flex justify-center h-1/3">
                        <h3 className="buttom-T" >{titulo}</h3>
                    </div>
                </a>
                : 
                <Link to={link} className=" buttom-B"  rel="noopener noreferrer" >
                    <div className="grid place-items-stretch content-end h-1/3">
                        <Icon  icono={iconMap[icono]} />
                    </div>
                    <div className=" text-center flex justify-center h-1/3">
                        <h3 className="buttom-T" >{titulo}</h3>
                    </div>
                </Link>
            }
            
        </div>
    </div>
    )

}

export default Buttom;
