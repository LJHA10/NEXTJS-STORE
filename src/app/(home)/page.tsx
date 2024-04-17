import { MainProducts } from "app/componentes/home/MainProducts/MainProducts"
import { Metadata } from "next"


export const metadata: Metadata ={
    title: "✨ Future world",
    description : "Welcome to the future world , an ecommerce from other century"
}
export default function Home(){

    return (
        <main>

            <MainProducts/>

        </main>
    )
}