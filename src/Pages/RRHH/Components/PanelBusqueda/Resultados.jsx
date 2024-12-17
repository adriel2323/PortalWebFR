import {  faChevronRight, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppStore } from '../../../../store/appStore';

const Resultados=({children})=>{
    const showSmall=useAppStore((state)=>state.showSmall)
    const openSearch=useAppStore((state)=>state.openSearch)
    const setOpenSearch=useAppStore((state)=>state.setOpenSearch)
    
    return(
        <>
            <section className=' z-0 mx-auto lg:w-3/4  flex flex-col justify-center p-5 sm:pt-24 h-[100vh]'>
                <div className='flex '>
                    {showSmall && !openSearch && (<FontAwesomeIcon 
                    onClick={()=> {
                        setOpenSearch(true)
                        }} className=" text-xl mr-4" icon={faChevronRight} />)}
                    <h1 className=' text-mygray font-semibold  pb-6 text-xl lg:text-4xl'>Resultados de busqueda</h1>
                </div>
                <div className='rounded bg-gray-300 py-4 h-[80vh] overflow-auto shadow-inner px-3 '>
                    {children}
                </div>
            </section>
        </>
    )
};

export default Resultados;