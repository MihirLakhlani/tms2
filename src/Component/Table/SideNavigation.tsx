import React from 'react'
import {Nav} from 'uikit-react'
import '../../CssOfComponent/CssOfContainer.css'
import 'uikit/dist/css/uikit.min.css'
import {NavLink} from 'react-router-dom'

const SideNavigation=()=> {
    return (
        <>
<div className="SideNavBarContainer">
            <h3>Think--Biz</h3>
    <nav>
        <li><NavLink to='/'>Dashboard</NavLink></li>
        <li><NavLink to='/employess' >Employess</NavLink></li>
        <li><NavLink to='/project' >Project</NavLink></li>
        <li><NavLink to='/task'>Task</NavLink></li>
    </nav>
</div>
        </>
    )
}

export default SideNavigation





