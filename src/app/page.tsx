import { Description } from "app/componentes/home/Description/Description"
import { Hero } from "app/componentes/home/Hero/Hero"
import { MainProducts } from "app/componentes/home/MainProducts/MainProducts"


export default function Home(){

    return (
        <main>

            <Hero/>

            <Description />

            <MainProducts/>

        </main>
    )
}