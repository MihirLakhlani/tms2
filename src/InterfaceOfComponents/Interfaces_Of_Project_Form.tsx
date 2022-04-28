// Project_Form interface 
export  interface Project_Form_Interface {
    Start_Date:  String,
    End_Date: String,
   Project_Name:  String,
    Description:  String,
    Client_Name:  String,
    Project_Rate:  String,
    Project_Priority: String,
    Project_Status: String,
    Member: {
        Name:  String,
        Role:  String
    }
}