import { useContext,useState } from "react";
import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { PacientesContext } from "../../Pages/HomePacientes";
import ButtomOpen from "./ButtomOpen";
import { PerfilContext } from "../../App";
import { botones } from "../../data/constantes";

const HomeBotones=()=>{
    const {abrirCerrarCartilla}=useContext(PerfilContext)
    const botonesData=botones.pacientes

    return(
            <div className="solapar grid-buttoms">
                <ButtomOpen onClick={abrirCerrarCartilla}  titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                {
                    botonesData.map(boton =>
                        <Buttom key={boton.id} redir={boton} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
                
            </div>
        
    )
}

export default HomeBotones;