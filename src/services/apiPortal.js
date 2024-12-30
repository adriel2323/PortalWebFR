import axios from "axios";
import { userAdapter } from "../Utilities/Adapters/user.adapter";
export const Apiurl= "http://10.84.1.112:3002/api/";

export const apiPortal = {
    enviarCV: "rrhh/cv/cargar",
    imagenNovedad: "novedades/imagenes/",
    imagenNovDefault:"novedades/imagenes/imageDefault",
    declaracionJurada: "rrhh/declaraciones"

}

export const MESSAGES= {
    SIN_RESULTADOS_MESSAGE: "No se encontraron resultados de la busqueda",
    TEXTO_GENERICO_NOV:"Busca en nuestro portal las ultimas noticias..",
    ERROR_ENVIO_FORMULARIO: "Error al enviar el formulario, vuelva a intentarlo más tarde",
    ENVIO_EXITOSO:"Su declaracion ha sido enviada correctamente, le llegara un mail con los datos de la misma."
}
const errorMSG= "Credenciales invalidas";

export async function cargarNovedad(form){

    try{
        console.log("este es el formulario",form);
        const formData= new FormData()
        formData.append('idCreate',form.form.idCreate)
        formData.append('titulo',form.form.titulo)
        formData.append('fecha',form.form.fecha)
        formData.append('area',form.form.area)
        formData.append('descripcion',form.form.descripcion)
        formData.append('imagen',form.form.imagen)
        
        const response= await axios({
            url: Apiurl+'cargarnovedad',
            method:'POST',
            data:formData,
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        return response
        
        } catch(e){
        console.log(e);
    }
}

// export async function cargarCv(form){
    
//     try{
//         const formData= new FormData()
//         formData.append('nombre',form.form.nombre)
//         formData.append('apellido',form.form.apellido)
//         formData.append('telefono',form.form.telefono)
//         formData.append('fecha',form.form.fecha)
//         formData.append('area',form.form.area)
//         formData.append('email',form.form.email)
//         formData.append('experiencia',form.form.experiencia)
//         formData.append('primario',form.form.primario)
//         formData.append('institucionP',form.form.institucionP)
//         formData.append('secundario',form.form.secundario)
//         formData.append('institucionS',form.form.institucionS)
//         formData.append('terciario',form.form.terciario)
//         formData.append('institucionT',form.form.institucionT)
//         formData.append('titulo',form.form.titulo)
//         formData.append('archivo',form.form.archivo)
//         formData.append('imagen',form.form.imagen)

//         console.log(formData);
        
//         const response= await axios({
//             url: Apiurl+'rrhh/cv/cargar',
//             method:'POST',
//             data:formData,
//             headers:{
//                 'Content-Type':'multipart/form-data'
//             }
//         })
//         return response
//         } catch(e){
//         console.log(e);
//     }
// }

export async function logear(datosUsuario){
    try{
        let usuario= {}
        const response= await axios({
            url: Apiurl+'login',
            method:'POST',
            data:datosUsuario,
        })
        if(response.data.msg!=errorMSG){
            usuario= userAdapter(response.data.user)

        } else {
            usuario={
                msg: 'Credenciales invalidas'
            }
        }

        return usuario

    } catch(e){
        console.log(e);
    }
}

export async function enviarConsulta(consulta){
    try{
        const response= await axios({
            url: Apiurl+'consultas',
            method:'POST',
            data:consulta,
        })
        return response

    } catch(e){
        console.log(e);
    }
}
export async function listaProfesionales(){
    try{
        const response= await axios({
            url: Apiurl+'clinica/personal/lista/profesionales',
            method:'GET',
        })
        return response

    } catch(e){
        console.log(e);
    }
}
export async function listaTipo(tipo){
    try{
        const response= await axios({
            url: Apiurl+'obrasocial/cartillaLista/'+tipo,
            method:'GET',
        })
        return response

    } catch(e){
        console.log(e);
    }
}
export async function buscarEspecialidades(especialidad){
    try{
        const response= await axios({
            url: Apiurl+'obrasocial/cartillaBusqueda/1$'+especialidad+'$',
            method:'GET',
        })
        return response

    } catch(e){
        console.log(e);
    }
}

export const apiBusquedas={
    especialidadesOs: "obrasocial/cartilla/especialidades/1",
    farmaciasLocalidadesOs: "obrasocial/cartilla/especialidades/2",
    laboratoriosLocalidadesOs: "obrasocial/cartilla/especialidades/3",
    buscarProfesionalOs:"obrasocial/cartillaBusqueda/1$",
    buscarFarmaciaOs:"obrasocial/cartillaBusqueda/2$",
    buscarLaboratorioOs:"obrasocial/cartillaBusqueda/3$",

    buscarAdminCartilla:"obrasocial/cartillaAdmin/",

    especialidadesClinica:"clinica/personal/lista/especialidades",
    profesionalesClinica:"clinica/personal/lista/profesionales",
    buscarProfesionalClinica:"clinica/personal/busqueda/",
    //Editar 
    editarProfesionalesClinica:"clinica/profesional/editar/"

}

export const apiRRHHCv ={
    listaCv:"rrhh/list",
    buscarCv: "rrhh/buscar/",
    listaPersonal:"rrhh/personal/lista",
    buscarPersonal: "rrhh/personal/buscar/",
    perfilPersonal: "rrhh/personal/perfil/",
    editarPerfilPersonal: "rrhh/admin/perfil/",
    actualizarPerfil: "rrhh/admin/editar/",
}


export const apiPrestadores ={
    contacto: "prestadores/contacto",
    alta_pami: "prestadores/altapami"
}

export const apiLinks ={
    LINKS_BOTONES: "links"
}

