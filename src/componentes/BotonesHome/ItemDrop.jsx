

const ItemDrop= ({item})=>{

    const verForm=()=> !isLogged? setViewForm((prev)=> !prev): location.href =window.location.protocol + "//" + window.location.host + '/rrhh/cv';
    
        if(item.logged==1){
            return(
                <div  onClick={verForm} key={item.id} className="z-50 flex w-full justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                    <h3 className=" font-medium text-xl p-4"> {item.titulo}</h3>
                </div >
            )
        } 
        if(item.logged==0){
            return(
                <a href={item.link}  key={item.id} className="z-50 flex w-full justify-between hover:bg-secondary hover:text-white cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                    <h3 className=" font-medium text-xl p-4"> {item.titulo}</h3>
                </a >
            )
        } 
    
};
export default ItemDrop;