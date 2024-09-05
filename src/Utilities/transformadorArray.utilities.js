export function transformacionLink_URL(links,usuario){

    let ids='';

    links[usuario].forEach(id=>{
    ids=ids+id+'&'
    
    return ids;
})}