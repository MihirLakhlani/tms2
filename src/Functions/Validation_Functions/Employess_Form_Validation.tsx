import * as Yup from 'yup'
//this function is for validation of input field by YUP
export const Employess_Form_Validation = Yup.object({
    first_name: Yup.string().required('Required'),
    last_name:Yup.string().required('Required'),
    email: Yup.string().email('Must be a valid email').max(255).required('email is required'),
    phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10, "Must be more than 10 characters")
    .required('A phone number is required'),
    password:Yup.string()
    .required('No password provided.') 
    .min(8, 'minimum 8')
    .max(9,"hdhdsh"),
    designation: Yup.string().required('Required'),
})