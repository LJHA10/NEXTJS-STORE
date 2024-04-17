import { getCollectionProducts } from "app/services/shopify/collections"
import { ProductsWrapper } from "../../../componentes/Store/ProductWrapper"
import { getCollections } from "app/services/shopify/collections"
import { getProducts } from "../../../services/shopify/products"
ProductsWrapper

interface CategoryProps {
  params: {
    categories: string[],
  }
  searchParams?: string
}

export default async function Category(props: CategoryProps) {
  const { categories } = props.params
  let products = []
  const collections = await getCollections()
   
   if (categories?.length > 0){
    const selectedCollectionId = collections.find((collection) => collection.handle === categories[0]).id
     products = await getCollectionProducts(selectedCollectionId)
   }else{
     products = await getProducts()
   }

   return (
     <ProductsWrapper products={products} />
   )
}
