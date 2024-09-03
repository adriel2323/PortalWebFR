import { useContext} from "react";
import { Link } from "react-router-dom";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalBusqueda from "./ModalBusqueda";


const Categorias=({contexto})=>{
    const {paramsSerch,buscar,handleChange,openSearch,setOpenSearch,isLoad,descripcion}=useContext(contexto)

    return(

    <> 
        {
            descripcion==="CV" && (  
                <ModalBusqueda setOpenSearch={setOpenSearch}>
                    <form onSubmit={buscar} action="">
                        <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                            <li className="buttomList-item pr-2">
                                <div className="w-11/12" >
                                    <label className=" mb-2 text-white"  htmlFor="area">Área</label>
                                    
                                    <select onChange={handleChange} className="form-input font-sans text-base mb-1 w-full"  name="area" id="">
                                        <option id="0" value="">Elija una opción</option>
                                        {
                                            paramsSerch.map((item)=>{
                                                return(
                                                    <option id={item.id} value={item.value}>{item.nombre}</option>
                                                )
                                            })
                                        }
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
                </ModalBusqueda>
    )
}
    {/* {
        descripcion==="CV" && (  
        <div className="absolute sm:static z-10 sm:z-auto sm:w-[20vw] flex flex-row justify-between w-[100vw] ">
            <div className="  pl-2 lg:pl-4 pt-4 w-3/4 lg:w-full  text-white bg-secondary justify-start  shadow-md lg:shadow-none   ">
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
                                    {
                                        paramsSerch.map((item)=>{
                                            return(
                                                <option id={item.id} value={item.value}>{item.nombre}</option>
                                            )
                                        })
                                    }
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
            <div onClick={()=> setOpenSearch((prev)=> !prev)} className=" bg-black bg-opacity-20 w-full relative flex flex-row-reverse sm:hidden">
                <FontAwesomeIcon  className=" absolute z-10 text-xl m-4  " icon={faX} />
            </div>
        </div> )
    } */}
    
        {
            descripcion==="PERSONAL" && ( 
            <ModalBusqueda setOpenSearch={setOpenSearch}>
                <form onSubmit={buscar} action="">

                    <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
                        <li className="buttomList-item pr-2">
                                <div className="w-11/12">
                                    <label className=" mb-2 text-white"  htmlFor="dni">DNI</label>
                                    <input  onChange={handleChange} className="form-input text-base mb-1 " type="text" name="dni" placeholder="Ej: Gomez" />
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
                                <label className=" mb-2 text-white"  htmlFor="legajo">Legajo</label>
                                <input onChange={handleChange} className="form-input text-base mb-1 " type="text" name="legajo"  />
                            </div>
                        </li>
                        <li className="buttomList-item">
                            <div className="w-11/12">
                                <label className=" mb-2 text-white"  htmlFor="area">Area</label>
                                <select  className="form-input text-base mb-1 "  name="area" id="">
                                    <option id="0" value="nn">Elija una opción</option>
                                    <option id="1" value="mantenimiento">Mantenimiento</option>
                                    <option id="2" value="limpieza">Limpieza</option>
                                    <option id="3" value="facturacion">Facturacion</option>
                                    <option id="4" value="sistemas">Sistemas</option>
                                    <option id="5" value="enfermeria">Enfermeria</option>
                                    <option id="6" value="contaduria">Contaduria</option>
                                    
                                </select>
                                
                            </div>
                        </li>
                        
                    </ul>
                    <input className="
                        ml-6 p-4 mr-4 w-10/12 form-buttom-send2 text-lg " type="submit" value="Buscar" />
                </form>
            </ModalBusqueda>
            )
        }
    </>
    )

};

export default Categorias;

// {
//     descripcion==="CV" && (  
//     <ModalBusqueda setOpenSearch={setOpenSearch}>
//         <form onSubmit={buscar} action="">
//             <ul className="bg-secondary buttomList-contein w-full lg:pr-4">
//                 <li className="buttomList-item pr-2">
//                     <div className="w-11/12" >
//                         <label className=" mb-2 text-white"  htmlFor="area">Área</label>
                        
//                         <select onChange={handleChange} className="form-input font-sans text-base mb-1 w-full"  name="area" id="">
//                             <option id="0" value="">Elija una opción</option>
//                             {
//                                 paramsSerch.map((item)=>{
//                                     return(
//                                         <option id={item.id} value={item.value}>{item.nombre}</option>
//                                     )
//                                 })
//                             }
//                         </select>
                    
//                     </div>

//                 </li>
//                 <li className="buttomList-item pr-2">
//                     <div className="w-11/12">
//                         <label className=" mb-2 text-white"  htmlFor="apellido">Apellido</label>
//                         <input  onChange={handleChange} className="form-input text-base mb-1 " type="text" name="apellido" placeholder="Ej: Gomez" />
                            
                        
//                     </div>
//                 </li>
//                 <li className="buttomList-item pr-2">
                    
//                     <div className="w-11/12">
//                         <label className=" mb-2 text-white"  htmlFor="experiencia">Experiencia</label>
//                         <input onChange={handleChange} className="form-input text-base mb-1 " type="text" name="experiencia" placeholder="Ej: hospital,sanatorio,camillero" />
                            
                        
//                     </div>
//                 </li>
//                 <li className="buttomList-item">
//                     <div className="w-11/12">
//                         <label className=" mb-2 text-white"  htmlFor="area">Estudios</label>
//                         <select  className="form-input text-base mb-1 "  name="area" id="">
//                             <option id="0" value="nn">Elija una opción</option>
//                             <option id="1" value="secundario">secundario</option>
//                             <option id="2" value="universitario">Universitario/Superior</option>
                            
//                         </select>
                        
//                     </div>
//                 </li>
                
//             </ul>
//             <input className="
//                 ml-6 p-4 mr-4 w-10/12 form-buttom-send2 text-lg " type="submit" value="Buscar" />
//         </form>
//     </ModalBusqueda>
//     )
// }