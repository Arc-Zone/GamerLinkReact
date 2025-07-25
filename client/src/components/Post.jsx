import { useState } from "react"
import { useEffect } from "react"

export function Post () {

    const [data , setData] = useState(null)

    useEffect(()=> {
        const fetchData = async () => {
            try{
                const res = await fetch('http://localhost:3000/api')
                const json = await res.json();
                setData(json)
                console.log(json)
            }catch{
    }
        }
        fetchData();
    } , []) 

    return(
        <>
        <h1>{data}</h1>
        </>
    )
}