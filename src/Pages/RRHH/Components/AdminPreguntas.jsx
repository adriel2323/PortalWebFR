import Secciones from "../../../Components/navBar/Secciones";
import ModalBusqueda from "./PanelBusqueda/ModalBusqueda";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { Apiurl } from "../../../../services/apiPortal";
import Resultados from "./PanelBusqueda/Resultados";
import { useAppStore } from "../../../../store/appStore";
import CardPreguntas from "./PanelBusqueda/cardPregunta";


const AdminPreguntas=({children})=>{
    const {register, handleSubmit, formState: { errors }} = useForm();
    const openSearch=useAppStore((state)=>state.openSearch)
    const setOpenSearch=useAppStore((state)=>state.setOpenSearch) 
    const [busqueda,setBusqueda]=useState([])
    const showSmall=useAppStore((state)=>state.showSmall)
    const [isLoad,setIsLoad]=useState(false)

    useEffect(()=>{
        fetch(Apiurl+"/clinica/preguntas")
        .then(response=>response.json())
        .then(response=>{
            setBusqueda(response.preguntas)
            setIsLoad(true)
            
        })
        .catch(error=>console.log(error))
    },[])

    return(
        <>
        </>
        
    )
}

