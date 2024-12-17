import FormComponents from "./FormComponent";
import { formularioContacto } from "../../../data/constantes";
import { Apiurl } from "../../../services/apiPortal";

const Contacto =()=>{

    return(
        <div className="flex flex-col place-items-center h-[35rem] mb-[30rem] xl:px-52 py-16 bg-secondary text-white">
            <div >
                <h1 className=" text-4xl font-bold text-center ">Contactanos</h1>
                <p className=" px-10 mx-auto my-5 text-center md:w-3/4">Queremos brindarles el mejor servicio a nuestros profesionales. Contactate con nosotros por cualquier consulta que tengas. Tambien podes mandar tus sugerencias para mejorar nuestros servicios</p>
            </div>
            <FormComponents formularioInput={formularioContacto}/>
        </div>
    )


};

export default Contacto;