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
  console.log('Este es el usuario:' , usuario);
  
  // const [permisosPrestadores,setPermisosPrestadores]=useState(false);
  // const [permisosRrhh,setPermisosRrhh]=useState(false);
  // const [permisosPersonal,setPermisosPersonal]=useState(false);
  // const [permisosAdministradorTotal,setPermisosAdministradorTotal]=useState(false);
  // const [permisosAdministradorPersonal,setPermisosAdministradorPersonal]=useState(false);
  // const [permisosOsAdmin, setPermisosOsAdmin]= useState(false);

  const [cartillaOpen, setCartillaOpen]= useState(false)
  const abrirCerrarCartilla=()=>{
        setCartillaOpen(!cartillaOpen);
    }


  const quitarPermisos=()=>{
    resetPermisos();
  }


  const iniciarSesion=(e)=>{
    e.preventDefault;

  }


  return (
    <main className='text-mygray general '>
    <PerfilContext.Provider value={{
          abrirCerrarCartilla, cartillaOpen, login, setLogin, permisos,setPermisos
        }}>	
        <Routes>
            <Route path='/' element={<HomeGeneral usuarios= {"general"} />} />
            <Route path='/home' element={<HomeGeneral usuarios= {"general"} />} />
            <Route path='/prestadores' element={<HomePrestadores usuarios= {"prestadores"} />} />
            <Route path='/pacientes' element={<HomePacientes usuarios= {"pacientes"}/>} />
            <Route path='/rrhh' element={<HomeRH usuarios= {"rrhh"}/>} />
            <Route path='/obrasocial' element={<HomeOs usuarios= {"os"}/>} />
            <Route path='/obrasocial/afiliaciones' element={<Afiliaciones usuarios= {"os"}/>} />
            <Route path='/archivos' element={<ArchivosU usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/personal' element={<BuscarPerfil descripcion={"PERSONAL"} usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/personal/perfil/:id' element={<PanelEdicion usuarios= {"rrhh"} />} />
            <Route path='/rrhh/personal/recibosueldo' element={<ReciboSueldo usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/cv' element={<FormularioCV usuarios= {"rrhh"}/>} />
            
            <Route path='/rrhh/buscar' element={<BuscarPerfil descripcion={"CV"} usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/declaracion' element={<Declaracion usuarios= {"rrhh"}/>} />
            <Route path='/admin/nov' element={<PaginaGestionNov usuarios= {"general"}/>} />
            <Route path='*' element={<NotFound usuarios= {"general"}/>} />
        </Routes>
    </PerfilContext.Provider>
    </main>
  )
}

export default App




