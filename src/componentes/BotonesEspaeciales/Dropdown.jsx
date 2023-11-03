import React from "react";
import { useState } from "react";
import Icon from "../BotonesHome/Icon";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Dropdown =()=>{
    const [isOpen, setIsOpen]= useState(false)


    const empleadosList =[
        {
            "id":1,
            "titulo":"Recibo de sueldo",
            "link": "/"
        },
        {
            "id":2,
            "titulo":"Formularios",
            "link": "/"
        },
        {
            "id":3,
            "titulo":"Documentación",
            "link": "/"
        },
        {
            "id":4,
            "titulo":"Novedades",
            "link": "/"
        },
    ]

    return (
        <div className="relative flex flex-col items-center w-[340] h-[340] rounded-sm">
            {/* <button onClick={()=> setIsOpen((prev)=> !prev)} className=" bg-white p-4 w-full flex item-center justify-between font-bold text-lg rounded-lg tracking-wide border-4 border-transparent active:border-white duration-300 active:text-white ">Menu
            {!isOpen ? (
                <Icon icono={faCaretDown}/>
            ): (<Icon icono={faCaretUp}/>)}
            </button> */}
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