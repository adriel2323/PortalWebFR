import { botones } from '../../data/constantes'
import Buttom from '../BotonesHome/Buttom'


const HomeBotones=({data})=>{
    const usuario= "prestadores"

    return(
    <div className="solapar grid-buttoms">
        { data.map(boton => 
            <Buttom redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link} />
        ) }
        
    </div>
    )
}
export default HomeBotones;