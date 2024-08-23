import { create } from "zustand";

export const useBusquedaStore = create((set) => ({
    busqueda: {},
    setBusqueda: (busqueda) => set({ busqueda }),
    paramsSerch: [],
    setParamsSerch: (paramsSerch) => set({ paramsSerch }),
    listaResultados: [],
    setListaResultados: (listaResultados) => set({ listaResultados }),
    isLoad: false,
    setIsLoad: (isLoad) => set({ isLoad }),
    busquedaDone: false,
    setBusquedaDone: (busquedaDone) => set({ busquedaDone }),
    usuario: undefined,
    setUsuario: (usuario) => set({ usuario }),
    openSearch: false,
    setOpenSearch: (openSearch) => set({ openSearch }),
    buscar:e=>{
        let area= busqueda.area?busqueda.area:"";
        let apellido= busqueda.apellido?busqueda.apellido:"";
        let experiencia= busqueda.experiencia?busqueda.experiencia:"";
        e.preventDefault();
        console.log(busqueda);
        fetch(Apiurl+ apiRRHHCv.buscarCv+area+"$"+apellido+"$"+experiencia)
        .then(response=>response.json())
        .then(response=>{
            setListaResultados(response.result)
            setBusquedaDone(true);
        })
        .catch(error=>console.log(error))
        
    }
}))