import { useState, useEffect } from "react";
import { listaProfesionales } from "../../../services/apiPortal";


const Especialidades =({titulo})=>{

    return(
        <>
            <div>
                <h1>{titulo}</h1>
            </div>
        </>
    )

}

export default Especialidades;