import { Project_Form_Interface } from "../InterfaceOfComponents/Interfaces_Of_Project_Form"
import {Employess_Form_value} from "../InterfaceOfComponents/Interface_Of_Employess_Form"
import {Task_Form_Values} from "../InterfaceOfComponents/Interface_Of_Task_Form"


export const initialValues_Empolyess:Employess_Form_value = {
    first_name: '',
    last_name: '',
    email: '',
    phone: "",
    password: '',
    designation: "",
}


export  const initialValues_Project:Project_Form_Interface= {
    Start_Date: '',
    End_Date:'',
   Project_Name: '',
    Description: '',
    Client_Name: '',
    Project_Rate: '',
    Project_Priority:'',
    Project_Status:'',
    Member: {
        Name: '',
        Role: ''
    }
}


export const Task_Form_Value: Task_Form_Values = {
        Title: '',
        End_Date: '',
        Project_Name: '',
        Description: '',
        Status: '',
        Person_Incharge: {
            Name: '',
            Role: ''
        },
        TypeOfTask: ''
    }


