import React from 'react';
import { PlusCircle } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const Task_Filter = () => {
  return <>
                                <div className='Filter_table_with_Add'>
                    <table className="uk-table uk-table-striped uk-table-small">
                        <thead>
                            <tr>
                                <th className="uk-table-expand uk-table-small uk-text-center">Status</th>
                                <th className="uk-table-expand uk-table-small uk-text-center">Type</th>
                                <th className="uk-table-expand uk-table-small uk-text-center">Project</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="uk-table-expand uk-table-small uk-text-center">dfsdfgfg</td>
                            <td className="uk-table-expand uk-table-small uk-text-center">gdyasgiu</td>
                            <td className="uk-table-expand uk-table-small uk-text-center">gdyasgiu</td>
                            </tr>
                        </tbody>
                    </table>
                
                <div className='IconCss'>
                    <NavLink to='/Task_Form'><PlusCircle size={50}></PlusCircle></NavLink>
                </div>
                    </div>
  </>;
};

export default Task_Filter;
