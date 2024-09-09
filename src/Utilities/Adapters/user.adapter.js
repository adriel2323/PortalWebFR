export const userAdapter = (user) => {
    return {
        id: user.id,
        name: user.name,
        admin: user.admin,
        userName: user.userName,
        ingreso: user.fechaIngreso,
        archivos: user.linkArchivos,
        area: user.area,
        imagen: user.imagen,
        permisos: null,
    };
}