export const profesionalAdapter = (profesional,evento) => {
    if(evento==="update"){
        return {
            Nombre:profesional.name,
            Especialidad: profesional.especialidad,
            Observacion: profesional.osNo
        }
    } 
    return {
        id: profesional.id,
        Nombre:profesional.name,
        Especialidad: profesional.especialidad,
        Observacion: profesional.osNo
    }
}
export const tipoEvento={
    update:"update",
    view:"view"
}