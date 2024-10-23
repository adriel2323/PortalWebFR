import { formToJSON } from "axios"

export const publicRoutes= {
    GENERAL: "/home",
    PACIENTES: "/pacientes",
    RH: "/rrhh",
    OS: "/obrasocial",
    CONTACTOS: "/contactos",
    QUIENES_SOMOS: "/quienessomos",
    PRESTADORES: "/prestadores",
    OBRA_SOCIAL: "/obrasocial",
    USUARIO_PAMI: '/usuariopami',
    FORM_PAMI: '/prestadores/pami',
}
export const publicRoutes_os= {
    GENERAL: "/os",
    PACIENTES: "/pacientes",
    RH: "/rrhh",
    AFILIACIONES: '/obrasocial/afiliaciones',
    CONTACTOS: "/os/contactos",
    QUIENES_SOMOS: "/quienessomos",
    PRESTADORES: "/os/prestadores",
}
export const privatesRoutes= {
    RH: "/personal/rrhh",
    PRESTADORES: "/personal/prestadores",
    GENERAL: "/personal/novedades",
    CONTACTOS: "/personal/contactos",
    OBRA_SOCIAL: "/personal/os",
}
export const adminRoutes= {
    ADMIN: "/admin",
    ADMIN_NOVEDADES: "/admin/novedades",
    ADMINISTRAR_USUARIOS:'/admin/usuarios',
    ADMINISTRAR_PACIENTES:'/admin/pacientes',
    ADMINISTRAR_PRESTADORES:'/admin/prestadores',
    ADMINISTRAR_OBRA_SOCIAL:'/admin/obrasocial',
    ADMINISTRAR_CONTACTOS:'/admin/contactos',
    ADMINISTRAR_SISTEMAS:'/admin/sistemas',
    ADMINISTRAR_RH:'/admin/rh',
}

export const usersLog=[ "prestadores","rrhh","os","personal","admin","sistemas"]

export const areas={
    GENERAL: "general",
    PRESTADORES: "prestadores",
    RRHH: "rrhh",
    OS: "os",
    ADMIN: "admin",
    PERSONAL: "personal",
    SISTEMAS: "sistemas",
    PACIENTES: "pacientes",
}

