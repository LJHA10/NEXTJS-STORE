"use client"

import { useParams, useSearchParams } from "next/navigation"


export default function Productpage(){
    const params = useParams()

    const searchParams = useSearchParams()

    const id = searchParams.get("id")

    console.log('searchParams',id)

    return <h1> Product page</h1>
}