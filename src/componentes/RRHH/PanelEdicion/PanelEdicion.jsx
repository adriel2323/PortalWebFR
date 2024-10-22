import { useEffect,useState } from "react";
import Secciones from "../../navBar/Secciones";
import Footer from "../../Footer/Footer";
import Icon from "../../BotonesHome/Icon";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import EdicionPersonalForm from "./EdicionPersonalForm";
import { usePersonalStore } from "../../../store/personalStore";
import { Apiurl } from "../../../services/apiPortal";

const PanelEdicion = () => {
    const [usuario,setUsuario]= useState({});
    const perfil = usePersonalStore(state => state.perfil);
    useEffect(() => {
        fetch(Apiurl+ "rrhh/personal/perfil/"+perfil.id)
        .then(res => res.json())
        .then(data => setUsuario(data.result[0]))
    },[])
    console.log("Este es el perfil:",usuario);
    
  return (
    <>
        <Secciones usuarios={usuario}/>
            <div className="flex flex-col place-items-center h-[40rem] mb-[55rem] lg:px-[5vh] py-12 bg-secondary text-white">
                <div className="flex justify-start w-11/12 md:w-5/6">
                    <a href="/rrhh">
                        <Icon icono={faArrowAltCircleLeft}/>
                    </a>
                </div>
            </div>
        <Footer></Footer>
    </>
  )
}

export default PanelEdicion


