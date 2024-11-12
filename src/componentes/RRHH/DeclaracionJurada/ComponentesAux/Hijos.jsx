const Hijos =({key,register})=>{
    console.log("key:",key);
    return(
        <div>
                        <h1 className="  text-xs lg:text-lg font-light text-center">Hij@</h1>
                        <div className="grid grid-cols-4 lg:w-full">
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoNyA'+key} >Apellido y nombres:</label>
                                <input className="form-input  " type="text" name={'hijoNyA'+key} placeholder="Ej:García"  {...register(`hijoNyA${key}`)}/>
                            </div>
                            
                            
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoNacimiento'+key}>Fecha de nacimiento:</label>
                                <input className="form-input  " type="date" name={'hijoNacimiento'+key} {...register('fecha'+key)}  />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoNhijoNacimientoyA'+key}>Lugar de nacimiento:</label>
                                <input className="form-input  " type="text" name={'hijoNhijoNacimientoyA'+key} placeholder="Ej: San Nicolas" {...register('hijoNhijoNacimientoyA'+key)} />
                            </div>
                        
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoDNI'+key}>DNI:</label>
                                <input className="form-input  " type="text" name={'hijoDNI'+key} placeholder="ingrese los datos" {...register('hijoDNI'+key)} />
                            </div>
                            <div className=" p-3">
                                <label className="  form-label " htmlFor={'hijoACargo1'+key}>A cargo:</label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name={'hijoACargo1'+key} value="si" {...register('hijoACargo1'+key)}/>
                                        <label htmlFor="primario"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name={'hijoACargo1'+key} value="no" {...register('hijoACargo1'+key)}/>
                                        <label htmlFor="primario"> No</label>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-3">
                                <label className="  form-label "hijoV1 htmlFor={'hijoV1'+key}>Vive: </label>
                                <div className="flex lg:mb-2 lg:py-4">
                                    <div className="flex mr-5">
                                        <input type="radio" id="si" name={'hijoV1'+key}  value="si" {...register('hijoNyA'+key)}/>
                                        <label htmlFor="primario"> Si</label>
                                    </div>
                                    <div className="flex ">
                                        <input type="radio" id="no" name={'hijoV1'+key} value="no" {...register('hijoV1'+key)}/>
                                        <label htmlFor="primario"> No</label>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        
                    </div>
    )
}

export default Hijos;