export function usuariosValidos(usuarios){
    let nav={
        'admin':'admin',
        'privates':'privates',
        'os':'os',
        'sistemas':'sistemas',
        'public':'public',
    }

    if(usuarios==="admin" ||  usuarios==="sistemas" || usuarios==="rrhh"){
        return nav.admin
    }else if(usuarios==="prestadores" ||  usuarios==="personal" ){
        return nav.privates
    } else{
        return nav.public
    }
}