export const links= [
    {
        "id": 1,
        "titulo": "Portal de pacientes",
        "link": "https://portal.fnsr.com.ar",
        "fecha": "2023-03-22",
        "area": "sistemas",
        "icono": "faHospitalUser"
    },
    {
        "id": 2,
        "titulo": "PAMI",
        "link": "https://www.pami.org.ar/preinicio",
        "fecha": "2023-03-22",
        "area": "pami",
        "icono": "faMoneyCheck"
    },
    {
        "id": 3,
        "titulo": "Diagnostico por imagenes",
        "link": "https://imagenes.fnsr.com.ar",
        "fecha": "2023-03-22",
        "area": "sistemas",
        "icono": "faHospitalUser"
    },
    {
        "id": 4,
        "titulo": "Geclisa web",
        "link": "https://geclisa.fnsr.com.ar",
        "fecha": "2023-03-22",
        "area": "sistemas",
        "icono": "faLaptopMedical"
    },
    {
        "id": 5,
        "titulo": "OME y Recetas(PAMI)",
        "link": "https://cup.pami.org.ar/controllers/loginController.php",
        "fecha": "2023-03-22",
        "area": "pami",
        "icono": "faPeopleRoof"
    },
    {
        "id": 6,
        "titulo": "Sistema de bonos",
        "link": "https://bonos.fnsr.com.ar",
        "fecha": "2023-03-22",
        "area": "sistemas",
        "icono": "faMoneyCheck"
    },
    {
        "id": 7,
        "titulo": "Archivos",
        "link": "https://archivos.fnsr.com.ar/",
        "fecha": "2023-03-22",
        "area": "sistemas",
        "icono": "faChalkboardUser"
    },
    {
        "id": 8,
        "titulo": "Cartilla Médica",
        "link": "/",
        "fecha": "2023-03-22",
        "area": "sistemas",
        "icono": "faHospitalUser"
    },
    {
        "id": 9,
        "titulo": "Interconsultas",
        "link": "https://interconsultas.fnsr.com.ar",
        "fecha": "2023-03-22",
        "area": "pacientes",
        "icono": "faNotesMedical"
    },
    {
        "id": 10,
        "titulo": "Turnos",
        "link": "https://turnos.fnsr.com.ar",
        "fecha": "2023-03-22",
        "area": "pacientes",
        "icono": "faCalendarCheck"
    },
    {
        "id": 11,
        "titulo": "Instructivos",
        "link": "https://archivos.fnsr.com.ar/index.php/apps/files/?dir=/Instructivos",
        "fecha": "2023-03-22",
        "area": "personal",
        "icono": "faUsers"
    },
    {
        "id": 12,
        "titulo": "Agregar novedad",
        "link": "/admin/nov",
        "fecha": "2023-03-22",
        "area": "rrhh_admin",
        "icono": "faSquarePlus"
    },
    {
        "id": 13,
        "titulo": "Buscar CV",
        "link": "/rrhh/buscar",
        "fecha": "2023-03-22",
        "area": "rrhh_admin",
        "icono": "faRectangleList"
    }
]
export const botones= {
    "general":[
        {
            "id":1,
            "titulo":"Obra Social",
            "icono":"faGear",
            "link":"/obrasocial",
            "redir":0
        },
        {
            "id":2,
            "titulo":"Sanatorio",
            "link":"/",
            "icono":"faHospital",
            "redir":0
        },
        {
            "id":3,
            "titulo":"Portal de Pacientes",
            "link":"https://portal.fnsr.com.ar",
            "icono":"faHospitalUser",
            "redir":1
        },
        {
            "id":7,
            "titulo":"Prestadores",
            "link":"/prestadores",
            "icono":"faUserDoctor",
            "redir":0
        },
        {
            "id":4,
            "titulo":"PAMI",
            "link":"https://www.pami.org.ar/preinicio",
            "icono":"faMoneyCheck",
            "redir":1
        },
        {
            "id":5,
            "titulo":"Laboratorio",
            "link":"https://portal.fnsr.com.ar",
            "icono":"faFlaskVial",
            "redir":1
        },
        {
            "id":6,
            "titulo":"ART",
            "link":"https://www.argentina.gob.ar/srt/art",
            "icono":"faHelmetSafety",
            "redir":1
        }
    ],
    "prestadores":[
            {
                "id":1,
                "titulo":"Interconsulta",
                "link":"interconsultas.fnsr.com.ar",
                "icono":"faNotesMedical",
                "redir":1
            },
            {
                "id":2,
                "titulo":"Geclisa Web",
                "link":"geclisa.fnsr.com.ar",
                "icono":"faLaptopMedical",
                "redir":1
            },
            {
                "id":3,
                "titulo":"OME y Recetas(PAMI)",
                "link":"https://cup.pami.org.ar/controllers/loginController.php",
                "icono":"faPeopleRoof",
                "redir":1
            },
            {
                "id":4,
                "titulo":"Sistema de bonos",
                "link":"bonos.fnsr.com.ar",
                "icono":"faMoneyCheck",
                "redir":1
            },
            {
                "id":5,
                "titulo":"Instructivos",
                "link":"archivos.fnsr.com.ar",
                "icono":"faChalkboardUser",
                "redir":1
            }
        ],
    "os_admin":[
            
            {
                "id":1,
                "titulo":"Afiliaciones online",
                "icono":"faPersonCirclePlus",
                "link":"/obrasocial/afiliaciones",
                "redir":0
            },
            {
                "id":2,
                "titulo":"Asociate",
                "link":"/obrasocial/afiliaciones",
                "icono":"faSquarePlus",
                "redir":0
            },
            {
                "id":3,
                "titulo":"Administrar cartilla",
                "link":"/obrasocial/admin/cartilla",
                "icono":"faGear",
                "redir":0
            },

            {
                "id":4,
                "titulo":"Ver afiliaciones",
                "link":"/obrasocial/admin/afiliaciones",
                "icono":"faUsers",
                "redir":0
            },
        ],
    "os":[
            {
                "id":1,
                "titulo":"Afiliaciones online",
                "icono":"faPersonCirclePlus",
                "link":"/obrasocial/afiliaciones",
                "redir":0
            },
            {
                "id":2,
                "titulo":"Asociate",
                "link":"/obrasocial/afiliaciones",
                "icono":"faSquarePlus",
                "redir":0
            },
        ],
    "pacientes":[
            {
                "id":2,
                "titulo":"Turnos Online",
                "link":"https://turnos.fnsr.com.ar",
                "icono":"faCalendarCheck",
                "redir":1
            },
            {
                "id":3,
                "titulo":"Portal de Pacientes",
                "link":"https://portal.fnsr.com.ar",
                "icono":"faHospitalUser",
                "redir":1
            },
            {
                "id":4,
                "titulo":"PAMI",
                "link":"https://www.pami.org.ar/preinicio",
                "icono":"faMoneyCheck",
                "redir":1
            },
            {
                "id":5,
                "titulo":"Laboratorio",
                "link":"https://portal.fnsr.com.ar",
                "icono":"faFlaskVial",
                "redir":1
            },
            {
                "id":6,
                "titulo":"ART",
                "link":"https://www.argentina.gob.ar/srt/art",
                "icono":"faHelmetSafety",
                "redir":1
            }
        ],
    "rrhh":[
            {
                "id":1,
                "titulo":"Capacitaciones",
                "link": "https://archivos.fnsr.com.ar/index.php/apps/files/?dir=/Instructivos",
                "icono":"faUsers",
                "redir":0
            }
        ],
    "rrhh_admin":[
            
            {
                "id":1,
                "titulo":"Agregar novedad",
                "icono":"faSquarePlus",
                "link":"/admin/nov",
                "redir":0
            },
            {
                "id":2,
                "titulo":"Buscar CV",
                "link":"/rrhh/buscar",
                "icono":"faRectangleList",
                "redir":0
            },
            {
                "id":3,
                "titulo":"Capacitacioness",
                "link":"https://archivos.fnsr.com.ar",
                "icono":"faUsers",
                "redir":1
            },

            {
                "id":4,
                "titulo":"Editar Usuarios",
                "link":"/rrhh/personal",
                "icono":"faUserPen",
                "redir":0
            },
        ]
}

