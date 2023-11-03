const Hijos =({key})=>{
    return(
        <div>
                        <h1 className="  text-xs lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-4 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'name'+key} >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name={'name'+key} placeholder="Ej:García" />
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'fecha'+key}>Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name={'fecha'+key}  />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="nacimiento">Lugar de nacimiento:</label>
                                <input className="form-input  " type="text" name="nacimiento" placeholder="Ej: San Nicolas" />
                            </div>
                        
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="documento">DNI:</label>
                                <input className="form-input  " type="text" name="documento" placeholder="ingrese los datos" />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="cuil">A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="primario" value="si"/>
                                        <label htmlFor="primario"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="primario" value="no"/>
                                        <label htmlFor="primario"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor="email">Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name="primario" value="si"/>
                                        <label htmlFor="primario"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name="primario" value="no"/>
                                        <label htmlFor="primario"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
    )
}

export default Hijos;