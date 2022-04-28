import React from 'react'
import { PlusCircle } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'
import 'uikit/dist/css/uikit.min.css'
import '../../CssOfComponent/CssOfContainer.css'
import Task_Filter from '../Filter_tables/Task_Filter'
import SideNavigation from './SideNavigation'


function Task_Table() {
    return (
        <>
        <Task_Filter/>
                <table className="uk-table uk-table-striped uk-table-small">
                    <thead>
                        <tr>
                            <th className="uk-table-expand uk-table-small uk-text-center">Title</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Description</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">End_Date</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Person_Incharge</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Status</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="uk-table-expand uk-table-small uk-text-center">jefiil</td>
                        <td className="uk-table-expand uk-table-small uk-text-center">jefiil</td>
                        <td className="uk-table-expand uk-table-small uk-text-center">jefiil</td>
                        <td className="uk-table-expand uk-table-small uk-text-center">jefiil</td>
                        <td className="uk-table-expand uk-table-small uk-text-center">jefiil</td>
                        <td className="uk-table-expand uk-table-small uk-text-center">jefiil</td>
                        </tr>
                        
                    </tbody>
                </table>
        </>
    )
}

export default Task_Table
