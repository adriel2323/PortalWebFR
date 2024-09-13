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

import NotFound from './Pages/NotFound'
import ReciboSueldo from './componentes/RRHH/Empleados/ReciboSueldo'
import Personal from './componentes/RRHH/PersonalEdicion/EdicionPersonal'
import PanelEdicion from './componentes/RRHH/PanelEdicion/PanelEdicion'
import EdicionPersonalForm from './componentes/RRHH/PanelEdicion/EdicionPersonalForm'


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
            <Route path='/' element={<HomeGeneral area= {"general"} />} />
            <Route path='/home' element={<HomeGeneral area= {"general"} />} />
            <Route path='/prestadores' element={<HomePrestadores area= {"prestadores"} />} />
            <Route path='/pacientes' element={<HomePacientes area= {"pacientes"}/>} />
            <Route path='/rrhh' element={<HomeRH area= {"rrhh"}/>} />
            <Route path='/obrasocial' element={<HomeOs area= {"os"}/>} />
            <Route path='/usuariopami' element={<Personal />} />
            <Route path='/obrasocial/afiliaciones' element={<Afiliaciones area= {"os"}/>} />
            <Route path='/archivos' element={<ArchivosU area= {"rrhh"}/>} />
            <Route path='/rrhh/personal' element={<BuscarPerfil descripcion={"PERSONAL"} area= {"rrhh"}/>} />
            <Route path='/rrhh/personal/perfil/:id' element={<PanelEdicion area= {"rrhh"} />} />
            <Route path='/rrhh/personal/recibosueldo' element={<ReciboSueldo area= {"rrhh"}/>} />
            <Route path='/rrhh/cv' element={<FormularioCV area= {"rrhh"}/>} />
            
            <Route path='/rrhh/buscar' element={<BuscarPerfil descripcion={"CV"} area= {"rrhh"}/>} />
            <Route path='/rrhh/declaracion' element={<Declaracion area= {"rrhh"}/>} />
            <Route path='/admin/nov' element={<PaginaGestionNov area= {"general"}/>} />
            <Route path='*' element={<NotFound area= {"general"}/>} />
        </Routes>
    </PerfilContext.Provider>
    </main>
  )
}

export default App




