import { useState, createContext, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom';
import { useUserStore } from './store/userStore'
import HomeGeneral from './Pages/HomeGeneral'

import HomePrestadores from './Pages/HomePrestadores'
import HomePacientes from './Pages/HomePacientes'
import HomeRH from './Pages/HomeRH'
import HomeOs from './Pages/HomeOs' 
import FormularioCV from './componentes/RRHH/FormularioCV'
import BuscarPerfil from './componentes/RRHH/BuscarPerfil'
import PaginaGestionNov from './componentes/Secciones/FormulariosNovedades/PaginaGestionNov'
import Declaracion from "./componentes/RRHH/DeclaracionJurada/Declaracion"
import ArchivosU from './componentes/visualizadorArchivos/ArchivoU'
import Afiliaciones from './componentes/ObraSocial/Afiliaciones'
import {areas} from './data/constantes'
import NotFound from './Pages/NotFound'
import ReciboSueldo from './componentes/RRHH/Empleados/ReciboSueldo'
import Personal from './componentes/RRHH/PersonalEdicion/EdicionPersonal'
import PanelEdicion from './componentes/RRHH/PanelEdicion/PanelEdicion'
import EdicionPersonalForm from './componentes/RRHH/PanelEdicion/EdicionPersonalForm'
import DatosPami from './componentes/Prestadores/DatosPami';
import { publicRoutes,privatesRoutes,publicRoutes_os,adminRoutes } from './data/constantes';


export const PerfilContext= createContext();



function App() {

  const [CurrentPath, setCuerrentPath]= useState(window.location.pathname)
  const [login,setLogin]= useState(false);
  const [permisos,setPermisos]=useState({});
  const setUsuario= useUserStore((state)=>state.setUser)
  const resetPermisos= useUserStore((state)=>state.resetPermisos)

  const usuario= useUserStore((state)=>state.user)
  

  const [cartillaOpen, setCartillaOpen]= useState(false)
  const abrirCerrarCartilla=()=>{
        setCartillaOpen(!cartillaOpen);
    }
    useEffect(()=>{
      if(usuario.id != null){setLogin(true);}
    },[])

  return (
    <main className='text-mygray general '>
    <PerfilContext.Provider value={{
          abrirCerrarCartilla, cartillaOpen, login, setLogin, permisos,setPermisos
        }}>	
        <Routes>
            <Route path='/' element={<HomeGeneral area= {areas.GENERAL} />} />
            <Route path={publicRoutes.GENERAL} element={<HomeGeneral area= {areas.GENERAL} />} />
            <Route path={publicRoutes.PRESTADORES} element={<HomePrestadores area= {areas.PRESTADORES} />} />
            <Route path={publicRoutes.FORM_PAMI} element={<DatosPami area= {areas.PRESTADORES} />} />
            <Route path={publicRoutes.PACIENTES} element={<HomePacientes area= {areas.PACIENTES}/>} />
            <Route path={publicRoutes.RH} element={<HomeRH area= {areas.RRHH}/>} />
            <Route path={publicRoutes.OS} element={<HomeOs area= {areas.OS}/>} />
            {/* <Route path='/usuariopami' element={<Personal />} /> */}
            <Route path={publicRoutes_os.AFILIACIONES} element={<Afiliaciones area= {areas.OS}/>} />
            <Route path='/archivos' element={<ArchivosU area= {areas.RRHH}/>} />
            <Route path='/admin/cartilla' element={<CartillaAdministrar  area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_PERSONAL} element={<BuscarPerfil descripcion={"PERSONAL"} area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_PERSONAL_EDICION} element={<PanelEdicion area= {areas.RRHH} />} />
            <Route path={privatesRoutes.RRHH_PERSONAL_RECIBOS} element={<ReciboSueldo area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_CV} element={<FormularioCV area= {areas.RRHH}/>} />
            
            <Route path={privatesRoutes.RRHH_CV_BUSCAR} element={<BuscarPerfil descripcion={"CV"} area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_DECLARACION}  element={<Declaracion area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_ADMIN_NOVEDADES} element={<PaginaGestionNov area= {areas.GENERAL}/>} />
            <Route path='*' element={<NotFound area= {areas.GENERAL}/>} />
        </Routes>
    </PerfilContext.Provider>
    </main>
  )
}

export default App




