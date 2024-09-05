import { botones } from "../../data/constantes";
import Buttom from "./Buttom";

const HomeBotones=()=>{
    const botonesData=botones.general

    return(
    <div className="solapar grid-buttoms">
        { botonesData.map(boton =>
            <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link} />
        )}    
        
    </div>
    )
}

export default HomeBotones;