export const sections= {
    "public": [
        {
            "id":1,
            "titulo": "Quienes somos",
            "link":publicRoutes.QUIENES_SOMOS,
            "icon":"faGear"           
        },
        {
            "id":2,
            "titulo": "Novedades",
            "link":publicRoutes.GENERAL,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":3,
            "titulo": "Contactos",
            "link":publicRoutes.CONTACTOS,
            "icon":"fa-solid fa-gear"          
        },
        {
            "id":4,
            "titulo": "Prestadores",
            "link":publicRoutes.PRESTADORES,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":5,
            "titulo": "Obra social",
            "link":publicRoutes.OBRA_SOCIAL,
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":6,
            "titulo": "Pacientes",
            "link":publicRoutes.PACIENTES,
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":7,
            "titulo": "RR.HH.",
            "link":publicRoutes.RH,
            "icon":"fa-solid fa-gear"           
        }
    ],
    "privates": [
        
        {
            "id":2,
            "titulo": "Novedades",
            "link":privatesRoutes.GENERAL,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":3,
            "titulo": "Contactos",
            "link":privatesRoutes.CONTACTOS,
            "icon":"fa-solid fa-gear"          
        },
        {
            "id":4,
            "titulo": "Prestadores",
            "link":privatesRoutes.PRESTADORES,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":5,
            "titulo": "Obra social",
            "link":privatesRoutes.OBRA_SOCIAL,
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":7,
            "titulo": "RR.HH.",
            "link":privatesRoutes.RH,
            "icon":"fa-solid fa-gear"           
        }
    ],
    "admin": [
        
        {
            "id":2,
            "titulo": "Novedades",
            "link":adminRoutes.ADMIN_NOVEDADES,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":3,
            "titulo": "Contactos",
            "link":adminRoutes.ADMINISTRAR_CONTACTOS,
            "icon":"fa-solid fa-gear"          
        },
        {
            "id":4,
            "titulo": "Prestadores",
            "link":adminRoutes.ADMINISTRAR_PRESTADORES,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":5,
            "titulo": "Obra social",
            "link":adminRoutes.ADMINISTRAR_OBRA_SOCIAL,
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":7,
            "titulo": "RR.HH.",
            "link":adminRoutes.ADMINISTRAR_RH,
            "icon":"fa-solid fa-gear"           
        }
    ],
    "sistemas": [
        {
            "id":2,
            "titulo": "Novedades",
            "link":adminRoutes.ADMIN_NOVEDADES,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":3,
            "titulo": "Contactos",
            "link":adminRoutes.ADMINISTRAR_CONTACTOS,
            "icon":"fa-solid fa-gear"          
        },
        {
            "id":4,
            "titulo": "Prestadores",
            "link":publicRoutes.PRESTADORES,
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":5,
            "titulo": "Obra social",
            "link":publicRoutes.OBRA_SOCIAL,
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":7,
            "titulo": "RR.HH.",
            "link":publicRoutes.RH,
            "icon":"fa-solid fa-gear"           
        }
    ],
    "os": [
        
        {
            "id":3,
            "titulo": "Novedades",
            "link":publicRoutes.GENERAL,
            "icon":""            
        },
        {
            "id":4,
            "titulo": "Contactos",
            "link":publicRoutes_os.CONTACTOS,
            "icon":""            
        },
        {
            "id":5,
            "titulo": "Prestadores",
            "link":publicRoutes_os.PRESTADORES,
            "icon":""            
        },
        {
            "id":5,
            "titulo": "Pacientes",
            "link":publicRoutes_os.PACIENTES,
            "icon":""            
        }
    ],
}

