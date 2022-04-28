import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormLabel, Button, Table } from 'uikit-react'
import { Employess_Form_Validation } from '../../Functions/Validation_Functions/Employess_Form_Validation'
import axios from "axios";
import { Api_url } from '../../Api_ALL_DATA/Api_url_swagger'
import {Project_onSubmit} from '../../Functions/All_Submit_Functions'
import {initialValues_Empolyess} from '../../ALL_CONSTANT_INIT_VALUE/All_Init_value'
import { useAllTasks } from '../../Api_ALL_DATA/Hook'


// this is main function of component 
// in this function user input data and onSubmit it will display in 
// table where we can edit or delete that particular data of user

function Employess_Form() {
    
    const {tasks,fetchData}=useAllTasks("posts")
    useEffect(() => {
        ;(async () => {
          await fetchData()
        })()
      }, [])  
    return (
        < >
                <Formik
                    initialValues={initialValues_Empolyess}
                    onSubmit={(data1:any)=>Project_onSubmit(data1)}
                    validationSchema={Employess_Form_Validation}
                    enableReinitialize
                >
                    <Form className='Form'>
                    <h1>Employess</h1>

<div className='Employess_Form'>
<div className='Form_lable' >
<FormLabel htmlFor='first_name'>first_name</FormLabel>
<FormLabel htmlFor='last_name'>last_name</FormLabel>
<FormLabel htmlFor='email'>email</FormLabel>
<FormLabel htmlFor='phone'>phone</FormLabel>
<FormLabel className='textAll' htmlFor='password'>password</FormLabel>
<FormLabel className='textAll' htmlFor='designation'>designation</FormLabel>
</div >
<div className='Field_css1'>
            <Field name='first_name' placeholder="first_name" type='text' ></Field><ErrorMessage name='first_name' ></ErrorMessage><br/>
            <Field name='last_name' placeholder="last_name" type='text'></Field><ErrorMessage name='last_name' ></ErrorMessage><br/>
            <Field name='email' placeholder="email"></Field><ErrorMessage name='email' ></ErrorMessage><br/>

            <Field name='phone' placeholder="phone" type='tel'></Field><ErrorMessage name='phone' ></ErrorMessage><br/>

            <Field name='password' placeholder="password" type='longtext'></Field><ErrorMessage name='password' ></ErrorMessage><br/>

            <Field name='designation' placeholder="designation" type='longtext' as="select" >
                                        <option>select</option>
                                        {
                                            tasks.map((key: any) => {
                                                return (
                                                    <option value={key.id}>{key.id}</option>
                                                )
                                            })
                                        }

            </Field><ErrorMessage name='designation' ></ErrorMessage><br/>

</div>


</div>
   <div className='buttonStyle'>
   <Button type="submit" >Submit</Button>
   </div>
            
                    </Form>
                </Formik>
            
        </>
    )
}

export default Employess_Form




