import { useContext} from "react";
import { cvContext } from "../BuscarCV";
import { Link } from "react-router-dom";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Categorias=()=>{
    const {listaResultados, setListaResultados, buscar, busqueda, handleChange}= useContext(cvContext);
    const {setOpenSearch}=useContext(cvContext);

    return(

    <> 
    <div className="absolute z-10 flex flex-row justify-between ">
        <div className="  pl-2 lg:pl-4 pt-4 w-3/4 lg:w-1/4 h-[100vh] text-white bg-secondary justify-start  shadow-md lg:shadow-none  ">
                        <Link  className="pl-2 lg:pl-10 mb-10" to="/rrhh">
                            <Icon icono={faArrowAltCircleLeft}/>
                        </Link>
                        <h1 className="px-8 lg:px-10 pt-5 lg:pt-10 text-xl lg:text-3xl uppercase font-bold">Sanatorio de alta complejidad</h1>
                        <h1 className="px-8 lg:px-10  lg:pb-8 text-md lg:text-3xl  font-medium">Fundación nuestra Señora del Rosario</h1>
            <form onSubmit={buscar} action="">

                <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                    <li className="buttomList-item pr-2">
                        <div className="w-11/12" >
                            <label className=" mb-2 text-white"  htmlFor="area">Área</label>
                            
                            <select onChange={handleChange} className="form-input font-sans text-base mb-1 w-full"  name="area" id="">
                                <option id="0" value="">Elija una opción</option>
                                <option id="1" value="administracion/atencionalpublico">Administracion/atención al público
    </option>
                                <option id="2" value="chofer">Chofer</option>
                                <option id="3" value="anatomiPatologica">Anatomía Patológica
    </option>
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
        </div>
        <div onClick={()=> setOpenSearch((prev)=> !prev)} className=" bg-black bg-opacity-20 w-full relative flex flex-row-reverse ">
            <FontAwesomeIcon  className=" absolute z-10 text-xl m-4  " icon={faX} />
        </div>
    </div>
    </>
    )

};

export default Categorias;