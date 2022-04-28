export interface Task_Form_Values {
    Title: String,
    End_Date:String,
   Project_Name: String,
    Description: String,
    Status: String,
    Person_Incharge: {
        Name: String,
        Role: String
    },
    TypeOfTask:String
}