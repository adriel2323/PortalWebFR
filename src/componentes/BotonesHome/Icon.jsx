import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({icono})=>{
    return(
        <FontAwesomeIcon className=" text-center text-3xl lg:text-5xl" icon={icono} />
    )
}
export default Icon;