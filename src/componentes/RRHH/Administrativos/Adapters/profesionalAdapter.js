export const profesionalAdapter = (profesional) => {
    return {
        id: profesional.id,
        nombre:profesional.name,
        especialidad: profesional.especialidad,
        observacion: profesional.osNo
    }
}