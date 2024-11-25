import { useEffect,useState } from "react";
import Secciones from "../../../navBar/Secciones";
import Footer from "../../../Footer/Footer";
import Icon from "../../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { apiBusquedas, apiRRHHCv, Apiurl } from "../../../../services/apiPortal";
import { formulario } from "../../../../data/constantes";
import Formulario from "../../../Prestadores/FormComponent";
import { userEditAdapter } from "../../../../Utilities/Adapters/user.adapter";
import {  useParams } from "react-router-dom";
import { messegesAPI } from "../../../../constantes/constantes";
import { useAppStore } from "../../../../store/appStore"; 
import { profesionalAdapter, tipoEvento } from "../../Administrativos/Adapters/profesionalAdapter";
import { useForm } from "react-hook-form";
import FormularioEditarProfesional from "./FormularioEditarProfesional";

const PanelEdicionProfesional = () => {
    const [usuario,setUsuario]= useState({});
    const [isLoad,setIsLoad]= useState(false);
    const [sinUsuario,setSinUsuario]=useState(false);
    const parametrosBusqueda=useParams();
    const id= parametrosBusqueda.id;

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
                    <FormularioEditarProfesional formularioPrev={usuario} />
                }
            </div>
        <Footer className="mt-10"/>
    </>
  )
}
{/* <Formulario formularioPrev={usuario} formularioInput={formularioEdit} adaptador={profesionalAdapter} apiSend={Apiurl+apiRRHHCv.editarPerfilPersonal+usuario.id} ></Formulario> */}
export default PanelEdicionProfesional


