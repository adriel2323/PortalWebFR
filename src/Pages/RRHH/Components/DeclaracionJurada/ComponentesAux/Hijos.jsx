const Hijos =({identificador,register})=>{
    return(
        <div>
                        <h1 className="  text-xs lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-4 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoNyA'+identificador} >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name={'hijoNyA'+identificador} placeholder="Ej:García"  {...register(`hijoNyA${identificador}`)}/>
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'fecha'+identificador}>Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name={'fecha'+identificador} {...register('fecha'+identificador)}  />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoNacimiento'+identificador}>Lugar de nacimiento:</label>
                                <input className="form-input  " type="text" name={'hijoNacimiento'+identificador} placeholder="Ej: San Nicolas" {...register('hijoNacimiento'+identificador)} />
                            </div>
                        
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoDNI'+identificador}>DNI:</label>
                                <input className="form-input  " type="text" name={'hijoDNI'+identificador} placeholder="ingrese los datos" {...register('hijoDNI'+identificador)} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoACargo'+identificador}>A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name={'hijoACargo'+identificador} value="si" {...register('hijoACargo'+identificador)}/>
                                        <label htmlFor="primario"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name={'hijoACargo'+identificador} value="no" {...register('hijoACargo'+identificador)}/>
                                        <label htmlFor="primario"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label "hijoV1 htmlFor={'hijoV'+identificador}>Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name={'hijoV'+identificador}  value="si" {...register('hijoV'+identificador)}/>
                                        <label htmlFor="primario"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name={'hijoV'+identificador} value="no" {...register('hijoV'+identificador)}/>
                                        <label htmlFor="primario"> No</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
    )
}

export default Hijos;