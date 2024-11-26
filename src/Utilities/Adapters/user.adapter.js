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
        Contraseña: perfil.password,
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
export const userEditAdapter = (user) => {
    return {
        id: user.id,
        name: user.Nombre,
        admin: user.Permisos,
        userName: user.Nombre_Usuario,
        archivos: user.Link_Archivos,
        area: user.Area,
        imagen: user.Imagen,
        fechaIngreso: user.Fecha_Ingreso,
        fecha: user.Fecha_Nacimiento,
        dni: user.DNI,
        estadoCivil: user.Estado_Civil,
        domicilio: user.Domicilio,
        telefono: user.Telefono

    };
}