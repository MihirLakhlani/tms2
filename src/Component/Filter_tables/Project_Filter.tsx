import React, { useEffect, useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { useDataOfFilter } from "../../Api_ALL_DATA/Hook";
import { Project_Filter_Submit } from "../../Functions/All_Submit_Functions";
import Project_Table from "../Table/Project_Table";

const Project_Filter = () => {
  const [Fit, SetFit] = useState({
    Start_Date: "",
    End_Date: "",
    PP: "",
    PS: "",
  });

  const handleChange = (e: any) => {
    console.log(e.target.value);
    SetFit({ ...Fit, [e.target.name]: e.target.value });
  };
  const { tasks1, fetchData1 } = useDataOfFilter("posts", Fit);
  useEffect(() => {
    (async () => {
      await fetchData1();
    })();
  }, []);
  return (
    <>
      <div className="Filter_table_with_Add">
        <table className="uk-table uk-table-striped uk-table-small">
          <thead>
            <tr>
              <th className="uk-table-expand">Start Date</th>
              <th className="uk-table-expand">End Date</th>
              <th className="uk-table-expand">Project priority </th>
              <th className="uk-table-expand">Project Status</th>
              <th className="uk-table-expand"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="uk-table-expand">
                <input
                  onChange={handleChange}
                  type="date"
                  name="Start_Date"
                  placeholder="Start_Date"
                ></input>
              </td>
              <td className="uk-table-expand">
                {" "}
                <input
                  onChange={handleChange}
                  type="date"
                  name="End_Date"
                  placeholder="End_Date"
                ></input>
              </td>
              <td className="uk-table-expand">
                <select name="PP" onChange={handleChange}>
                  <option>SELECT</option>
                  <option value={"Low"}>LOW</option>
                  <option value={"Medium"}>MEDIUM</option>
                  <option value={"High"}>HIGH</option>
                </select>
              </td>
              <td className="uk-table-expand">
                <select name="PS" onChange={handleChange}>
                  <option>SELECT</option>
                  <option value={"Active"}>ACTIVE</option>
                  <option value={"In-Active"}>IN-ACTIVE</option>
                </select>
              </td>
              <td>
                <button onClick={() => Project_Filter_Submit(Fit)}>
                  Search
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="IconCss">
          <NavLink to="/Project_Form">
            <PlusCircle size={50}></PlusCircle>
          </NavLink>
        </div>
      </div>
      <Project_Table />
    </>
  );
};

export default Project_Filter;
