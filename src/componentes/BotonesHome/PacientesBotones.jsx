import { useContext,useState } from "react";
import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { PacientesContext } from "../../Pages/HomePacientes";
import ButtomOpen from "./ButtomOpen";
import { PerfilContext } from "../../App";

const HomeBotones=()=>{
    const {abrirCerrarCartilla}=useContext(PerfilContext)

    return(
        <div className="mx-52">
            <div className="grid grid-cols-3 place-items-center lg:mt-[65vh]   ">
                <Buttom redir={1} titulo={"Turnos Online"} icono={faCalendarCheck} link= {"http://turnos.fnsr.com.ar"}  />
                <ButtomOpen onClick={abrirCerrarCartilla} className="" titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                <Buttom redir={1} titulo={"Portal de Pacientes"} icono={faHospitalUser} link= {"https://portal.fnsr.com.ar"}  />
            </div>
            <div className="grid grid-cols-4 place-items-center mt-2 mb-40 ">    
                <Buttom redir={1} titulo={"PAMI"} icono={faPeopleRoof} link= {"https://www.pami.org.ar/preinicio"} />
                <Buttom redir={1} titulo={"Laboratorio"} icono={faFlaskVial} link= {"https://portal.fnsr.com.ar"} />
                <Buttom redir={1} titulo={"Diagnostico por Imagen"} icono={faBoxTissue} link= {"http://imagenes.fnsr.com.ar"}  />
                <Buttom redir={1} titulo={"ART"} icono={faHelmetSafety} link= {"https://www.argentina.gob.ar/srt/art"} />
            </div>
        </div>
    )
}

export default HomeBotones;