let id= Math.floor(1000*Math.random());
const Opciones= ({opcion})=>{

    return(
        <option id={id} value={opcion}>{opcion}</option>
    )
};

export default Opciones;