import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";

const HomeBotones=()=>{

    return(
    <div className="solapar grid-buttoms">    
        <Buttom redir={1} titulo={"Interconsulta"} icono={faNotesMedical} link= {"http://10.84.3.225"} />
        <Buttom redir={1} titulo={"Geclisa Web"} icono={faLaptopMedical} link= {"http://geclisa.fnsr.com.ar"} />
        <Buttom redir={1} titulo={"OME y Recetas(PAMI)"} icono={faPeopleRoof} link= {"https://cup.pami.org.ar/controllers/loginController.php"} />
        <Buttom redir={1} titulo={"Diagnostico por imagen"} icono={faBoxTissue} link= {"http://imagenes.fnsr.com.ar"} />
        <Buttom redir={1} titulo={"Sistema de bonos"} icono={faMoneyCheck} link= {"https://bonos.fnsr.com.ar"} />
        <Buttom redir={1} titulo={"Instructivos"} icono={faChalkboardUser} link= {"https://archivos.fnsr.com.ar/"} />
    </div>
    )
}
export default HomeBotones;