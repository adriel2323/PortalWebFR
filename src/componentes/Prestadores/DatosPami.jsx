import { formObject } from "../../data/constantes";
import { formulario } from "../../data/constantes";
import Footer from "../Footer/Footer";
import Secciones from "../navBar/Secciones";
import Formulario from "./FormComponent";
import { apiPrestadores } from "../../services/apiPortal";

const formularioPAMI = {
    titulo: "Formulario de contacto",

    form:[
        {
            id:0,
            type:formulario.types.input,
            label: {
                for: "name",
                text: "Ingrese su nombre completo",
            },
            input: {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "",
                required: true
            },
        },
        {
            id:1,
            type:formulario.types.input,
            label: {
                for: "dni",
                text: "Ingrese el Numero de DNI",
            },
            input: {
                type: "text",
                name: "dni",
                id: "dni",
                placeholder: "",
                required: true
            },
        },
        {
            id:2,
            type:formulario.types.input,
            label: {
                for: "numeroTramite",
                text: "Ingrese el Numero de tramite de su DNI",
            },
            input: {
                type: "text",
                name: "numeroTramite",
                id: "numeroTramite",
                placeholder: "",
                required: true
            },
        },
        {
            id:3,
            type:formulario.types.input,
            label: {
                for: "cuil",
                text: "Ingrese su Número de cuil",
            },
            input: {
                type: "text",
                name: "cuil",
                id: "cuil",
                placeholder: "",
                required: true
            },
        },
        {
            id:4,
            type:formulario.types.input,
            label: {
                for: "especialidad",
                text: "Ingrese su especialidad",
            },
            input: {
                type: "text",
                name: "especialidad",
                id: "especialidad",
                placeholder: "",
                required: true
            },
        },
        {
            id:5,
            type:formulario.types.input,
            label: {
                for: "matricula",
                text: "Ingrese su Número de matrícula",
            },
            input: {
                type: "text",
                name: "matricula",
                id: "matricula",
                placeholder: "",
                required: true
            },
        },
        {
            id:6,
            type:formulario.types.textarea,
            label: {
                for: "texto",
                text: "Consulta",
            },
            input: {
                type: "text",
                name: "texto",
                id: 6,
                placeholder: "Puede dejarnos alguna aclaración, si lo necesita",
                required: true
            },
        },
        {
            id:7,
            type:formulario.types.input,
            label: {
                for: "certificado",
                text: "Cargue su certificado de ética",
            },
            input: {
                type: "file",
                name: "certificado",
                id: 7,
                required: true
            },
        },
        {
            id:8,
            type:formulario.types.input,
            label: {
                for: "email",
                text: "Ingrese su email para poder contactarlo",
            },
            input: {
                type: "text",
                name: "email",
                id: "email",
                placeholder: "",
                required: true
            },
        },
    ]

}
const DatosPami =()=>{

    return(
        <>
            <div className="normalize font-mont">
                <Secciones area="prestadores" />
                <div className="flex flex-col place-items-center h-[35rem] mb-[30rem] xl:px-52 py-16 bg-secondary text-white">
                    <div >
                        <h1 className=" text-4xl font-bold text-center ">Usuario PAMI</h1>
                        <p className=" px-10 mx-auto my-5 text-center md:w-3/4">Para generarle el ususario de PAMI desde el sanatorio necesitamos que nos envie la sigueinte informacion: </p>
                    </div>
                    <Formulario formularioInput={formularioPAMI} apiSend={apiPrestadores.alta_pami}/>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    )

};

export default DatosPami;