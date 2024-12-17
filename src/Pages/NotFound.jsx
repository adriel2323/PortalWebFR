import Footer from "./Components/Footer/Footer";
import Secciones from "./Components/navBar/Secciones";
import Construccion from "../../public/imagenes/construccion.svg"

const NotFound =({usuarios})=>{

    const usuario= usuarios;
    
    return(
        <>
            <div className="normalize font-mont" >
              <Secciones usuarios={usuario}/>
                <main className="h-[70vh] mt-10">
                    
                    <div className=" m-auto w-[50vw] ">
                        <img className=" w-full h-full object-cover" src={Construccion} alt="" />
                    </div>
                    <div className="flex flex-col mx-10 mt-5 text-secondary text-center">
                        <h1 className=" text-xl font-medium " >La página buscada no se encuentra,o esta en construcción.</h1> 
                        <h1 className="  font-bold text-3xl">Disculpe las molestias</h1>
                        {/* <h1 className=" text-5xl" >La página buscada <br />no se encuentra,<br />o esta <br />en construcción.</h1> 
                        <h1 className=" mt-5 text-6xl">Disculpe las molestias</h1> */}
                    </div>
                </main>
                <Footer/>

            </div>
        </>
    )

};

export default NotFound;