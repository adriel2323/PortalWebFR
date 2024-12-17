import { Link } from "react-router-dom";
import { Apiurl } from "../../../services/apiPortal";
import { usePersonalStore } from "../../../store/personalStore";

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
const PerfilPersonal= ({perfil})=>{
    const setPerfil= usePersonalStore((state)=>state.setPerfil)
    
    validarFoto(perfil)
    const nombreCompleto=nombre(perfil);

    return(
        <>
            <Link onClick={()=>{
                setPerfil(perfil)}} to={`perfil/${perfil.id}`} key={perfil.id} className="flex justify-between p-2   lg:h-[20vh] my-2 lg:m-2 rounded-lg lg:p-4 items-center lg:w-100 lg:mb-4 bg-slate-50 text-mygray">
                <div className=" aspect-square h-16 mr-2 lg:mr-0 lg:mx-4 lg:h-28 lg:w-28 rounded-full overflow-hidden bg-gray-500">
                    <img className="m-auto w-full" src={imagen} alt="" />
                </div>
                <section className="flex flex-col w-[80%] ">
                    <div className="lg:mb-2 flex  overflow-scroll pr-2">
                        <h2 className="font-bold  text-base sm:text-2xl lg:h-[5vh]  w-full overflow-scroll lg:font-extrabold"> {nombreCompleto}</h2>
                    </div>
                    <div className="grid grid-cols-1 space-y-1 sm:space-y-0 sm:grid-cols-3 ">
                        <div className="lg:mb-2 flex  overflow-scroll mr-2 lg:mr-0">
                            <h2 className=" text-sm lg:text-base font-medium sm:font-bold lg:pr-2">Fecha de ingreso: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.ingreso!=""?perfil.ingreso:"Sin definir"}</h2>
                        </div>
                        <div className="lg:mb-2 flex  overflow-scroll">
                            <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Area: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.area != ""?perfil.area:"Sin definir"}</h2>
                        </div>
                        
                        <div className="lg:mb-2  flex overflow-scroll">
                            <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Link Archivos: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.archivos?'SI':'NO'  }</h2>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    )
};

export default PerfilPersonal;