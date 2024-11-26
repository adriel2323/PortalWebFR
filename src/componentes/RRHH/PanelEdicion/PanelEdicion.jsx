import { useEffect,useState } from "react";
import Secciones from "../../navBar/Secciones";
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { apiRRHHCv, Apiurl } from "../../../services/apiPortal";
import { areasPersonal, formulario } from "../../../data/constantes";
import Formulario from "../../Prestadores/FormComponent";
import { perfilAdapter, userEditAdapter } from "../../../Utilities/Adapters/user.adapter";
import { useParams } from "react-router-dom";
import { messegesAPI } from "../../../constantes/constantes";


const PanelEdicion = () => {
    const [usuario,setUsuario]= useState({});
    const [isLoad,setIsLoad]= useState(false);
    const [sinUsuario,setSinUsuario]=useState(false);
    const parametrosBusqueda=useParams();
    const id= parametrosBusqueda.id;
    useEffect(() => {
        fetch(Apiurl+ "rrhh/personal/perfil/"+id)
                .then(res => res.json())
                .then(data => {
                    if(data.result[0]===messegesAPI.SIN_USUARIO){
                        setSinUsuario(true)
                    } else {
                        setUsuario(
                            perfilAdapter(data.result[0])
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
            if(key.includes("echa") || key.includes("creacion")) 
                return {
                    id: key,
                    type: formulario.types.input,
                    label: {
                        for: key,
                        text: key,
                    },
                    input: {
                        type: "date",
                        name: key,
                        id: key,
                        placeholder: "Ingrese  el/la "+key+" correspondientes",
                        
                        required: true
                    },
            };
            if(key=="Area"){
                let areasObject= Object.keys(areasPersonal);
                let areas= areasObject.map(area=>{
                    return {
                        id:area,
                        value:area,
                        text:area
                    }})
                let options= [{
                    id:0,
                    value: "default",
                    text: "--Elija una opción--",
                }]
                areas= options.concat(areas);

                return {
                    id: key,
                    type: formulario.types.select,
                    label: {
                        for: key,
                        text: key,
                    },
                    input: {
                        type: "select",
                        name: key,
                        id: key,
                        
                        required: true
                    },
                    options:areas
                }
            }else{
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
                }
            }
            })
    }
    console.log("el usuario:",usuario);
    
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

export default PanelEdicion


