import { useContext,useState,useEffect } from "react";
import { cvContext } from "../BuscarCV";


const Categorias=(listaConOpciones)=>{
    const {listaResultados, setListaResultados, buscar, busqueda, handleChange}= useContext(cvContext);

    return(
    <>
        <form onSubmit={buscar} action="">

            <ul className="bg-secondary buttomList-contein w-full pr-4">
                
                <li className="buttomList-item pr-2">
                    <div className="w-11/12" >

                        <label className=" mb-2 text-white"  htmlFor="area">Área</label>       

                        <select onChange={handleChange} className="form-input font-sans text-base mb-1 w-full"  name="area" id="">
                            <option id="0" value="">Elija una opción</option>
                            <option id="1" value="administracion/atencionalpublico">Administracion/atención al público</option>
                            <option id="2" value="chofer">Chofer</option>
                            <option id="3" value="anatomiPatologica">Anatomía Patológica</option>
                            <option id="4" value="enfermeria">Enfermería</option>
                            <option id="5" value="camillero">Camillero</option>
                            <option id="6" value="diagnosticoPorimagen">Diagnóstico por imágenes</option>
                            <option id="7" value="Limpieza">Limpieza</option>
                            <option id="8" value="Cocina">Cocina</option>
                            <option id="9" value="Farmacia">Farmacia</option>
                            <option id="10" value="Hemoterapia">Hemoterapia</option>
                            <option id="11" value="Mantenimiento">Mantenimiento</option>
                        </select>
    
                    </div>

                </li>
                <li className="buttomList-item pr-2">
                    <div className="w-11/12">
                        <label className=" mb-2 text-white"  htmlFor="apellido">Apellido</label>
                        <input  onChange={handleChange} className="form-input text-base mb-1 " type="text" name="apellido" placeholder="Ej: Gomez" />
                            
                        
                    </div>
                </li>
                <li className="buttomList-item pr-2">
                    
                    <div className="w-11/12">
                        <label className=" mb-2 text-white"  htmlFor="experiencia">Experiencia</label>
                        <input onChange={handleChange} className="form-input text-base mb-1 " type="text" name="experiencia" placeholder="Ej: hospital,sanatorio,camillero" />
                            
                        
                    </div>
                </li>
                <li className="buttomList-item">
                    <div className="w-11/12">
                        <label className=" mb-2 text-white"  htmlFor="area">Estudios</label>
                        <select  className="form-input text-base mb-1 "  name="area" id="">
                            <option id="0" value="nn">Elija una opción</option>
                            <option id="1" value="secundario">secundario</option>
                            <option id="2" value="universitario">Universitario/Superior</option>
                            
                        </select>
                        
                    </div>
                </li>
                
            </ul>
            <input className="
                ml-6 p-4 mr-4 w-10/12 form-buttom-send2 text-lg " type="submit" value="Buscar" />
        </form>
        </>
    )

};

export default Categorias;