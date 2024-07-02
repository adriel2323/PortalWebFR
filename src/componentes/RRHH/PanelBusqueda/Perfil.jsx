import { Link } from "react-router-dom";
import { Apiurl } from "../../../services/apiPortal";
let imagen;
const validarFoto= (perfil)=>{
    if(perfil?.imagen?.includes('https')){
        imagen=perfil.imagen
    }else{
        imagen=Apiurl+ "/perfiles/imagenes/"+perfil?.imagen||'userDefault.jpg'
    }
    perfil.imagen
}

const Perfil= ({perfil, datos})=>{
    validarFoto(perfil)
    
    function deMiliADias(n){
        return Math.round((((n/1000)/60)/60)/24)
    }
    
    function diferenciaDias(fecha1){
        let diferencia;
        let fechaA=(new Date(fecha1)).getTime();
        let fechaB=(new Date()).getTime();
        diferencia=deMiliADias((fechaB-fechaA));
        let anios= diferencia/365
        return Math.floor(anios)
    };
    const edad= diferenciaDias(perfil.fecha)
    return(
        <>
            <Link to="/" key={perfil.id} className="flex justify-between p-2   lg:h-[20vh] shadow-lg my-2 lg:m-2 rounded-lg lg:p-4 items-center lg:w-100 lg:mb-4 bg-white text-mygray">
                <div className=" aspect-square h-16 mr-2 lg:mr-0 lg:mx-4 lg:h-28 lg:w-28 rounded-full overflow-hidden bg-gray-500">
                    <img className="m-auto w-full" src={imagen} alt="" />
                </div>
                <section className="grid  w-[80%] ">
                    <div className="flex flex-col lg:flex-row w-full">
                        <div className="lg:mb-2 flex  overflow-scroll">
                            {/* <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Nombre: </h2> */}
                            <h2 className="font-bold  text-base lg:h-[5vh]  w-full overflow-scroll lg:font-light"> { `${perfil.nombre} ${perfil.apellido}`}</h2>
                        </div>
                        <div className="flex">
                            <div className="lg:mb-2 flex  overflow-scroll mr-2 lg:mr-0">
                                <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Secundario: </h2>
                                <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.secundario==1?"Si": 'No'}</h2>
                            </div>
                            <div className="lg:mb-2 flex  overflow-scroll">
                                <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Superior: </h2>
                                <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.superior==1?"Si": 'No'}</h2>
                            </div>
                        </div>
                        <div className="lg:mb-2 flex  overflow-scroll">
                            <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Título: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.titulo}</h2>
                        </div>
                    </div>
                        <div className="lg:mb-2 flex flex-col overflow-scroll col-span-2">
                            <h2 className=" text-sm lg:text-base font-medium lg:pr-2">Experiencia: </h2>
                            <h2 className=" text-sm lg:text-base lg:h-[5vh]  w-full overflow-scroll font-light"> { perfil.experiencia}</h2>
                        </div>
                </section>
            </Link>
        </>
    )
};

export default Perfil;