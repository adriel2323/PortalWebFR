import { Link } from "react-router-dom";
import { useAppStore } from "../../../../store/appStore";

const CardPregunta= ({pregunta, datos})=>{
    const setElementoEdicion=useAppStore((state)=>state.setElementoEdicion)
    
    return(
        <>
            <Link onClick={()=>{
                setElementoEdicion(pregunta)}} to={`/admin/profesional/${pregunta.id}`} key={pregunta.id} className="flex justify-between p-4   lg:h-[20vh] my-2 lg:m-2 rounded-lg lg:p-4 items-center lg:w-100 lg:mb-4 bg-slate-50 text-mygray">
                <section className="flex flex-col  w-[100%] ">
                    <div className="lg:mb-2 flex  overflow-scroll pr-2">
                        <h2 className="font-bold  text-base sm:text-2xl lg:h-[5vh]  w-full overflow-scroll lg:font-extrabold"> {pregunta.titulo}</h2>
                    </div>
                    <div className="grid grid-cols-1 mt-2 sm:mt-0 space-y-2 sm:space-y-0 sm:grid-cols-3">
                        <div className="lg:mb-2 flex  overflow-scroll mr-2 lg:mr-0">
                            <h2 className=" text-sm lg:text-base font-medium sm:font-bold pr-2">Fecha: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]   w-full overflow-scroll font-light"> { pregunta.fecha!=""?pregunta.fecha:"Sin definir"}</h2>
                        </div>
                        <div className="lg:mb-2 flex  overflow-scroll mr-2 lg:mr-0">
                            <h2 className=" text-sm lg:text-base font-medium sm:font-bold pr-2">Area: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]   w-full overflow-scroll font-light"> { pregunta.area!=""?pregunta.area:"Sin definir"}</h2>
                        </div>
                        <div className="lg:mb-2 col-span-2 flex overflow-scroll">
                            <h2 className=" text-sm lg:text-base font-medium pr-2">Texto:</h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { pregunta.texto != ""?pregunta.texto:"Sin definir"}</h2>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    )
};

export default CardPregunta;