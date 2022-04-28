import * as Yup from 'yup'
//this function is for validation of input field by YUP
export const validation = Yup.object({
    Start_Date: Yup.string().required('Required'),
    End_Date: Yup.string().required('Required'),
    Project_Name: Yup.string().required('Required'),
    Client_Name: Yup.string().required('Required'),
    Description: Yup.string().required('Required'),
    Members: Yup.object({
        Name: Yup.string().required('Required'),
        Role: Yup.string().required('Required')
    }),
    Project_Rate: Yup.string().required('select any'),
    Project_Priority: Yup.string().required('select any'),
    Project_Status1: Yup.string().required('select any')
})