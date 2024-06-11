import FormularioContactoMail from "../Formularios/FormularioContactoMail"

const ContactoMail =()=>{

    return(
        <div className="flex flex-col place-items-center h-[35rem] mb-[30rem] xl:px-52 py-16 bg-secondary text-white">
            <div >
                <h1 className=" text-4xl font-bold text-center ">Contactanos</h1>
                <p className=" px-10 mx-auto my-5 text-center md:w-3/4">Ante cualquier consulta que tengas podes comunicarte con nosotros y te responderemos a la brevedad</p>
            </div>
            <FormularioContactoMail/>
        </div>
    )


};

export default ContactoMail;