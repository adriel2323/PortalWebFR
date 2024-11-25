export const profesionalAdapter = (profesional,evento) => {
    switch (evento) {
        case "editar":
            return {
                nombre:profesional.name,
                especialidad: profesional.especialidad,
                observacion: profesional.osNo
            }
        case "update":
            return {
                id:profesional.id,
                name: profesional.nombre,
                especialidad:profesional.especialidad,
                osNo:profesional.observacion
            }

        default:
            return {
                id: profesional.id,
                nombre:profesional.name,
                especialidad: profesional.especialidad,
                observacion: profesional.osNo
            }
    }
}
export const tipoEvento={
    editar:"editar",
    update:"update",
    view:"view"
}