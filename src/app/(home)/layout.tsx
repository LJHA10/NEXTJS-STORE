import { Hero } from "app/componentes/home/Hero/Hero"
import { Description } from "app/componentes/home/Description/Description"
import React from "react"

export default function HomeLayout({children}: {children: React.ReactNode}){

    return(
        <div>

            <Hero />

            <Description />

            {children}
            
        </div>
    )
}