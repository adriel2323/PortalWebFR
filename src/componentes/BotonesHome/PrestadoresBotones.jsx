import Buttom from '../BotonesHome/Buttom'


const HomeBotones=({data})=>{
    const usuario= "prestadores"

    const botonesData={
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
        ]
    }
    const botones = botonesData.prestadores

    return(
    <div className="solapar grid-buttoms">
        { botones.map(boton => 
            <Buttom redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link} />
        ) }
        
    </div>
    )
}
export default HomeBotones;