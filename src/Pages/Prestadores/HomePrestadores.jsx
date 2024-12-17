import Secciones from "../../Components/navBar/Secciones";
import PrestadoresBotones from "../../Components/BotonesHome/PrestadoresBotones";
import PrestadoresNoLogBotones from "../../Components/BotonesHome/PrestadoresNoLog";
import Carrusel from "../../Components/Carrusel";
import Novedades from "../../Components/Novedades";
import Footer from "../../Components/Footer/Footer"
import ContactoInterno from "./Components/ContactoInterno"
import { useUserStore } from "../../store/userStore";
import { botones } from "../../data/constantes";

const HomePrestadores =({usuarios})=>{
    const area="prestadores"
    const usuario= useUserStore((state)=>state.user)
    const permisos= usuario.permisos
    const botonesPrestadores= botones["prestadores"]
    // const botones= useState(buscarBotones(links["prestadores"]))
    
    return(
        <>
            <div className="normalize font-mont  " >
                <Secciones area={area}/>
                <Carrusel className="" usuarios={area} area={area}/>
                <div className=' z-30 '>
                    {permisos.permisosPrestadores && <PrestadoresBotones data={botonesPrestadores} />}
                    {!permisos.permisosPrestadores && <PrestadoresNoLogBotones />}
                    <ContactoInterno/>
                    <Novedades usuarios={usuarios}/>
                </div>
                <Footer/>
            </div>
        </>
    )

};

export default HomePrestadores;
