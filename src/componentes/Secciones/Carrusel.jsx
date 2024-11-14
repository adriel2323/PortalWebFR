import { Apiurl } from "../../services/apiPortal";

const Carrusel=({usuarios,area})=>{
    // const[imagen, setImagen]=useState();
    // const [load,setLoad]=useState(false);
    return(
        <div className="w-[100vw] aspect-square md:aspect-bannerXs ">
            <img className=" w-full h-full object-cover" src={(Apiurl+ "carrusel/imagenes/"+area)||(Apiurl+ "novedades/imagenes/imageDefault")} alt="" />
        </div>
    )
}

export default Carrusel;