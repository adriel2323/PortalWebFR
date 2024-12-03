import Secciones from "../componentes/navBar/Secciones";
import PrestadoresBotones from "../componentes/BotonesHome/PrestadoresBotones";
import PrestadoresNoLogBotones from "../componentes/BotonesHome/PrestadoresNoLog";
import Carrusel from "../componentes/Secciones/Carrusel";
import Novedades from "../componentes/Secciones/Novedades";
import Footer from "../componentes/Footer/Footer"
import ContactoInterno from "../componentes/Prestadores/ContactoInterno"
import { useUserStore } from "../store/userStore";
import { botones } from "../data/constantes";

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
