import HomeBotones from "./Components/HomeBotones";
import DatosSanatorio from "./Components/DatosSanatorio";
import Carrusel from "../Components/Carrusel";
import Nosotros from "./Components/Nosotros";
import Footer from "../Components/Footer/Footer";
import Secciones from "../Components/navBar/Secciones";

const HomeGeneral =({usuarios})=>{
    const usuario= usuarios;
    const area="general"

    return(
        <>
            <div className="normalize font-mont" >
              <Secciones usuarios={usuario}/>
                <Carrusel usuarios={usuario} area={area}/>
                <div className=''>
                    <HomeBotones />
                    <Nosotros/>
                    <DatosSanatorio/>
                </div>
                <Footer/>

            </div>
        </>
    )

};

export default HomeGeneral;