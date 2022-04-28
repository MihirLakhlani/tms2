import React from 'react'
import SideNavigation from './SideNavigation'
import '../../CssOfComponent/CssOfContainer.css'
import 'uikit/dist/css/uikit.min.css'

// this is main Dashboard which display overall data of client,project and employess
const Dashboard = () => {

    return (
        <>
            <div className='Dashboard_Table'>
                <table className="uk-table uk-table-striped uk-table-small">
                    <thead>
                        <tr>
                            <th className="uk-table-expand uk-table-small uk-text-center">Total_Project</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Active_Client</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Total_Active_Task</th>
                            <th className="uk-table-expand uk-table-small uk-text-center">Total_Active_Employess</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="uk-table-expand uk-table-small uk-text-center">5</td>
                            <td className="uk-table-expand uk-table-small uk-text-center">5</td>
                            <td className="uk-table-expand uk-table-small uk-text-center">5</td>
                            <td className="uk-table-expand uk-table-small uk-text-center">5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Dashboard
