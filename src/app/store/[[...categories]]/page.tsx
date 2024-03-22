import { ProductsWrapper } from "app/componentes/Store/ProductsWrapper"
import { getCollections, getCollectionsProducts } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"


import React from "react"

interface CategoryProps {
    params: {
        categories: string [],
    }
        
        searchParams?: string
    }

export default async function Category(props : CategoryProps){
    
    const {categories} = props.params
    const products = await getProducts()
    const collections = await getCollections()
    const selectedCollection = collections.find((collections.handle === categories[0]))
    const productsByCollection = await getCollectionsProducts('285284008029')
    console.log(productsByCollection)


    // throw new Error('Error: Boom!!')

    return ( 
        <ProductsWrapper products={products}/>
    )
}