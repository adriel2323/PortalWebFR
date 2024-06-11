export function transformacionLink_URL(links,usuario){
    console.log('esto es lo que entro en la funcion ',links,usuario)

    let ids='';
    console.log('Estos son los ids dentro de links: ',links[usuario])
    links[usuario].forEach(id=>{
    ids=ids+id+'&'
    console.log('este es el ids ',ids)
    
    return ids;
})}