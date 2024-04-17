"use client"
import { ProductView } from "app/componentes/product/ProductView/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"
import { useRouter } from "next/router"


interface ProductPageProps {
    searchParams:{
        id: string
    }
}

export default async function Productpage({searchParams}: ProductPageProps){
    const id = searchParams.id

    const products = await getProducts(id)

    const product = products[0]

    if(!id){
        redirect('/store')
    }
    
    return <ProductView  product={product}/>
}