import { useState } from 'react';
import Buttom from '../BotonesHome/Buttom'
import { dropList } from '../../data/constantes';
import ModalSmButtoms from '../Modales/ModalSmButtoms';
import { faPeopleRoof} from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from '../../store/appStore';
import ButtomTemplate from './ButtomTemplate';


const HomeBotones=({data})=>{
    const usuario= "prestadores";
    const setArea= useAppStore((state)=>state.setArea);
    setArea(usuario)

    const [viewModalPAMI, setViewModalPAMI] = useState(false)
    const pami =dropList.pami

    return(
    <div className="solapar grid-buttoms">
        { data.map(boton => 
            <Buttom redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link} />
        ) }
        <ButtomTemplate icono={faPeopleRoof} titulo={"Requerimientos PAMI"} setViewModal={setViewModalPAMI}  />
        {
                    viewModalPAMI && 
                        <ModalSmButtoms titulo={"Requerimientos PAMI"}  listButtoms={pami} />
                }
    </div>
    )
}
export default HomeBotones;