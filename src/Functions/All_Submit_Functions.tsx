import axios from "axios";
import { useEffect } from "react";
import { fetchData } from "../Api_ALL_DATA/Api_call";
import { Api_url } from "../Api_ALL_DATA/Api_url_swagger"
import { useAllTasks, useDataOfFilter } from "../Api_ALL_DATA/Hook";


// Employess Submit button function 
export function Project_onSubmit(data: any) {
    
      console.log(data);
      axios({

        // Endpoint to send files
        url: `${Api_url}createEmp`,
        method: "POST",
        data: data,
    })

        // Handle the response from backend here
        .then((res) => {
            console.log(res);
        })

        // Catch errors if any
        .catch((err) => {
            console.log(err);
        });
      
}



// Project Form Submit button Function

export function Project_Form_Submit(data: any) {
    // console.log(data);
    console.log(`${Api_url}createEmp`, "giysfiysfdy");

    axios({

        // Endpoint to send files
        url: `${Api_url}createEmp`,
        method: "POST",
        data: data,
    })

        // Handle the response from backend here
        .then((res) => {
            console.log(res);
        })

        // Catch errors if any
        .catch((err) => {
            console.log(err);
        });
}


export function Project_Filter_Submit(data: any) {
    // console.log(data);

  
}



export function HandleFilter(data:any){
    console.log(`posts/${data}`);
    const { tasks, fetchData } = useAllTasks(`posts/${data}`)
    useEffect(() => {
        ; (async () => {
            await fetchData()
        })()
    }, [])
    console.log(tasks);
    
      return tasks
}

