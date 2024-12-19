import { useEffect,useState } from "react";
import Icon from "../../Components/BotonesHome/Icon";
import { faHandHoldingMedical,faHospitalUser,faBuilding,faBed } from "@fortawesome/free-solid-svg-icons";
import { Apiurl } from "../../../services/apiPortal";

const DatosSanatorio =()=>{

    const [atenciones, setAtenciones]= useState([])

    useEffect(()=>{
        fetch(Apiurl+"atenciones")
        .then(response=>response.json())
        .then(response=>{
        //   setNovedades(response.novedades)
            setAtenciones(response.result[0].atencion)
        })
        .catch(error=>console.log(error))
    },[])

    return(
        <div className="flex flex-col lg:flex-row lg:h-full justify-between bg-slate-200 my-40 p-10 lg:p-16 drop-shadow-2xl mx-10 xl:mx-52">
            <div className="flex flex-col h-1/4 " >
                <div className="flex h-full justify-center lg:justify-between ">
                    <h3 className=" font-bold  pr-3 lg:pr-0 text-3xl " >768</h3>
                    <div className="grid place-items-stretch content-end h-1/2">
                        <Icon  icono={faHospitalUser} />
                    </div>
                    
                </div>
                <h3 className="text-center text-lg  lg:text-2xl pb-4 lg:pb-0">Profesionales</h3>
            </div>
            <div className="flex flex-col h-1/4" >
                <div className="flex h-full justify-center lg:justify-between">
                    <h3 className=" font-bold pr-5 lg:pr-0 text-3xl" >400</h3>
                    <div className="grid place-items-stretch content-end h-1/2">
                        <Icon  icono={faBed} />
                    </div>
                    
                </div>
                <h3 className="text-center text-lg  lg:text-2xl pb-4 lg:pb-0">Camas</h3>
            </div>
            <div className="flex flex-col h-1/4" >
                <div className="flex h-full justify-center lg:justify-between">
                    <h3 className=" font-bold  pr-5  text-3xl " >12</h3>
                    <div className="grid place-items-stretch content-end h-1/2">
                        <Icon  icono={faBuilding} />
                    </div>
                    
                </div>
                <h3 className="text-center text-lg  lg:text-2xl pb-4 lg:pb-0">Pisos</h3>
            </div>
            <div className="flex flex-col h-1/4 text-center" >
                <div className="flex h-full justify-center lg:justify-between">
                    <h3 className="grid  font-bold text-3xl  " >{atenciones}</h3>
                    <div className="grid place-items-stretch content-end h-1/2">
                        <Icon  icono={faHandHoldingMedical} />
                    </div>
                    
                </div>
                
                <h3 className="text-center text-lg  lg:text-2xl pb-4 lg:pb-0">Atenciones</h3>
            </div>
        </div>
    )

};

export default DatosSanatorio;