export const dropList={
    "empleadosList" :[
        {
            "id":1,
            "titulo":"Recibo de sueldo",
            "link": "/rrhh/personal/recibosueldo",
            "logged":1
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "/",
            "logged":1
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/archivos",
            "logged":1
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        }
    ],
    "trabajaList" :[
        {
            "id":1,
            "titulo":"Carga tu curricullum",
            "link": "/rrhh/cv",
            "logged":0
        },
        {
            "id":5,
            "titulo":"Declaración Jurada",
            "link": "/rrhh/declaracion",
            "logged":0
        },
        {
            "id":2,
            "titulo":"Areas de trabajo",
            "link": "/",
            "logged":0
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "https://archivos.fnsr.com.ar/index.php/s/cMGrFHiEbTYWo5y",
            "logged":0
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        }
    ],
    "documentacion":[
        {
            "id":1,
            "titulo":"Documentación de ingreso",
            "link": "https://archivos.fnsr.com.ar/index.php/s/cMGrFHiEbTYWo5y",
            "logged":1
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "https://archivos.fnsr.com.ar/index.php/s/tiQD99iS8YRKFFa",
            "logged":1
        },
        {
            "id":3,
            "titulo":"Preguntas frecuentes",
            "link": "/archivos",
            "logged":1
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/",
            "logged":0
        },
    ],
    "pami":[
        {
            "id":1,
            "titulo":"Datos necesarios para alta en PAMI ",
            "link": publicRoutes.FORM_PAMI,
            "logged":0
        },
        {
            "id":2,
            "titulo":"Sitio Oficial",
            "link": "https://www.pami.org.ar/",
            "logged":0
        },
        {
            "id":3,
            "titulo":"Sistema de ordenes y recetas",
            "link": "https://cup.pami.org.ar/controllers/loginController.php",
            "logged":0
        },
        
    ]
}
export const logos= [
    {"fnsr":"link"},
    {"uom":"link"}
]

export const messegesError= {
    'ERROR_LOGIN': 'Usuario o contraseña incorrectos',
    'ERROR_AUTH': 'No tiene autorizaciones para ver este apartado',
    'ERROR_NOT_FOUND': 'No se encontro la pagina solicitada',
}
export const messegesResult = {
    'OK': 'OK',
    'ERROR_UNEXPECTED': 'Ha ocurrido un error inesperado, vuelva a intentar más tarde.',
    'SIN_RESULTADOS': 'No se encontraron resultados para la busqueda realizada. Compruebe los datos ingresados y vuelva a intentarlo.',
    'ERROR_AUTH': 'ERROR_AUTH',
    'ERROR_NOT_FOUND': 'ERROR_NOT_FOUND',
}
export const formulario = {
    types:{
        input:"input",
        textarea:"textarea",
        select:"select",
        radio:"radio",
    }
}
export const formObject = {
    titulo: "Formulario de contacto",

    form:[
        {
            id:1,
            type:formulario.types.input,
            label: {
                for: "name",
                text: "Ingrese su nombre",
            },
            input: {
                type: "text",
                name: "name",
                id: "name",
                placeholder: "Ej. Juan",
                required: true
            },
        },
        {
            id:4,
            type:formulario.types.input,
            label: {
                for: "email",
                text: "Ingrese su email",
            },
            input: {
                type: "text",
                name: "email",
                id: "email",
                placeholder: "ejemplo@gmail.com",
                required: true
            },
        },
        {
            id:1,
            type:formulario.types.select,
            label: {
                for: "area",
                text: "Seleccione el area",
            },
            input:{
                name:"area",
                id:"area",
                required: true
            },
            options: [
                {
                    id:0,
                    value: "default",
                    text: "--Elija una opción--",
                },
                {
                    id:2,
                    value: "sistemas",
                    text: "Sistema",
                },
                {
                    id:3,
                    value: "facturacion",
                    text: "Facturación",
                },
                {
                    id:4,
                    value: "personal",
                    text: "Personal",
                },
                {
                    id:5,
                    value: "mantenimiento",
                    text: "Mantenimiento",
                },
            ],
        },
        {
            id:3,
            type:formulario.types.textarea,
            label: {
                for: "texto",
                text: "Consulta",
            },
            input: {
                type: "text",
                name: "texto",
                id: 3,
                placeholder: "Ingrese su consulta",
                required: true
            },
        },
        

    ]

}