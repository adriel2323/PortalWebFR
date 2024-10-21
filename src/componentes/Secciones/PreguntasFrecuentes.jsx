import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import React,{useEffect, useState} from 'react'
import { Apiurl } from '../../services/apiPortal';

export default function Example() {

  const [preguntas,setPreguntas]=useState();
  const [isLoad,setIsLoad]=useState(false);

  useEffect(()=>{
    fetch(Apiurl+"preguntas")
    
    .then(response=>response.json())
    .then(response=>{
      
      setPreguntas(response.pregunta)
      setIsLoad(true)
      
    })
    .catch(error=>console.log(error))
    
  },[])

  return (
    <div className="mx-10 px-2 lg:mx-52 lg:px-4 pt-16 mb-20">
      <div className="mx-auto w-full  rounded-2xl bg-white p-2">
        
        {
          
            isLoad && preguntas.map(pregunta=> 
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full border-2 border-mygray justify-between rounded-lg bg-white px-4 py-2 text-left text-xl font-medium text-mygray hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span>{pregunta.titulo}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-mygray hover:text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {pregunta.texto}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            
              )
        }
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full border-2 border-mygray justify-between rounded-lg bg-white px-4 py-2 text-left text-xl font-medium text-mygray hover:bg-secondary hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>¿Que necesito para solicitar licencia?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-mygray hover:text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
