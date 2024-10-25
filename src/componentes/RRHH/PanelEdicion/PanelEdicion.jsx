import { useEffect,useState } from "react";
import Secciones from "../../navBar/Secciones";
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import EdicionPersonalForm from "./EdicionPersonalForm";
import { usePersonalStore } from "../../../store/personalStore";
import { Apiurl } from "../../../services/apiPortal";
import { formulario } from "../../../data/constantes";
import Formulario from "../../Prestadores/FormComponent";
import { perfilAdapter } from "../../../Utilities/Adapters/user.adapter";

const PanelEdicion = () => {
    const [usuario,setUsuario]= useState({});
    const perfil = usePersonalStore(state => state.perfil);
    useEffect(() => {
        fetch(Apiurl+ "rrhh/personal/perfil/"+perfil.id)
        .then(res => res.json())
        .then(data => setUsuario(
            perfilAdapter(data.result[0])
        )
    )
    },[])
    console.log("Este es el perfil:",usuario);

    const keys=Object.keys(usuario);
    let formularioEdit= {
        titulo: "Edicion de usuario",
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
                    placeholder: "Ingrese los datos correspondientes",
                    value: usuario[key],
                    required: true
                },
            }})
    }
  return (
    <>
        <Secciones usuarios={usuario}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[55rem] lg:px-[5vh] py-12 bg-secondary text-white">
                <div className="flex justify-start w-11/12 md:w-5/6">
                    <a href="/rrhh">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </a>
                </div>
                <Formulario formularioInput={formularioEdit}></Formulario>
            </div>
        <Footer></Footer>
    </>
  )
}

export default PanelEdicion


