import { useState, createContext, useEffect } from 'react'

import HomePrestadores from './Pages/HomePrestadores'
import HomeGeneral from './Pages/HomeGeneral'
import HomePacientes from './Pages/HomePacientes'
import HomeRH from './Pages/HomeRH'
import HomeOs from './Pages/HomeOs' 
import FormularioCV from './componentes/RRHH/FormularioCV'
import BuscarCV from './componentes/RRHH/BuscarCV'
import PaginaGestionNov from './componentes/Secciones/FormulariosNovedades/PaginaGestionNov'
import Declaracion from "./componentes/RRHH/DeclaracionJurada/Declaracion"
import ArchivosU from './componentes/visualizadorArchivos/ArchivoU'
import Afiliaciones from './componentes/ObraSocial/Afiliaciones'
import { Routes,Route } from 'react-router-dom';
import NotFound from './Pages/NotFound'
import ReciboSueldo from './componentes/RRHH/Empleados/ReciboSueldo'

export const PerfilContext= createContext();

function App() {
  const [CurrentPath, setCuerrentPath]= useState(window.location.pathname)
  const [login,setLogin]= useState(false);
  const [permisos,setPermisos]=useState({});
  const[usuario,setUsuario]=useState({algo:"algo"});

  const [verModalNovedad,setVerModalNovedad]=useState(false)
  const [novedad,setNovedad]=useState();
  const [isLoadNovedad,setIsLoadNovedad]=useState(false);

  //Gestion de permisos de usuarios
  const [permisosPrestadores,setPermisosPrestadores]=useState(false);
  const [permisosRrhh,setPermisosRrhh]=useState(false);
  const [permisosPersonal,setPermisosPersonal]=useState(false);
  const [permisosAdministradorTotal,setPermisosAdministradorTotal]=useState(false);
  const [permisosAdministradorPersonal,setPermisosAdministradorPersonal]=useState(false);
  const [permisosOsAdmin, setPermisosOsAdmin]= useState(false);

  const [cartillaOpen, setCartillaOpen]= useState(false)
  const abrirCerrarCartilla=()=>{
        setCartillaOpen(!cartillaOpen);
    }


  const quitarPermisos=()=>{
    setPermisosAdministradorTotal(false);
    setPermisosAdministradorPersonal(false);
    setPermisosPrestadores(false);
    setPermisosRrhh(false);
    setPermisosPersonal(false);
  }

  useEffect(()=>{
    if(usuario!=undefined){

      if(usuario.tipoUser===1){
        setPermisosAdministradorTotal(true);
        setPermisosAdministradorPersonal(true);
        setPermisosPrestadores(true);
        setPermisosRrhh(true);
        setPermisosPersonal(true);
        setPermisosOsAdmin(true);
      }
      else if(usuario.tipoUser===2){
        setPermisosAdministradorPersonal(true);
        setPermisosPrestadores(true);
        setPermisosRrhh(true);
        setPermisosPersonal(true);
      }
      else if(usuario.tipoUser===3){
        setPermisosRrhh(true);
      }
      else if(usuario.tipoUser===4){
        setPermisosPersonal(true);
      } else if (usuario.tipoUser===5){
        setPermisosOsAdmin(true);
      }
    }
    
  },[login])
  useEffect(()=>{
    if(localStorage.user!=undefined){
      setUsuario(localStorage.user);
      if(usuario!=undefined){
  
        if(usuario.tipoUser===1){
          setPermisosAdministradorTotal(true);
          setPermisosAdministradorPersonal(true);
          setPermisosPrestadores(true);
          setPermisosRrhh(true);
          setPermisosPersonal(true);
        }
        else if(usuario.tipoUser===2){
          setPermisosAdministradorPersonal(true);
          setPermisosPrestadores(true);
          setPermisosRrhh(true);
          setPermisosPersonal(true);
        }
        else if(usuario.tipoUser===3){
          setPermisosRrhh(true);
        }
        else if(usuario.tipoUser===4){
          setPermisosPersonal(true);
        } else if (usuario.tipoUser===5){
          setPermisosOsAdmin(true);
        }
      }
    }
    

  },[])

  const iniciarSesion=(e)=>{
    e.preventDefault;

  }


  return (
    <main className='text-mygray general '>
    <PerfilContext.Provider value={{
          abrirCerrarCartilla,permisosOsAdmin, setPermisosOsAdmin, cartillaOpen, login, setLogin, usuario, setUsuario, permisos,setPermisos, permisosAdministradorPersonal, setPermisosAdministradorPersonal,setPermisosAdministradorTotal,setPermisosPersonal,setPermisosPrestadores,setPermisosRrhh,permisosAdministradorTotal,permisosPersonal,permisosPrestadores,permisosRrhh, quitarPermisos
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
            <Route path='/rrhh/recibosueldo' element={<ReciboSueldo usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/cv' element={<FormularioCV usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/buscar' element={<BuscarCV usuarios= {"rrhh"}/>} />
            <Route path='/rrhh/declaracion' element={<Declaracion usuarios= {"rrhh"}/>} />
            <Route path='/admin/nov' element={<PaginaGestionNov usuarios= {"general"}/>} />
            <Route path='*' element={<NotFound usuarios= {"general"}/>} />
        </Routes>
    </PerfilContext.Provider>
    </main>
  )
}

export default App




