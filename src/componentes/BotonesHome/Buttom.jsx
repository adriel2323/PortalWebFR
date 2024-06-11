import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { Link } from "react-router-dom";

const Buttom = ({titulo, icono, link, redir, })=>{
    return(

    <div className="flex justify-center w-full"  >
        <div className="buttom-A">
            <Link to={link} className=" buttom-B"  rel="noopener noreferrer" target="_blank">
                <div className="grid place-items-stretch content-end h-1/3">
                    <Icon  icono={icono} />
                </div>
                <div className=" text-center flex justify-center h-1/3">
                    <h3 className="buttom-T" >{titulo}</h3>
                </div>
            </Link>
        </div>
    </div>
    )

}

export default Buttom;
