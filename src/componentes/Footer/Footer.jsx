import Icon from "../BotonesHome/Icon";




const Footer =()=>{

    const redes=[{id:1,
        "icono":"../../../public/imagenes/facebook.png",
        "link":"https://www.facebook.com/OSUOMRA",
        "color":"hover:text-blue-600",
        "nombre":"facebook"},
        {id:2,
        "icono":"../../../public/imagenes/instagram.png ",
        "link":"https://www.instagram.com/sanatorio_fnsr/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
        "color":"hover:text-orange-400",
        "nombre":"Instagram"},
        {id:3,
            "icono":"../../../public/imagenes/gorjeo.png ",
            "link":"twitter",
            "color":"hover:text-blue-700",
            "nombre":"twitter"} ]

    return(
        <>
            <div className="w-full h-150 bg-gray-100 p-10 lg:p-32 pt-10 mt-52 relative inset-x-0 bottom-0">
                <div className="flex flex-col-reverse lg:flex-row justify-around lg:justify-between ">
                <ul className=" h-32 text-center lg:text-left flex flex-col lg:flex-col justify-between">
                    <li>
                        <h4>
                            Telefono: 3364123456
                        </h4>
                    </li>
                    <li>
                        <h4>
                        Mail: contacto@fnsr.com
                        </h4>
                    </li>
                    <li>
                        <h4>
                        Dirección: Bartolomé Mitre 594
                        </h4>
                    </li>
                </ul>
                <ul className="h-32 flex  lg:flex-col justify-between">
                    {
                        redes.map(link=> 
                        <li id={link.id} className="">
                            <a href={link.link} className={link.color+" flex flex-col items-center"} >
                                <div className="h-10 w-10 ">
                                    <img src={link.icono} alt="" />
                                </div>
                                <h4 className="">{link.nombre}</h4>
                            </a>
                        </li>)
                    }
                </ul>
                </div>
                <h3 className=" text-2xl text-center font-semibold mt-28 p-2 border-b-2">Sanatorio de Alta Complejidad</h3>
                <h3 className=" text-xl text-center font-medium mb-5 p-2 ">Fundación Nuestra Señora del Rosario</h3>

            </div>
        </>
    )

}


export default Footer;