import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormRadioGroup } from "./form-components.jsx";

import {
  userNameValidator,
  emailValidator,
  addressValidator,
  requiredValidator,
  phoneValidator,
  dobValidator,
  driverValidator,
  childValidator
} from "./validators.jsx";

import { title, resident, lihold, emp } from "./data.jsx";

export const JointAccountDetails = (
  <div>
    <br />
    <Field
      key={"j_app"}
      id={"j_app"}
      name={"j_app"}
      label={"Do you have a join applicant ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={resident}
    />
    <br />
    <p>
      <b>If Yes, Please fill in the details below</b>
    </p>
    <p>
      <b>Joint Applicant Details</b>
    </p>
    <Field
      key={"j_title"}
      id={"j_title"}
      name={"j_title"}
      label={"Title"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={title}
    />
    <Field
      key={"j_FirstName"}
      id={"j_FirstName"}
      name={"j_FirstName"}
      label={"First Name"}
      component={FormInput}
    />
    <Field
      key={"j_LastName"}
      id={"j_LastName"}
      name={"j_LastName"}
      label={"Last Name"}
      component={FormInput}
    />
    <Field
      key={"j_DOB"}
      id={"j_DOB"}
      name={"j_DOB"}
      label={"Date of Birth"}
      component={FormInput}
      type={"date"}
    />
    <Field
      key={"j_email"}
      id={"j_email"}
      name={"j_email"}
      label={"Email"}
      hint={"Hint: Enter your personal email address."}
      type={"email"}
      component={FormInput}
    />
    <Field
      key={"j_Address"}
      id={"j_Address"}
      name={"j_Address"}
      label={"What is your Home Address ?"}
      hint={"Street"}
      component={FormInput}
    />
    <Field
      key={"j_suburb"}
      id={"j_suburb"}
      name={"j_suburb"}
      hint={"Suburb"}
      component={FormInput}
    />
    <Field
      key={"j_postcode"}
      id={"j_postcode"}
      name={"j_postcode"}
      hint={"Post Code"}
      component={FormInput}
    />
    <Field
      key={"j_resident"}
      id={"j_resident"}
      name={"j_resident"}
      label={"Are you a NZ Resident ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={resident}
    />
    <Field
      key={"j_driverlicence"}
      id={"j_driverlicence"}
      name={"j_driverlicence"}
      label={"What is your Driver Licence Number ?"}
      placeholder={"Number"}
      component={FormInput}
    />
    <Field
      key={"j_driverlicence_ver"}
      id={"j_driverlicence_ver"}
      name={"j_driverlicence_ver"}
      placeholder={"Version"}
      component={FormInput}
    />
    <Field
      key={"j_lihold"}
      id={"j_lihold"}
      name={"j_lihold"}
      label={"What type of Licence do you hold ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={lihold}
    />
    <Field
      key={"j_children"}
      id={"j_children"}
      name={"j_children"}
      label={"How many dependent children do you have ?"}
      component={FormInput}
    />
    <Field
      key={"j_emp"}
      id={"j_emp"}
      name={"j_emp"}
      label={"Are you employed ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={emp}
    />
    <Field
      key={"j_occupation"}
      id={"j_occupation"}
      name={"j_occupation"}
      label={"What is your occupation ?"}
      component={FormInput}
    />
    <Field
      key={"j_employer"}
      id={"j_employer"}
      name={"j_employer"}
      label={"Who is your employer ?"}
      hint={"Employeer Name"}
      component={FormInput}
    />
    <Field
      key={"j_employer_address"}
      id={"j_employer_address"}
      name={"j_employer_address"}
      hint={"Employer Address"}
      component={FormInput}
    />
    <Field
      key={"j_employer_suburb"}
      id={"j_employer_suburb"}
      name={"j_employer_suburb"}
      hint={"Employer Suburb"}
      component={FormInput}
    />
    <Field
      key={"j_emp_duration"}
      id={"j_emp_duration"}
      name={"j_emp_duration"}
      label={"How long have you been employed there ?"}
      component={FormInput}
    />
  </div>
);
