import { useState, createContext, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom';
import { useUserStore } from './store/userStore'
import {areas} from './data/constantes'
import NotFound from './Pages/NotFound'
import { publicRoutes,privatesRoutes,publicRoutes_os,adminRoutes } from './data/constantes';

import HomeGeneral from './Pages/Home/HomeGeneral'
import HomePrestadores from './Pages/Prestadores/HomePrestadores'
import HomePacientes from './Pages/Pacientes/HomePacientes'
import HomeRH from './Pages/RRHH/HomeRH'
import HomeOs from './Pages/OS/HomeOs' 
import FormularioCV from './Pages/RRHH/Components/FormularioCV'
import BuscarPerfil from './Pages/RRHH/Components/BuscarPerfil'
import PaginaGestionNov from './Pages/RRHH/Components/FormulariosNovedades/PaginaGestionNov'
import Declaracion from "./Pages/RRHH/Components/DeclaracionJurada/Declaracion"
// import ArchivosU from './Pages/Components/Secciones/visualizadorArchivos/ArchivoU'
import Afiliaciones from './Pages/OS/Components/Afiliaciones'
import ReciboSueldo from './Pages/RRHH/Components/Empleados/ReciboSueldo'
import PanelEdicion from './Pages/RRHH/Components/PanelEdicion/PanelEdicion'
import DatosPami from './Pages/Prestadores/Components/DatosPami';
import CartillaAdministrar from "./Pages/RRHH/Components/PanelBusqueda/CartillaAdministrar"
import PanelEdicionProfesional from './Pages/RRHH/Components/PanelBusqueda/PanelEdicionProfesional';

import { useAppStore } from './store/appStore';


export const PerfilContext= createContext();



function App() {

  const [CurrentPath, setCuerrentPath]= useState(window.location.pathname)
  const [login,setLogin]= useState(false);
  const [permisos,setPermisos]=useState({});
  const setUsuario= useUserStore((state)=>state.setUser)
  const resetPermisos= useUserStore((state)=>state.resetPermisos)
  const showSmall= useAppStore((state)=>state.showSmall)
  const setShowSmall= useAppStore((state)=>state.setShowSmall)

  const usuario= useUserStore((state)=>state.user)
  

  const [cartillaOpen, setCartillaOpen]= useState(false)

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  
  const show=()=>{     
        if(width< 1024){
            setShowSmall(true);
        } else {
            setShowSmall(false);
        }
    }

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  };
  
  useEffect(() => {
    
      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      }
  }, []);
  useEffect(() => {  
      show()
  }, [width]);


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
          {/* HOME generales */}
            <Route path='/' element={<HomeGeneral area= {areas.GENERAL} />} />
            <Route path={publicRoutes.GENERAL} element={<HomeGeneral area= {areas.GENERAL} />} />
            <Route path={publicRoutes.PRESTADORES} element={<HomePrestadores area= {areas.PRESTADORES} />} />
            <Route path={publicRoutes.FORM_PAMI} element={<DatosPami area= {areas.PRESTADORES} />} />
            <Route path={publicRoutes.PACIENTES} element={<HomePacientes area= {areas.PACIENTES}/>} />
            <Route path={publicRoutes.RH} element={<HomeRH area= {areas.RRHH}/>} />
            <Route path={publicRoutes.OS} element={<HomeOs area= {areas.OS}/>} />
            {/* <Route path='/usuariopami' element={<Personal />} /> */}
            <Route path={publicRoutes_os.AFILIACIONES} element={<Afiliaciones area= {areas.OS}/>} />
            {/* <Route path='/archivos' element={<ArchivosU area= {areas.RRHH}/>} /> */}

            {/* Recursos Humanos */}
            {/* Prestadores */}
            <Route path='/admin/cartilla' element={<CartillaAdministrar  area= {areas.RRHH}/>} />
            <Route path="/admin/profesional/:id" element={<PanelEdicionProfesional area= {areas.RRHH}/>} />
            {/* Personal*/}
            <Route path={privatesRoutes.RRHH_PERSONAL} element={<BuscarPerfil descripcion={"PERSONAL"} area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_PERSONAL_EDICION} element={<PanelEdicion area= {areas.RRHH} />} />
            <Route path={privatesRoutes.RRHH_PERSONAL_RECIBOS} element={<ReciboSueldo area= {areas.RRHH}/>} />
            {/* Nuevos ingresos */}
            <Route path={privatesRoutes.RRHH_CV} element={<FormularioCV area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_CV_BUSCAR} element={<BuscarPerfil descripcion={"CV"} area= {areas.RRHH}/>} />
            <Route path={privatesRoutes.RRHH_DECLARACION}  element={<Declaracion area= {areas.RRHH}/>} />
            {/* Novedades */}
            <Route path={privatesRoutes.RRHH_ADMIN_NOVEDADES} element={<PaginaGestionNov area= {areas.GENERAL}/>} />
            
            <Route path='*' element={<NotFound area= {areas.GENERAL}/>} /> 
        </Routes>
    </PerfilContext.Provider>
    </main>
  )
}

export default App




