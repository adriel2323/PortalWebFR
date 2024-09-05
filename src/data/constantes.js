export const publicRoutes= {
    GENERAL: "/",
    PACIENTES: "/pacientes",
    RH: "/rrhh",
    OS: "/os",
    CONTACTOS: "/contactos",
}
export const privatesRoutes= {
    PRESTADORES: "/prestadores",
    RH: "/rrhh",
    OS: "/os",
}

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
                "link":"turnos.fnsr.com.ar",
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

export const sections=[ {
    "public": [
        {
            "id":1,
            "titulo": "Quienes somos",
            "link":"/quienessomos",
            "icon":"faGear"           
        },
        {
            "id":2,
            "titulo": "Novedades",
            "link":"/",
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":3,
            "titulo": "Contactos",
            "link":"/contactos",
            "icon":"fa-solid fa-gear"          
        },
        {
            "id":4,
            "titulo": "Prestadores",
            "link":"/prestadores",
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":5,
            "titulo": "Obra social",
            "link":"/obrasocial",
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":6,
            "titulo": "Pacientes",
            "link":"/pacientes",
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":7,
            "titulo": "RR.HH.",
            "link":"/rrhh",
            "icon":"fa-solid fa-gear"           
        }
    ],
    
    "privates": [
        
        {
            "id":2,
            "titulo": "Novedades",
            "link":"/",
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":3,
            "titulo": "Contactos",
            "link":"/contactos",
            "icon":"fa-solid fa-gear"          
        },
        {
            "id":4,
            "titulo": "Prestadores",
            "link":"/prestadores",
            "icon":"fa-solid fa-gear"            
        },
        {
            "id":5,
            "titulo": "Obra social",
            "link":"/obrasocial",
            "icon":"fa-solid fa-gear"           
        },
        {
            "id":7,
            "titulo": "RR.HH.",
            "link":"/rrhh",
            "icon":"fa-solid fa-gear"           
        }
    ],
    "os": [
        
        {
            "id":3,
            "titulo": "Novedades",
            "link":"/",
            "icon":""            
        },
        {
            "id":4,
            "titulo": "Contactos",
            "link":"/contactos",
            "icon":""            
        },
        {
            "id":5,
            "titulo": "Prestadores",
            "link":"/prestadores",
            "icon":""            
        },
        {
            "id":5,
            "titulo": "Pacientes",
            "link":"/pacientes",
            "icon":""            
        }
    ],
}]

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
            "link": "/archivos",
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
            "link": "/",
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
            "link": "/",
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