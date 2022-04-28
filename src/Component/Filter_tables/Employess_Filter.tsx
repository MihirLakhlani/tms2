import { useEffect, useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
// import { fetchData } from '../../Api_ALL_DATA/Api_call';
import { useAllTasks } from "../../Api_ALL_DATA/Hook";
import Employess_Table from "../Table/Employess_Table";
const Employess_Filter = () => {
  const [data, setData] = useState<any>();
  const { tasks, fetchData } = useAllTasks(`findRole`);
  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  console.log(data == undefined ? "posts" : `posts/${data}`);

  return (
    <>
      <div className="Filter_table_with_Add">
        <table className="uk-table uk-table-striped uk-table-small">
          <thead>
            <tr>
              <th className="uk-table-expand uk-table-small uk-text-center">
                designation
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="uk-table-expand uk-table-small uk-text-center">
                {
                  <select onChange={(e: any) => setData(e.target.value)}>
                    <option>select</option>
                    {tasks.map((key: any) => {
                      return <option value={key.id}>{key.role}</option>;
                    })}
                  </select>
                }
              </td>
            </tr>
          </tbody>
        </table>

        <div className="IconCss">
          <NavLink to="/Employess_Form">
            <PlusCircle size={50}></PlusCircle>
          </NavLink>
        </div>
      </div>
      <Employess_Table
        dd={data == undefined ? "findEmp" : `findEmp?designation=${data}`}
      />
    </>
  );
};

export default Employess_Filter;
