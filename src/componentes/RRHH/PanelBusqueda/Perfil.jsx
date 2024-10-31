import { Link } from "react-router-dom";
import { Apiurl } from "../../../services/apiPortal";
import { deMiliADias,diferenciaDias } from "../../../Utilities/funcionesTransf";
import PerfilCV from "./PerfilCV";

let imagen;

const validarFoto= (perfil)=>{
    if(perfil.imagen && perfil.imagen.includes('https')){
        imagen = perfil.imagen
    }else{
        imagen=Apiurl+ "/perfiles/imagenes/"+perfil.imagen||'userDefault.jpg'
    }

}
const nombre=(perfil)=>{
    if(perfil?.apellido && perfil?.nombre){
        return `${perfil?.nombre} ${perfil?.apellido}`
    }else{
        return (perfil?.name)
    }
}
const Perfil= ({perfil, datos})=>{
    validarFoto(perfil)
    const nombreCompleto=nombre(perfil);
    const edad= diferenciaDias(perfil.fecha)
    return(
        <>
            <Link to="/" key={perfil.id} className="flex justify-between p-2 my-3 sm:m-3 rounded-lg lg:p-4 items-center lg:w-100 lg:mb-4 bg-white text-mygray">
                <div className=" aspect-square w-[15%] mr-2 lg:mr-0 lg:mx-4   rounded-full overflow-hidden bg-gray-500">
                    <img className="m-auto w-full" src={imagen} alt="" />
                </div>
                <section className="grid  w-[80%] ">
                    <div className="flex flex-col w-full">
                        <div className="lg:mb-2 flex  overflow-scroll">
                            <h2 className="font-bold  text-base lg:h-[5vh]  w-full overflow-scroll sm:font-bold sm:text-2xl"> {nombreCompleto}</h2>
                        </div>
                        <div className="flex">
                            <div className=" flex pr-4  overflow-scroll">
                                <h2 className=" text-sm sm:text-lg font-medium lg:pr-2">Superior: </h2>
                                <h2 className=" text-sm sm:text-lg lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.superior==1?"Si": 'No'}</h2>
                            </div>
                            <div className=" flex  overflow-scroll">
                                <h2 className=" text-sm sm:text-lg font-medium lg:pr-2">Título: </h2>
                                <h2 className=" text-sm sm:text-lg lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.titulo}</h2>
                            </div>
                        </div>
                    </div>
                        <div className="lg:mb-2 flex flex-col overflow-scroll col-span-2">
                            <h2 className=" text-sm sm:text-lg font-medium lg:pr-2">Experiencia: </h2>
                            <h2 className=" text-sm sm:text-lg sm:h-[8vh]  w-full overflow-scroll font-light"> { perfil.experiencia}</h2>
                        </div>
                </section>
            </Link>
        </>
    )
};

export default Perfil;