import { Hero } from "app/componentes/home/Hero/Hero"
import { Description } from "app/componentes/home/Description/Description"
import { Header } from "app/componentes/shared/Header"
import { Footer } from "app/componentes/shared/Footer"
import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

export default async function Layout({children}: {children: React.ReactNode}){
    const collections = await getCollections()
   
   
    return(
        <main className={styles.StoreLayout}>
            <h1>Explore</h1>
            <nav>
                <ul className={styles.StoreLayout__list}>
                    {
                        collections.map((collection) =>(

                            
                        ))
                    }

                </ul>
            </nav>

        </main>
    )
}