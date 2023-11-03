import { Link } from "react-router-dom";

const Perfil= ({perfil, datos})=>{
    
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
            <Link to="/" key={perfil.id} className="flex h-[20vh] shadow-lg m-2 rounded-lg p-4 items-center w-100 mb-4 bg-white text-mygray">
                <div>
                    <div className="mx-4 h-28 w-28 rounded-full overflow-hidden bg-gray-500 aspect-square">
                        <img className="w-full" src={perfil.imagen} alt="" />
                    </div>
                </div>
                <section className="grid grid-cols-3 p-8">
                {
                        perfil && datos.map(dato=>{ return(
                            <div className="mb-2 flex">
                                <h2 className=" font-medium pr-2">{dato}: </h2>
                                <h2 className=" h-[5vh]  w-full overflow-scroll font-light"> { perfil[dato]}</h2>
                            </div>
                        )})
                    }
                </section>
                {/* <div className="flex flex-col p-4">
                    <h1 className="my-2 text-lg font-semibold">{perfil.nombre} {perfil.apellido}</h1>
                    <div className="grid grid-cols-5 text-sm">
                        <div >
                            <div className="mb-10 flex">
                                <h2 className=" font-medium pr-2">Edad: </h2>
                                <h2 className=" font-light"> { edad}</h2>
                            </div>
                            <div className="mb-10 flex">
                                <h2 className=" font-medium pr-2">Área: </h2>
                                <h2 className=" font-light"> { perfil.area}</h2>
                            </div>
                        </div>
                        <div>
                            <div className="mb-10 flex">
                                <h2 className=" font-medium pr-2">Secundario: </h2>
                                <h2 className=" font-light"> { perfil.secundario?"Si": "No"}</h2>
                            </div>
                            <div className="mb-10 flex">
                                <h2 className=" font-medium pr-2">Superior: </h2>
                                <h2 className=" font-light">{ perfil.superior?"Si": "No"}</h2>
                            </div>
                            
                        </div>
                        <div>
                            <div className="mb-10 flex">
                                <h2 className=" font-medium pr-2">Titulo: </h2>
                                <h2 className=" font-light"> { perfil.titulo}</h2>
                            </div>
                            
                        </div>
                        <div className="col-span-2">
                            <div className="mb-10 ">
                                <h2 className=" font-medium pr-2">Experiencia: </h2>
                                <div className="h-16 font-light overflow-scroll text-xs">

                                    <p> { perfil.experiencia}
                                    </p>
                            </div>
                            </div>
                            <h1> </h1>
                            
                        </div>
                    </div>
                    
                    
                    
                    
                    
                </div>
                <div>
                </div> */}
            </Link>
        </>
    )
};

export default Perfil;