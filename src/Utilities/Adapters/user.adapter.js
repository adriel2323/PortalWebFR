export const userAdapter = (user) => {
    return {
        id: user.id,
        name: user.name,
        admin: user.admin,
        userName: user.userName,
        ingreso: user.fechaIngreso,
        egreso: user.fechaBaja,
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
        'Nombre Usuario': perfil.userName,
        Contraseña: perfil.password,
        'Fecha Ingreso': perfil.fechaIngreso,
        'Fecha Baja': perfil.fechaBaja,
        'Link Archivos': perfil.linkArchivos,
        Area: perfil.area,
        Domicilio: perfil.domicilio,
        'Estado Civil': perfil.estadoCivil,
        'Fecha Nacimiento': perfil.fecha,
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
        userName: user['Nombre Usuario'],
        archivos: user['Link Archivos'],
        area: user.Area,
        imagen: user.Imagen,
        fechaIngreso: user['Fecha Ingreso'],
        fechaBaja: user['Fecha Baja'],
        fecha: user['Fecha Nacimiento'],
        dni: user.DNI,
        estadoCivil: user['Estado Civil'],
        domicilio: user.Domicilio,
        telefono: user.Telefono

    };
}