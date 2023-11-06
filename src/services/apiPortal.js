import axios from "axios";
export const Apiurl= "http://10.84.3.225:3001/api/";

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
        console.log(formData);
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

export async function cargarCv(form){

    try{
        const formData= new FormData()
        formData.append('nombre',form.form.nombre)
        formData.append('apellido',form.form.apellido)
        formData.append('telefono',form.form.telefono)
        formData.append('fecha',form.form.fecha)
        formData.append('area',form.form.area)
        formData.append('email',form.form.email)
        formData.append('experiencia',form.form.experiencia)
        formData.append('primario',form.form.primario)
        formData.append('institucionP',form.form.institucionP)
        formData.append('secundario',form.form.secundario)
        formData.append('institucionS',form.form.institucionS)
        formData.append('terciario',form.form.terciario)
        formData.append('institucionT',form.form.institucionT)
        formData.append('titulo',form.form.titulo)
        formData.append('archivo',form.form.archivo)
        formData.append('imagen',form.form.imagen)
        console.log(formData);
        const response= await axios({
            url: Apiurl+'rrhh/cv/cargar',
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

export async function logear(datosUsuario){
    try{
        const response= await axios({
            url: Apiurl+'login',
            method:'POST',
            data:datosUsuario,
        })
        return response

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
    buscarProfesionalClinica:"clinica/personal/busqueda/"

}

export const apiRRHHCv ={
    listaCv:"rrhh/list",
    buscarCv: "rrhh/buscar/",
}

export const apiPrestadores ={
    contacto: "prestadores/contacto"
}

