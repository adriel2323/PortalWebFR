import { formularioPAMI } from "../../data/constantes";
import Secciones from "../navBar/Secciones";
import Formulario from "./FormComponent";

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
                    <Formulario formularioInput={formularioPAMI} />
                </div>
            </div>
        </>
    )

};

export default DatosPami;