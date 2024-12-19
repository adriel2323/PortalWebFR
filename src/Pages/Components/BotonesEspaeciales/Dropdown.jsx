import React from "react";
import { useState } from "react";
// import { dropList } from "../../data/constantes";

const Dropdown =()=>{
    const [isOpen, setIsOpen]= useState(false)


    //const empleadosList =dropList.empleadosList

    return (
        <div className="relative flex flex-col items-center w-[340] h-[340] rounded-sm">
            {
                isOpen && (
                    <div className="bg-gray-300 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full mt-4" >
                        {lista.map(item=>(
                            <a id={item.id} className="flex w-full justify-between hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4">
                                <h3> {item.titulo}</h3>
                            </a>
                        )) }
                    </div>
                )
            }
        </div>
    )
};

export default Dropdown;