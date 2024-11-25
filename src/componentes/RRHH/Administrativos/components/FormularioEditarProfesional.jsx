import { useForm } from "react-hook-form";

const FormularioEditarProfesional = ({formularioPrev}) => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            ...formularioPrev
        }
    });
    
    return (
        <div className="  bg-white text-mygray px-5 lg:px-10 py-5  rounded-lg mt-[2rem] drop-shadow-xl w-3/4">
            <form action="">
                <>
                    <label className="  form-label " htmlFor="nombre">Nombre:</label>
                    <input className="form-input" type="text" name="nombre"   {...register("Nombre")}/>
                </>
                <div className=" flex flex-col justify-center mt-12 mb-4">
                    <input className="form-buttom-send mb-4 " type="submit" value="Enviar" />
                    <input className="form-buttom-borrar" type="reset" value="Borrar" />
                </div>
            </form>
            
        </div>
    );
}

export default FormularioEditarProfesional;
