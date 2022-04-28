import * as Yup from 'yup'
//this function is for validation of input field by YUP
export const Task_validation = Yup.object({
    Title: Yup.string().required('Required'),
    End_Date: Yup.string().required('Required'),
    Project_Name: Yup.string().required('Required'),
    Description: Yup.string().required('Required'),
    Person_Incharge: Yup.object({}).shape({
        Name: Yup.string().required('Required'),
        Role: Yup.string().required('Required')
    }),
    Status: Yup.string().required('select any'),
    TypeOfTask:Yup.string().required('Required')
})