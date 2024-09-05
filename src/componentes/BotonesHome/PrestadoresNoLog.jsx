import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import { dropList } from "../../data/constantes";


const PrestadoresNolog=()=>{
    const documentacion =dropList.documentacion
    const trabajaList =dropList.trabajaList
    const pami =dropList.pami

    return(
            <div className="solapar  grid-buttoms">
                <ButtomDrop  titulo={"Trabaja con nosotros"} icono={faUserPlus} lista={trabajaList}  />
                <ButtomDrop  titulo={"Documentacion"} icono={faLaptopMedical} lista={documentacion}  />
                <ButtomDrop  titulo={"Requerimientos PAMI"} icono={faPeopleRoof} lista={pami}  />

            </div>
        
    )
}

export default PrestadoresNolog;