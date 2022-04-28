import React, { useState } from 'react'
import SideNavigation from './SideNavigation'
import '../../CssOfComponent/CssOfContainer.css'
import 'uikit/dist/css/uikit.min.css'
import { PlusCircle } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import { addAbortSignal } from 'stream'
import Project_Filter from '../Filter_tables/Project_Filter'

const Project_Table = (props:any) => {
  
   console.log(props);
   
        
   const handleChange_Check=()=>{
       
   }

    return (
        <>
                <div className='Project_Table'>
                    <div className="uk-overflow-auto">
                        <table className="uk-table uk-table-striped uk-table-small">
                            <thead>
                                <tr>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large"></th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Start Date</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">End Date</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Name</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Client_Name</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Project_Rate(hourly)</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Project priority </th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Project Status</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Edit</th>
                                    <th className="uk-table-small uk-text-center uk-text-emphasis uk-text-large">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="uk-checkbox" onChange={handleChange_Check} type="checkbox" /></td>
                                    <td>2/2/2020</td>
                                    <td>2/2/2020</td>
                                    <td className="uk-table-link">
                                        <a className="uk-link-reset" href="">ThinkBiz</a>
                                    </td>
                                    <td>meet patel</td>
                                    <td>15$</td>
                                    <td>high</td>
                                    <td>completed</td>
                                    <td><button className="uk-button uk-button-default" type="button">Button</button></td>
                                    <td><button className="uk-button uk-button-default" type="button">Button</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
            
        </>
    )
}

export default Project_Table
