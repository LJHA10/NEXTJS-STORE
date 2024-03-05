import { Hero } from "app/componentes/home/Hero/Hero"
import { Description } from "app/componentes/home/Description/Description"
import { Header } from "app/componentes/shared/Header"
import { Footer } from "app/componentes/shared/Footer"

export default function Layout({children}: {children: React.ReactNode}){

    return(
        <div>

            <Hero />

            <Description />

            {children}

        </div>
    )
}