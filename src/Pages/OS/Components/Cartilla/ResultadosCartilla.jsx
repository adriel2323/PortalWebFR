

const ResultadosCartilla=({resultados})=>{
    let i=0;
    return(
        <>
        <div className="flex flex-col">

            <h1 className="mt-10 mb-2 font-semibold text-2xl">
                Resultados de busqueda
            </h1>
            <section>
                {
                    (resultados.length<1)&&(
                            <h1 className="mt-10 mb-2 font-semibold text-2xl">
                No se obtuvieron resultados de la busqueda
            </h1>
                        )
                }
                <div className=" hidden md:grid md:grid-cols-4 text-center font-semibold">
                    <h1>
                        Especialidad
                    </h1>
                    <h1>
                        Nombre
                    </h1>
                    <h1>
                        Dirección
                    </h1>
                    <h1>
                        Teléfono
                    </h1>
                </div>
                <div>

                    {
                        resultados.map(r=>{
                            i+=1;
                            
                            if(i%2==0){
                                 return (
                                        <div alt="{r.osNo}" className="flex flex-col md:grid md:grid-cols-4 text-center bg-slate-300 rounded-md">
                                            <h1 className="hidden md:flex py-4 pl-2 ">{r.especialidad}</h1>
                                            <div className="py-2 ">
                                                <h1  className="">{r.name}</h1>
                                                <h1  className=" font-light text-sm ">{r.osNo || r.descripcion}</h1>
                                            </div>
                                            <h1 className="py-2 ">{r.direccion}</h1>
                                            <h1 className="py-2 ">{r.telefono}</h1>
                                        </div>)}
                             else{
                                 return(
                                 <div className="flex flex-col md:grid md:grid-cols-4 text-center py-4 pl-2">
                                    <h1 className="hidden md:flex py-2 ">{r.especialidad}</h1>
                                    <div className="py-2 ">
                                        <h1  className="">{r.name}</h1>
                                        <h1  className=" font-light text-sm ">{r.osNo}</h1>
                                    </div>
                                    <h1 className="py-2 ">{r.direccion?r.direccion:""}</h1>
                                    <h1 className="py-2 ">{r.telefono}</h1>
                                </div>
                                )
                            }  }
                        )
                    }
                </div>
            </section>
        </div>
        </>
    )
}

export default ResultadosCartilla;