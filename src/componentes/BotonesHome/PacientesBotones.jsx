import { useContext,useState } from "react";
import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus, faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { PacientesContext } from "../../Pages/HomePacientes";
import ButtomOpen from "./ButtomOpen";
import { PerfilContext } from "../../App";

const HomeBotones=()=>{
    const {abrirCerrarCartilla}=useContext(PerfilContext)
    const botonesData={
        "pacientes":[
            {
                "id":2,
                "titulo":"Turnos Online",
                "link":"turnos.fnsr.com.ar",
                "icono":"faCalendarCheck",
                "redir":1
            },
            {
                "id":3,
                "titulo":"Portal de Pacientes",
                "link":"https://portal.fnsr.com.ar",
                "icono":"faHospitalUser",
                "redir":1
            },
            {
                "id":4,
                "titulo":"PAMI",
                "link":"https://www.pami.org.ar/preinicio",
                "icono":"faMoneyCheck",
                "redir":1
            },
            {
                "id":5,
                "titulo":"Laboratorio",
                "link":"https://portal.fnsr.com.ar",
                "icono":"faFlaskVial",
                "redir":1
            },
            {
                "id":6,
                "titulo":"ART",
                "link":"https://www.argentina.gob.ar/srt/art",
                "icono":"faHelmetSafety",
                "redir":1
            }
        ]
    }

    return(
            <div className="solapar grid-buttoms">
                <ButtomOpen onClick={abrirCerrarCartilla}  titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                {
                    botonesData.pacientes.map(boton =>
                        <Buttom key={boton.id} redir={boton} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
                
            </div>
        
    )
}

export default HomeBotones;