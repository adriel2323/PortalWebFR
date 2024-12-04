import { PDFViewer } from '@react-pdf/renderer';
import archivo from '../../../public/archivos/DDJJ2023.pdf'
import Archivo from "../visualizadorArchivos/Archivos";
import PanelEdicion from '../RRHH/PanelEdicion/PanelEdicion';

const ArchivoU=()=>{

    return(
        <>
            <PDFViewer style={{ width: "100vw", height: "100vh" }} >
                <PanelEdicion  />
            </PDFViewer>
        </>
    )


}

export default ArchivoU;