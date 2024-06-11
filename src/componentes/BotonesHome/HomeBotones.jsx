import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed } from "@fortawesome/free-solid-svg-icons";

const HomeBotones=()=>{
    

    return(
    <div className="solapar grid-buttoms">    
        <Buttom redir={0} titulo={"Obra Social"} icono={faGear} link= {"/obrasocial"} />
        <Buttom redir={0} titulo={"Sanatorio"} icono={faHospital} link= {"/"} />
        <Buttom redir={1} titulo={"Portal de pacientes"} icono={faHospitalUser} link= {"https://portal.fnsr.com.ar"} />
        <Buttom redir={0} titulo={"Prestadores"} icono={faUserDoctor} link= {"/prestadores"} />
        <Buttom redir={1} titulo={"PAMI"} icono={faPeopleRoof} link= {"https://www.pami.org.ar/preinicio"} />
        <Buttom redir={1} titulo={"Laboratorio"} icono={faFlaskVial} link= {"https://archivos.fnsr.com.ar/"} />
        <Buttom redir={1} titulo={"Diagnostico por imagen"} icono={faBoxTissue} link= {"http://imagenes.fnsr.com.ar"} />
        <Buttom redir={1} titulo={"ART"} icono={faHelmetSafety} link= {"https://www.argentina.gob.ar/srt/art"} />
    </div>
    )
}

export default HomeBotones;