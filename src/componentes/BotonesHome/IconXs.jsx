import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Icon = ({icono})=>{

    return(
        <FontAwesomeIcon className=" text-center text-lg lg:text-2xl h-full" icon={icono} />
    )
}

export default Icon;