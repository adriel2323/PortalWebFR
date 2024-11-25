export const profesionalAdapter = (profesional,evento) => {
    switch (evento) {
        case "editar":
            return {
                Nombre:profesional.name,
                Especialidad: profesional.especialidad,
                Observacion: profesional.osNo
            }
        case "update":
            return {
                name: profesional.Nombre,
                especialidad:profesional.Especialidad,
                osNo:profesional.Observacion
            }

        default:
            return {
                id: profesional.id,
                Nombre:profesional.name,
                Especialidad: profesional.especialidad,
                Observacion: profesional.osNo
            }
    }
}
export const tipoEvento={
    editar:"editar",
    update:"update",
    view:"view"
}