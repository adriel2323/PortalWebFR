
const FormularioContacto = ({})=>{
    return(
        <>
          <form onSubmit={HandlerEnviarConsulta}>
                    <h1 className=" mb-5 text-sm lg:text-xl font-semibold text-center">Formulario de contacto</h1>
                    <div className="flex flex-col">
                        <label className="  form-label " htmlFor="name">Ingrese su nombre:</label>
                        <input className="form-input  " type="text" name="name" placeholder="Ej: Juan García" onChange={handleChange} />
                        <label className="  form-label " htmlFor="email">Ingrese su mail para contactarlo: </label>
                        <input className="form-input " type="email" name="email" placeholder="ejemplo@gmail.com" onChange={handleChange}/>
                        <label className="  form-label " htmlFor="area">Tema de la consulta</label>
                        <select onChange={handleChange} className="form-input "  name="area" id="" >
                            <option id="0" value="default">-Elija una opción-</option>
                            <option id="1" value="sistemas">Sistema</option>
                            <option id="2" value="facturacion">Facturación</option>
                            <option id="3" value="personal">Personal</option>
                            <option id="4" value="mantenimiento">Mantenimiento</option>
                        </select>
                        <label className="  form-label " htmlFor="texto">Consulta: </label>
                        <textarea className="form-input " name="texto" id="" cols="10" rows="5" placeholder="Ingrese su consulta" onChange={handleChange}>
                        </textarea>
                        <div className=" flex flex-col justify-center mt-12 mb-4">
                            <input className="form-buttom-send mb-4 " type="submit" value="Enviar" />
                            <input className="form-buttom-borrar" type="reset" value="Borrar" />
                        </div>
                        
                    </div>
          </form>
        </>
    )
};

export default FormularioContacto;