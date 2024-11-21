import { useEffect,useState } from "react";
import Secciones from "../../../navBar/Secciones";
import Footer from "../../../Footer/Footer";
import Icon from "../../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { apiRRHHCv, Apiurl } from "../../../../services/apiPortal";
import { formulario } from "../../../../data/constantes";
import Formulario from "../../../Prestadores/FormComponent";
import { userEditAdapter } from "../../../../Utilities/Adapters/user.adapter";
import {  useParams } from "react-router-dom";
import { messegesAPI } from "../../../../constantes/constantes";
import { useAppStore } from "../../../../store/appStore"; 
import { profesionalAdapter, tipoEvento } from "../../Administrativos/Adapters/profesionalAdapter";

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
                    console.log("La data:", data);
                    
                    if(data.result === messegesAPI.SIN_USUARIO){
                        setSinUsuario(true)
                    } else {
                        setUsuario(
                            profesionalAdapter(data.result,tipoEvento.update)
                        )
                    }
                    setIsLoad(true)
            })

    },[])
    const keys=Object.keys(usuario);
    let formularioEdit= {
        titulo: "Edicion de usuario",
        url: `${Apiurl}${apiRRHHCv.editarPerfilPersonal}${usuario.id}`,
        form:keys.map((key)=>{
            return {
                id: key,
                type: formulario.types.input,
                label: {
                    for: key,
                    text: key,
                },
                input: {
                    type: "text",
                    name: key,
                    id: key,
                    placeholder: "Ingrese  el/la "+key+" correspondientes",
                    
                    required: true
                },
            }})
    }
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
                    <Formulario formularioPrev={usuario} formularioInput={formularioEdit} adaptador={userEditAdapter} apiSend={Apiurl+apiRRHHCv.editarPerfilPersonal+usuario.id} ></Formulario>
                }
            </div>
        <Footer className="mt-10"/>
    </>
  )
}

export default PanelEdicionProfesional

