import Nosotros from "../componentes/novedades/Nosotros";
import DatosSanatorio from "../componentes/Secciones/DatosSanatorio";
import Footer from "../componentes/Footer/Footer";
import Secciones from "./navBar/Secciones";

const HomeLayout=()=>{
    return(
        <>
            <div className="normalize font-mont" >
                <Secciones usuarios={usuario}/>
                
                <Footer/>

            </div>

        </>
    )
}
