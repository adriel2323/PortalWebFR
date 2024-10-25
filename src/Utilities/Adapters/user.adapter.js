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
        tipoUser:user.tipoUser,
    };
}

export const perfilAdapter= (perfil)=> {
    return {
        id: perfil.id,
        Nombre: perfil.name,
        Permisos: perfil.admin,
        Nombre_Usuario: perfil.userName,
        Fecha_Ingreso: perfil.fechaIngreso,
        Link_Archivos: perfil.linkArchivos,
        Area: perfil.area,
        Domicilio: perfil.domicilio,
        Estado_Civil: perfil.estadoCivil,
        Fecha_Nacimiento: perfil.fecha,
        DNI: perfil.dni,
        Telefono: perfil.telefono,
        Imagen: perfil.imagen
    };
}