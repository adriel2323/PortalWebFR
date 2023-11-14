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
          abrirCerrarCartilla,permisosOsAdmin, setPermisosOsAdmin, cartillaOpen, login, setLogin, usuario, setUsuario, permisos,setPermisos, permisosAdministradorPersonal, setPermisosAdministradorPersonal,setPermisosAdministradorTotal,s>
        }}>
        <Routes>
            <Route path='/' element={<HomeGeneral usuarios= {"general"} />} />
            <Route path='/prestadores' element={<HomePrestadores usuarios= "prestadores" />} />
            <Route path='/pacientes' element={<HomePacientes usuarios= {"pacientes"}/>} />
            <Route path='/rrhh' element={<HomeRH usuarios= {"rrhh"}/>} />
            <Route path='/obrasocial' element={<HomeOs usuarios= {"os"}/>} />
            <Route path='/obrasocial/afiliaciones' element={<Afiliaciones usuarios= {"os"}/>} />
            <Route path='/archivos' element={<ArchivosU usuarios= {"rrhh"}/>} />
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
