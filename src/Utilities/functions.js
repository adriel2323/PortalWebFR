import { links } from "../data/constantes"

export function usuariosValidos(usuarios){
    let nav={
        'admin':'admin',
        'privates':'privates',
        'os':'os',
        'sistemas':'sistemas',
        'public':'public',
    }

    if(usuarios==="admin" ||  usuarios==="sistemas" || usuarios==="rrhh"){
        return nav.admin
    }else if(usuarios==="prestadores" ||  usuarios==="personal" ){
        return nav.privates
    } else{
        return nav.public
    }
}

export function permisosValidos(usuario){
    let permisos= {
        permisosPrestadores: false,
        permisosRrhh: false,
        permisosPersonal: false,
        permisosAdministradorTotal: false,
        permisosAdministradorPersonal: false,
        permisosOsAdmin: false
    }
    if(usuario !=undefined ){
      
        if(usuario.tipoUser===1){
          permisos={
            permisosPrestadores: true,
            permisosRrhh: true,
            permisosPersonal: true,
            permisosAdministradorTotal: true,
            permisosAdministradorPersonal: true,
            permisosOsAdmin: true
          }
        }
        else if(usuario.tipoUser===2){
          permisos={
            permisosPrestadores: true,
            permisosRrhh: true,
            permisosPersonal: true,
            permisosAdministradorPersonal: true,
            permisosOsAdmin: false
          }
        }
        else if(usuario.tipoUser===3){
          permisos={
            permisosRrhh: false,
            permisosPersonal: false,
            permisosPersonal: true,
            permisosOsAdmin: false,
            permisosAdministradorPersonal: false,
            permisosAdministradorTotal: false
          }
        }
        else if(usuario.tipoUser===4){
            permisos= {
                permisosPrestadores: false,
                permisosRrhh: false,
                permisosPersonal: true,
                permisosAdministradorTotal: false,
                permisosAdministradorPersonal: false,
                permisosOsAdmin: false
            }
        } else if (usuario.tipoUser===5){
            permisos= {
                permisosPrestadores: false,
                permisosRrhh: false,
                permisosPersonal: false,
                permisosAdministradorTotal: false,
                permisosAdministradorPersonal: false,
                permisosOsAdmin: true
            }
        }
      }
    
    return permisos
}

export function buscarBotones(ids){
    let botones=[]
    for(let i=0;i<ids.length;i++){
        botones.push(links[ids[i]])
    }
    
    return botones
}