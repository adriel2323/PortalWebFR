import Buttom from "./Buttom";

const HomeBotones=()=>{
    const botonesData={
        "prestadores":[
            
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
        ]
    }
    

    return(
    <div className="solapar grid-buttoms">
        { botonesData.prestadores.map(boton =>
            <Buttom key={boton.id} redir={boton.redir} titulo={boton.titulo} icono={boton.icono} link= {boton.link} />
        )}    
        
    </div>
    )
}

export default HomeBotones;