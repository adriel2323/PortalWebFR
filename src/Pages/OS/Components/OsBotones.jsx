import Buttom from "../../Components/BotonesHome/Buttom";
import ButtomDrop from "../../Components/BotonesHome/ButtomDrop";
import ButtomOpen from "../../Components/BotonesHome/ButtomOpen";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PerfilContext } from "../../../App";
import { botones, dropList } from "../../../data/constantes";


const RhBotones=()=>{
    const {abrirCerrarCartilla}= useContext(PerfilContext);
    const empleadosList =dropList.empleadosList


    const botonesData=botones.os

    return(
            <div className=" grid-buttoms ">
                <ButtomDrop  className="" titulo={"Acceso a Oficina Virtual"} icono={faHouseLaptop} lista={empleadosList} link={"http://gsannicolas.ddns.net:5001/Home/IniciarSesion"}  />
                <ButtomOpen onClick={abrirCerrarCartilla} className="" titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                {
                    botonesData.map(boton=>
                        <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link}  />
                    )
                }
            </div>
    )
}

export default RhBotones;