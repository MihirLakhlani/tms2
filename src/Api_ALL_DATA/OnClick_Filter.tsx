import { Api_url } from "./Api_url_swagger"

export const handleFilter=async(Filter_url:any)=>{
    const response = await fetch(`${Api_url}${Filter_url}`)
    const json = await response.json()
}