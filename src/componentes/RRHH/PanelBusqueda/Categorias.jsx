import { useContext} from "react";
import { Link } from "react-router-dom";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalBusqueda from "./ModalBusqueda";
import { areasRRHH } from "../../../data/constantes";


const Categorias=({contexto})=>{
    const {paramsSerch,buscar,handleChange,openSearch,setOpenSearch,isLoad,descripcion}=useContext(contexto)
    const areasList=Object.keys(areasRRHH)
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
                                    <select onChange={handleChange}  className="form-input text-base mb-1 "  name="area" id="">
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
                                <select onChange={handleChange}  className="form-input text-base mb-1 "  name="area" id="">
                                    <option id="0" value="nn">Elija una opción</option>
                                    {
                                        areasList.map((item)=>{
                                            return(
                                                <option id=
                                                {item} value={areasRRHH[item]}>{areasRRHH[item]}</option>
                                            )
                                        })
                                    }
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