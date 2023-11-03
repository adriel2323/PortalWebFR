import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";
import ButtomOpen from "./ButtomOpen";
import { useState,useContext } from "react";
import { PerfilContext } from "../../App";


const OsAdminBotones=()=>{
    const {abrirCerrarCartilla}= useContext(PerfilContext);
    const empleadosList =[
        {
            "id":1,
            "titulo":"Descargas utiles",
            "link": "/"
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "/"
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/"
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/"
        },
    ]
    const trabajaList =[
        {
            "id":1,
            "titulo":"Carga tu curricullum",
            "link": "/"
        },
        {
            "id":2,
            "titulo":"Areas de trabajo",
            "link": "/"
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/"
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/"
        },
    ]



    return(
        <div className="mx-52 mb-52">
            <div className=" grid grid-cols-3 place-items-center mt-[650px]   ">
                <ButtomDrop  className="" titulo={"Acceso a Oficina Virtual"} icono={faHouseLaptop} lista={empleadosList}  />
                <Buttom redir={0} className="" titulo={"Afiliaciones online"} icono={faPersonCirclePlus} lista={trabajaList} link= {"/obrasocial/afiliaciones"}   />
                <ButtomOpen onClick={abrirCerrarCartilla} className="" titulo={"Cartilla Médica"} icono={faMoneyCheck} />
                <Buttom redir={1} className="" titulo={"Asociate"} icono={faSquarePlus} link= {"https://portal.fnsr.com.ar"}  />
                <Buttom redir={0} className="col-span-2" titulo={"Administrar cartilla"} icono={faGear} link= {"/obrasocial/admin/cartilla"}  />
                <Buttom redir={0} className="col-span-2" titulo={"Ver afiliaciones"} icono={faUsers} link= {"/obrasocial/admin/afiliaciones"} />
                
            </div>


            
        </div>
    )
}

export default OsAdminBotones;