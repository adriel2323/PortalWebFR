import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";

const HomeBotones=()=>{

    return(
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:place-items-center mt-[80vw]  lg:mt-[65vh]  mb-[150px] px-10 sm:px-12 lg:px-52  lg:w-full rounded drop-shadow-md">    
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