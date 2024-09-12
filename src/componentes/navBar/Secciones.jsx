import { useState, useEffect } from "react";
import SeccionesSmall from "../navBar/SeccionesSmall";
import SeccionesLg from "../navBar/SeccionesLg";



const Secciones = ({area})=>{

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [showSmall,setShowSmall]= useState(false);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
    const show=()=>{     
            if(width< 1024){
              setShowSmall(true);
            } else {
              setShowSmall(false);
            }
        }
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      }
    }, []);
    useEffect(() => {  
      show()
    }, [width]);
   
    return(
        <>
            { showSmall && (<SeccionesSmall area={area}/>)}
            { !showSmall && (<SeccionesLg area={area}/>)}
        </>
    )
};

export default Secciones;