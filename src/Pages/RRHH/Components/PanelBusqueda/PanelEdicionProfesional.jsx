import { useEffect,useState } from "react";
import Secciones from "../../../Components/navBar/Secciones";
import Footer from "../../../Components/Footer/Footer";
import Icon from "../../../Components/BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { apiBusquedas, Apiurl } from "../../../../services/apiPortal";
import {  useParams } from "react-router-dom";
import { messegesAPI } from "../../../../constantes/constantes";
import { profesionalAdapter, tipoEvento } from "../../Adapters/profesionalAdapter";
import FormularioEditarProfesional from "./FormularioEditarProfesional";

const PanelEdicionProfesional = () => {
    const [usuario,setUsuario]= useState({});
    const [isLoad,setIsLoad]= useState(false);
    const [sinUsuario,setSinUsuario]=useState(false);
    const parametrosBusqueda=useParams();
    const id= parametrosBusqueda.id;
    const url_edit= `${Apiurl}${apiBusquedas.editarProfesionalesClinica}${id}`

    useEffect(() => {
                fetch(Apiurl+ "clinica/personal/perfil/"+id)
                .then(res => res.json())
                .then(data => {
                    if(data.result === messegesAPI.SIN_USUARIO){
                        setSinUsuario(true)
                    } else {
                        setUsuario(
                            profesionalAdapter(data.result,tipoEvento.editar)
                        )
                    }
                    setIsLoad(true)
            })

    },[])
    
  return (
    <>
        <Secciones usuarios={usuario}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[60rem] lg:px-[5vh] py-12 bg-secondary text-white">
                <div className="flex justify-start w-11/12 md:w-5/6">
                    <a href="/rrhh">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </a>
                </div>
                <h1 className=" font-medium text-2xl text-center w-3/4 ">Formulario de edición de profesionales</h1>
                {
                    !isLoad &&
                    <h1 className="font-bold text-xl">Cargando...</h1>
                }
                {
                    sinUsuario &&
                    <h1 className="font-bold text-xl">No se encontro el usuario</h1>
                }
                {
                    isLoad && !sinUsuario &&
                    <FormularioEditarProfesional formularioPrev={usuario} url={url_edit} id={id} />
                }
            </div>
        <Footer className="mt-10"/>
    </>
  )
}
export default PanelEdicionProfesional


