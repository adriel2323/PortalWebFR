import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";


const PrestadoresNolog=()=>{
    const documentacion =[
        {
            "id":1,
            "titulo":"Documentación de ingreso",
            "link": "/",
            "logged":1
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "/",
            "logged":1
        },
        {
            "id":3,
            "titulo":"Preguntas frecuentes",
            "link": "/archivos",
            "logged":1
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        },
    ]
    const trabajaList =[
        {
            "id":1,
            "titulo":"Carga tu curricullum",
            "link": "/rrhh/cv",
            "logged":0
        },
        {
            "id":5,
            "titulo":"Declaración Jurada",
            "link": "/rrhh/declaracion",
            "logged":0
        },
        {
            "id":2,
            "titulo":"Areas de trabajo",
            "link": "/",
            "logged":0
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/archivos",
            "logged":0
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        },
    ]
    const pami =[
        {
            "id":1,
            "titulo":"Datos necesarios para alta en PAMI ",
            "link": "/",
            "logged":0
        },
        {
            "id":2,
            "titulo":"Sitio Oficial",
            "link": "https://www.pami.org.ar/",
            "logged":0
        },
        {
            "id":3,
            "titulo":"Sistema de ordenes y recetas",
            "link": "https://cup.pami.org.ar/controllers/loginController.php",
            "logged":0
        },
        
    ]

    return(
            <div className="solapar  grid-buttoms">
                <ButtomDrop  titulo={"Trabaja con nosotros"} icono={faUserPlus} lista={trabajaList}  />
                <ButtomDrop  titulo={"Documentacion"} icono={faLaptopMedical} lista={documentacion}  />
                <ButtomDrop  titulo={"Requerimientos PAMI"} icono={faPeopleRoof} lista={pami}  />

            </div>
        
    )
}

export default PrestadoresNolog;