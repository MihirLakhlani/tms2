import React from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";
import App from "../App";
import Employess_Filter from "../Component/Filter_tables/Employess_Filter";
import Project_Filter from "../Component/Filter_tables/Project_Filter";
import Task_Filter from "../Component/Filter_tables/Task_Filter";
import Footer from "../Component/Footer";
import Employess_Form from "../Component/Forms/Employess_Form";
import Project_Forms from "../Component/Forms/Project_Forms";
import Task_Form from "../Component/Forms/Task_Form";
import Header from "../Component/Header";
import Dashboard from "../Component/Table/Dashboard";
import Employess_Table from "../Component/Table/Employess_Table";
import Project_Table from "../Component/Table/Project_Table";
import SideNavigation from "../Component/Table/SideNavigation";
import Task_Table from "../Component/Table/Task_Table";
import "../CssOfComponent/CssOfContainer.css";

function RoutePages() {
  return (
    <div className="Main_container">
      <BrowserRouter>
        <SideNavigation />
        <div className="Second_Container">
          <div className="Header_css">
            {" "}
            <Header />
          </div>

          <div className="Body_containor">
            {" "}
            <Switch>
              <Route exact path={"/"}>
                <Dashboard />
              </Route>
              <Route path={"/project"}>
                <Project_Filter />
              </Route>
              <Route path={"/task"}>
                <Task_Filter />
              </Route>
              <Route path={"/employess"}>
                <Employess_Filter />
              </Route>

              <Route path={"/Project_Form"}>
                <Project_Forms />
              </Route>
              <Route path={"/Task_Form"}>
                <Task_Form />
              </Route>
              <Route path={"/Employess_Form"}>
                <Employess_Form />
              </Route>
            </Switch>
          </div>

          <div className="Footer_css">
            {" "}
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default RoutePages;
