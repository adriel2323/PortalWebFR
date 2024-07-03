export function deMiliADias(n){
    return Math.round((((n/1000)/60)/60)/24)
}

export function diferenciaDias(fecha1){
    let diferencia;
    let fechaA=(new Date(fecha1)).getTime();
    let fechaB=(new Date()).getTime();
    diferencia=deMiliADias((fechaB-fechaA));
    let anios= diferencia/365
    return Math.floor(anios)
};

