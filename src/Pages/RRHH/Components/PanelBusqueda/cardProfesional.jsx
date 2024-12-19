import { Link } from "react-router-dom";
import { usePersonalStore } from "../../../../store/personalStore";
import { profesionalAdapter } from "../../Adapters/profesionalAdapter";

const CardProfesional= ({perfil, datos})=>{
    const setPerfil= usePersonalStore((state)=>state.setPerfil)
    const perfilProfesional= profesionalAdapter(perfil)
    
    return(
        <>
            <Link onClick={()=>{
                setPerfil(perfil)}} to={`/admin/profesional/${perfil.id}`} key={perfil.id} className="flex justify-between p-4   lg:h-[20vh] my-2 lg:m-2 rounded-lg lg:p-4 items-center lg:w-100 lg:mb-4 bg-slate-50 text-mygray">
                <section className="flex flex-col  w-[100%] ">
                    <div className="lg:mb-2 flex  overflow-scroll pr-2">
                        <h2 className="font-bold  text-base sm:text-2xl lg:h-[5vh]  w-full overflow-scroll lg:font-extrabold"> {perfilProfesional.nombre}</h2>
                    </div>
                    <div className="grid grid-cols-1 mt-2 sm:mt-0 space-y-2 sm:space-y-0 sm:grid-cols-3">
                        <div className="lg:mb-2 flex  overflow-scroll mr-2 lg:mr-0">
                            <h2 className=" text-sm lg:text-base font-medium sm:font-bold pr-2">Especialidad: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]   w-full overflow-scroll font-light"> { perfilProfesional.especialidad!=""?perfilProfesional.especialidad:"Sin definir"}</h2>
                        </div>
                        <div className="lg:mb-2 col-span-2 flex overflow-scroll">
                            <h2 className=" text-sm lg:text-base font-medium pr-2">Observacion Obras Sociales:</h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfilProfesional.observacion != ""?perfilProfesional.observacion:"Sin definir"}</h2>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    )
};

export default CardProfesional;