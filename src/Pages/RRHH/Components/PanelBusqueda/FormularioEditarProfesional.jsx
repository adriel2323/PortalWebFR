import { useForm } from "react-hook-form";
import axios from "axios";
import { profesionalAdapter, tipoEvento } from "../../Adapters/profesionalAdapter";
import { useNavigate } from "react-router-dom";

const FormularioEditarProfesional = ({formularioPrev,url,id}) => {
    const navigate= useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm({
        defaultValues: {
            ...formularioPrev
        }
    });
    const onSubmit=(data)=>{
        const form={...data,id}
        axios.post(url,profesionalAdapter(form,tipoEvento.update))
        .then(response=>{

            if(response != undefined){
                console.log(response)
            }if(response.status === 200){
                navigate("/admin/cartilla")
            }
        })
    }

    return (
        <div className="  bg-white text-mygray px-5 lg:px-10 py-5  rounded-lg mt-[2rem] drop-shadow-xl w-3/4">
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <>
                    <label className="  form-label " htmlFor="nombre">Nombre:</label>
                    <input className="form-input" type="text" name="nombre"   {...register("nombre")}/>
                </>
                <>
                    <label className="  form-label " htmlFor="especialidad">Especialidad:</label>
                    <input className="form-input" type="text" name="especialidad"   {...register("especialidad")}/>
                </>
                <>
                    <label className="  form-label " htmlFor="observacion">Observacion:</label>
                    <input className="form-input" type="text" name="observacion"   {...register("observacion")}/>
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
