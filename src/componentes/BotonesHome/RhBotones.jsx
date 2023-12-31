import Buttom from "./Buttom";
import { faGear,faPersonCirclePlus, faSquarePlus,faUsers , faHouseLaptop,faUserPlus,faPeopleGroup,faUser,faChalkboardUser,faMoneyCheck,faLaptop,faNotesMedical, faRectangleList,faHelmetSafety,faBoxTissue,faFlaskVial,faPeopleRoof, faUserDoctor, faHospitalUser,faHospital, faCaretDown, faCommentDots, faCalendarCheck,faBuilding,faBed, faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import ButtomDrop from "./ButtomDrop";


const RhBotones=()=>{
    const empleadosList =[
        {
            "id":1,
            "titulo":"Recibo de sueldo",
            "link": "/rrhh/recibosueldo",
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
            "titulo":"Documentación",
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

    return(
        <div className="mx-10 lg:mx-52 mb-14 lg:mb-52">
            <div className="  grid lg:mx-0 lg:grid-cols-3 place-items-center lg:mt-[65vh] md:mt-[35vw]    ">
                <ButtomDrop  titulo={"Empleados"} icono={faPeopleGroup} lista={empleadosList}  />
                <ButtomDrop  titulo={"Trabaja con nosotros"} icono={faUserPlus} lista={trabajaList}  />
                <Buttom     redir={1} titulo={"capacitaciones"} icono={faUsers} link= {"/"}  />
            </div>


            
        </div>
    )
}

export default RhBotones;
