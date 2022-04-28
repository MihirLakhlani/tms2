import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormGroup, FormCheck } from 'react-bootstrap'
import { FormLabel, Button, Table } from 'uikit-react'
import { validation } from '../../Functions/Validation_Functions/Project_Validation'
import { Project_Form_Interface } from '../../InterfaceOfComponents/Interfaces_Of_Project_Form'
import { Key, PlusCircle } from 'react-bootstrap-icons'
import '../../CssOfComponent/CssOfContainer.css'
import { Project_Form_Submit } from '../../Functions/All_Submit_Functions'
import { initialValues_Project } from '../../ALL_CONSTANT_INIT_VALUE//All_Init_value'
import axios from 'axios'
import { Api_url } from '../../Api_ALL_DATA/Api_url_swagger'


// this is main function of component 
// in this function user input data and onSubmit it will display in 
// table where we can edit or delete that particular data of user

function Project_Forms(props: any) {
    //this useState is use to add new member if we want to add in project
    const [Data, SetData] = useState<any>([{ Name: '', Role: '' }])
    const [Member, setMember] = useState<any>([])
    const [Role, setRole] = useState<any>([])
    const [Status, setStatus] = useState<any>([])
    const [Priority, setPriority] = useState<any>([])


    useEffect(() => {
        // axios.get(`${Api_url}findEmpById`).then(res=>setMember(res.data));
        axios.get(`${Api_url}findRole`).then(res => { setRole(res.data) });
        axios.get(`${Api_url}findTaskStatus`).then(res => { setStatus(res.data) });
        axios.get(`${Api_url}findPriority`).then(res => { setPriority(res.data) });
    }, [])

    const handleChange = (event: any, index: any) => {
        const values = [...Data];
        values[index][event.target.name] = event.target.value;
        SetData(values)
    }
    // this function is call when we click on add button of members 
    const handleClick = (event: any) => {
        event.preventDefault();
        SetData([...Data, { Member: '', Role: '' }])
    }

    // this is an function which will be called after clicking on submit button for Project form
    return (
        <>
            <Formik
                initialValues={initialValues_Project}
                onSubmit={(data1: any) => Project_Form_Submit(data1)}
                validationSchema={validation}
                enableReinitialize >
                <Form className='Form'>
                    <h1>Project Details</h1>
<div className='Employess_Form'>
<div className='Form_lable'>
<FormLabel htmlFor='Start_Date'>Start_Date</FormLabel>
<FormLabel htmlFor='End_Date'>End_Date</FormLabel>
<FormLabel htmlFor='Project_Name'>Project_Name</FormLabel>
<FormLabel htmlFor='Client_Name'>Client_Name</FormLabel>
<FormLabel htmlFor='Description'>Description</FormLabel>
<FormLabel htmlFor='Project_Rate'>Project_Rate</FormLabel>
<FormLabel htmlFor='Project_Priority'>Project_Priority</FormLabel>
<FormLabel htmlFor='Project_Status'>Project_Status</FormLabel>
</div>  


<div className='Field_css'>
                        <Field name='Start_Date' placeholder="Start_Date" type='Date' ></Field>
                        <ErrorMessage name='Start_Date'></ErrorMessage><br/>
                    

                        <Field name='End_Date' placeholder="End_Date" type='Date'></Field>
                        <ErrorMessage name='End_Date' ></ErrorMessage><br/>
                        <Field name='Project_Name' placeholder="Project_Name"></Field>
                        <ErrorMessage name='Project_Name' ></ErrorMessage><br/>
                        <Field name='Client_Name' placeholder="Client_Name"></Field>
                        <ErrorMessage name='Client_Name' ></ErrorMessage><br/>
                        <Field name='Description' component="textarea" placeholder="Description" type='longtext'></Field>
                        <ErrorMessage name='Description' ></ErrorMessage><br/>
                        <Field name='Project_Rate' placeholder="Project_Rate" type='Number'></Field>
                        <ErrorMessage name='Project_Rate' ></ErrorMessage><br/>
                        <Field name='Project_Priority' placeholder="Project_Priority" as="select">
                            <option>select</option>
                            {
                                Priority.map((key: any) => {
                                    return (
                                        <option value={key.id}>{key.priority}</option>
                                    )
                                })
                            }
                        </Field>
                        <ErrorMessage name='Project_Priority' ></ErrorMessage><br/>
                        <Field name='Project_Status1' placeholder="Project_Status" as="select">
                            <option>select</option>
                            {
                                Status.map((key: any) => {
                                    return (
                                        <option value={key.id}>{key.status}</option>
                                    )
                                })
                            }
                        </Field>
                        <ErrorMessage name='Project_Status1' ></ErrorMessage><br/>       
                        
</div>

</div>
<div className='MEMBER_DATA'> 
<div className='Form_lable3'><FormLabel htmlFor="Member" >Members</FormLabel></div>


<div className='Field_css3'>{
                                Data.map((inputfiel: any, index: any) => (
                                    <div key={index}>
                                        <Field className='NameOfMember' type='text' name="Members.Name" onChange={(event: any) => handleChange(event, index)} value={inputfiel.Member} as="select">
                                        <option>select</option>
                                            {
                                                Role.map((key: any) => {
                                                    return (
                                                        <option value={key.id}>{key.role}</option>
                                                    )
                                                })
                                            }
                                        </Field>
                                        <ErrorMessage name='Members.Name'/>
                                        <Field  className='NameOfMember2' type='text' name='Members.Role' onChange={(event: any) => handleChange(event, index)} value={inputfiel.Role} as="select">
                                            <option>select</option>
                                            {
                                                Role.map((key: any) => {
                                                    return (
                                                        <option value={key.id}>{key.role}</option>
                                                    )
                                                })
                                            }
                                        </Field>
                                        <ErrorMessage name='Members.Role'/>
                                        <PlusCircle className='Add_button' onClick={handleClick} size={25}></PlusCircle>
                                    </div>
                                ))
                            }</div>
</div>
                    <button className='buttonStyle' type='submit'>Submit</button>
                </Form>
            </Formik>

        </>
    )
}

export default Project_Forms




