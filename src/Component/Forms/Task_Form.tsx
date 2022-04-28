import axios from "axios";
import { Formik, Field, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Form, FormLabel, Button } from "uikit-react";
import { Task_validation } from "../../Functions/Validation_Functions/Task_Form_Validation";
import { Task_Form_Value } from "../../ALL_CONSTANT_INIT_VALUE/All_Init_value";

function Task_Form() {
  const [Status, setStatus] = useState<any>([]);
  const [Type, setType] = useState<any>([]);
  const [Project, setProject] = useState<any>([]);
  const [Member, setMember] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://f92d-122-169-103-3.ngrok.io/findTaskStatus")
      .then((res) => setStatus(res.data));
    axios
      .get("http://f92d-122-169-103-3.ngrok.io/findTaskType")
      .then((res) => setType(res.data));
    axios
      .get("http://f92d-122-169-103-3.ngrok.io/findProjectById")
      .then((res) => setProject(res.data));
    axios
      .get("http://f92d-122-169-103-3.ngrok.io/findProjectEmpRelation")
      .then((res) => setMember(res.data));
  }, []);
  const Task_Form_onSubmit = (data: any, action: any) => {
    alert("hiodhiodsfohifhi");
  };

  return (
    <>
      <Formik
        initialValues={Task_Form_Value}
        onSubmit={Task_Form_onSubmit}
        validationSchema={Task_validation}
        enableReinitialize
      >
        <Form className="Form">
          <h1>Create Task</h1>

          <div className="Employess_Form">
            <div className="Form_lable">
              <FormLabel htmlFor="Title">Title</FormLabel>
              <FormLabel htmlFor="End_Date">End_Date</FormLabel>
              <FormLabel htmlFor="Project_Name">Project_Name</FormLabel>
              <FormLabel htmlFor="Description">Description</FormLabel>
              <FormLabel htmlFor="Status">Status</FormLabel>
              <FormLabel htmlFor=" TypeOfTask"> TypeOfTask</FormLabel>
              <FormLabel>Members</FormLabel>
            </div>

            <div className="Field_css">
              <Field name="Title" placeholder="Title" type="Text"></Field>
              <ErrorMessage name="Title" />
              <br />
              <Field name="End_Date" placeholder="End_Date" type="text"></Field>
              <ErrorMessage name="End_Date" />
              <br />
              <Field name="Project_Name" placeholder="Project_Name" as="select">
                <option>select</option>
                {Project.map((key: any) => {
                  return <option value={key.id}>{key.project_name}</option>;
                })}
              </Field>
              <ErrorMessage name="Project_Name" />
              <br />

              <Field
                name="Description"
                component="textarea"
                placeholder="Description"
                type="longtext"
              ></Field>
              <ErrorMessage name="Description" />
              <br />

              <Field name="Status" placeholder="Status" type="text" as="select">
                <option>select</option>
                {Status.map((key: any) => {
                  return <option value={key.id}>{key.status}</option>;
                })}
              </Field>
              <ErrorMessage name="Status" />
              <br />

              <Field
                name=" TypeOfTask"
                placeholder=" TypeOfTask"
                type="text"
                as="select"
              >
                <option>select</option>
                {Status.map((key: any) => {
                  return <option value={key.id}>{key.type}</option>;
                })}
              </Field>
              <ErrorMessage name=" TypeOfTask" />
              <br />

              <Field name="Members" placeholder="Name" as="select">
                <option>select</option>
                {Member.map((key: any) => {
                  return (
                    <option value={key.first_name}>{key.first_name}</option>
                  );
                })}
              </Field>
              <ErrorMessage name="Members" />
            </div>
          </div>

          <div className="buttonStyle">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Task_Form;
