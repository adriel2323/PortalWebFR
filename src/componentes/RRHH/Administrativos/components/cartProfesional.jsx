import { Link } from "react-router-dom";
import { apiRRHHCv, Apiurl } from "../../../services/apiPortal";
import { deMiliADias,diferenciaDias } from "../../../Utilities/funcionesTransf";
import PerfilCV from "./PerfilCV";
import { usePersonalStore } from "../../../store/personalStore";

const CartProfesional= ({perfil, datos})=>{
    const setPerfil= usePersonalStore((state)=>state.setPerfil)
    
    
    return(
        <>
            <Link onClick={()=>{
                setPerfil(perfil)}} to={`profesional/${perfil.id}`} key={perfil.id} className="flex justify-between p-2   lg:h-[20vh] my-2 lg:m-2 rounded-lg lg:p-4 items-center lg:w-100 lg:mb-4 bg-slate-50 text-mygray">
                <div className=" aspect-square h-16 mr-2 lg:mr-0 lg:mx-4 lg:h-28 lg:w-28 rounded-full overflow-hidden bg-gray-500">
                    <img className="m-auto w-full" src={imagen} alt="" />
                </div>
                <section className="flex flex-col w-[80%] ">
                    <div className="lg:mb-2 flex  overflow-scroll pr-2">
                        <h2 className="font-bold  text-base sm:text-2xl lg:h-[5vh]  w-full overflow-scroll lg:font-extrabold"> {perfil.nombre}</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="lg:mb-2 flex  overflow-scroll mr-2 lg:mr-0">
                            <h2 className=" text-sm lg:text-base font-medium sm:font-bold lg:pr-2">Especialidad: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.especialidad!=""?perfil.especialidad:"Sin definir"}</h2>
                        </div>
                        <div className="lg:mb-2 flex  overflow-scroll">
                            <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Observacion Obras Sociales:</h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.observacion != ""?perfil.observacion:"Sin definir"}</h2>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    )
};

export default CartProfesional;