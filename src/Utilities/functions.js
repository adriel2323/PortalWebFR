import axios from "axios"
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
            permisosAdministrativos:true,
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
            permisosAdministrativos:true,
            permisosPersonal: true,
            permisosAdministradorPersonal: true,
            permisosOsAdmin: false
          }
        }
        else if(usuario.tipoUser===3){
          permisos={
            permisosRrhh: false,
            permisosAdministrativos:false,
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
                permisosAdministrativos:true,
                permisosPersonal: true,
                permisosAdministradorTotal: false,
                permisosAdministradorPersonal: false,
                permisosOsAdmin: false,

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

export function usuarioLocalStorage(){
  if(localStorage.getItem('user')){
    let usuario=JSON.parse(localStorage.getItem('user'));
    if(usuario.id != null){
      return usuario
    } else{
      return false
    }
  }
}

export async function enviarForm(form, url){
  console.log('Este es el form:',form);
  

  let formKeys= Object.keys(form)
  try {
      const formData = new FormData();
      for(let i=0;i<formKeys.length;i++){
        formData.append(formKeys[i], form[formKeys[i]])
      }
      console.log('Este es el formData:',formData);
      
      const response = await axios({
        url: url,
        method: 'POST',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response
    }
    catch (error) {
      console.log(error)
    }
}