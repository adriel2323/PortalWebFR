import archivo from '../../../public/archivos/DDJJ2023.pdf'

const ArchivoU=()=>{

    return(
        <div className=' absolute w-full h-full' >
            <object 
            data={archivo} 
            type="application/pdf"
            height="100%"
            width="100%"
            >

            </object>
        </div>
    )


}

export default ArchivoU;