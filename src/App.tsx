import React from 'react';
import './App.css';
import SideNavigation from './Component/Table/SideNavigation';
import Project_Table from './Component/Table/Project_Table';
import Task_Table from './Component/Table/Task_Table';
import Employess_Table from './Component/Table/Employess_Table';
import RoutePages from './RouteOfPages/RoutePages';
import Project_Forms from './Component/Forms/Project_Forms';
import Task_Form from './Component/Forms/Task_Form';
import Employess_Form from './Component/Forms/Employess_Form';
import Header from './Component/Header';
import { SignInButton } from './Azure_AD/Login';
import { ProfileData } from './Azure_AD/Profile';
import ProfileContent from './Azure_AD/Acc';

function App() {
  return (
    <div className="App">
    <RoutePages/>
 {/* <ProfileContent/> */}
    </div>
  );
}

export default App;
