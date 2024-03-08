"use client"

import { Hero } from "app/componentes/home/Hero/Hero"
import { Description } from "app/componentes/home/Description/Description"
import { useEffect } from "react"

export default function HomeLayout({children}: {children: React.ReactNode}){

    useEffect(() => {
        console.log('Envio de metricas')
    }, [] )
    
    return(
        <div>

            <Hero />

            <Description />

            {children}
            
        </div>
    )
}