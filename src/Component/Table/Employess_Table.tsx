import React, { useEffect, useState } from 'react'
import SideNavigation from './SideNavigation'
import '../../CssOfComponent/CssOfContainer.css'
import 'uikit/dist/css/uikit.min.css'
import { Key, PlusCircle } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import { addAbortSignal } from 'stream'
import Employess_Filter from '../Filter_tables/Employess_Filter'
import { useAllTasks, useDataOfFilter } from '../../Api_ALL_DATA/Hook'


function Employess_Table(props:any) {
    console.log(props.dd);
    
    const { tasks, fetchData } = useAllTasks(props.dd) 
    useEffect(() => {
         (async () => {
            await fetchData()
        })();
    },[props.dd])

console.log(tasks);

    return (
        <>
                <table className="uk-table uk-table-striped uk-table-small">
                    <thead>
                        <tr>
                            <th className="uk-table-expand uk-table-small uk-text-center">first_name</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">last_name</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">email</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">phone</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">designation</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         tasks.map((data:any)=>{
                               return(
                                <tr>
                                <td className="uk-table-expand uk-table-small uk-text-center">{data.first_name}</td>
                                <td className="uk-table-expand uk-table-small uk-text-center">{data.last_name}</td>
                                <td className="uk-table-expand uk-table-small uk-text-center">{data.email}</td>
                                <td className="uk-table-expand uk-table-small uk-text-center">{data.phone}</td>
                                <td className="uk-table-expand uk-table-small uk-text-center">{data.designation}</td>
                            </tr>
                               )
                           })
                       }
                    </tbody>
                </table>


        </>
    )
}

export default Employess_Table
