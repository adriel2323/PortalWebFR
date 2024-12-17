import { faUserPlus,faPeopleRoof,faLaptopMedical} from "@fortawesome/free-solid-svg-icons";
import { dropList } from "../../data/constantes";
import ButtomTemplate from "./ButtomTemplate";
import { useState } from "react";
import ModalSmButtoms from "../Modales/ModalSmButtoms";

const PrestadoresNolog=()=>{

    const [viewModalTN, setViewModalTN] = useState(false)
    const [viewModalDoc, setViewModalDoc] = useState(false)
    const [viewModalPAMI, setViewModalPAMI] = useState(false)
    const documentacion =dropList.documentacion
    const trabajaList =dropList.trabajaList
    const pami =dropList.pami

    return(
            <div className="solapar  grid-buttoms">
                <ButtomTemplate icono={faUserPlus} titulo={"Trabaja con nosotros"} setViewModal={setViewModalTN}  />
                <ButtomTemplate icono={faLaptopMedical} titulo={"Documentacion"} setViewModal={setViewModalDoc}  />
                <ButtomTemplate icono={faPeopleRoof} titulo={"Requerimientos PAMI"} setViewModal={setViewModalPAMI}  />


                {
                    viewModalTN && 
                        <ModalSmButtoms titulo={"Trabaja con nosotros"}  listButtoms={trabajaList} />
                }
                {
                    viewModalDoc && 
                        <ModalSmButtoms titulo={"Documentacion"}  listButtoms={documentacion} />
                }
                {
                    viewModalPAMI && 
                        <ModalSmButtoms titulo={"Requerimientos PAMI"}  listButtoms={pami} />
                }

            </div>
        
    )
}

export default PrestadoresNolog;