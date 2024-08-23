import { useState,useEffect } from "react";
import HomeBotones from "../componentes/BotonesHome/HomeBotones";
import Carrusel from "../componentes/Secciones/Carrusel";
import Nosotros from "../componentes/novedades/Nosotros";
import DatosSanatorio from "../componentes/Secciones/DatosSanatorio";
import Footer from "../componentes/Footer/Footer";
import Secciones from "../componentes/navBar/Secciones";

const HomeGeneral =({usuarios})=>{

    const usuario= usuarios;
    console.log('Estos son los usuarios: ',usuario);
    
    
    return(
        <>
            <div className="normalize font-mont" >
              <Secciones usuarios={usuario}/>
                <Carrusel usuarios={usuario}/>
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