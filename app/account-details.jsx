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

export const AccountDetails = (
  <div>
    <br />
    <p>
      <b>Main Applicant</b>
    </p>
    <Field
      key={"member_no"}
      id={"member_no"}
      name={"member_no"}
      label={"Member Number"}
      hint={"If Known"}
      component={FormInput}
    />
    <Field
      key={"title"}
      id={"title"}
      name={"title"}
      label={"Title"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={title}
    />
    <Field
      key={"FirstName"}
      id={"FirstName"}
      name={"FirstName"}
      label={"First Name"}
      component={FormInput}
    />
    <Field
      key={"LastName"}
      id={"LastName"}
      name={"LastName"}
      label={"Last Name"}
      component={FormInput}
    />
    <Field
      key={"DOB"}
      id={"DOB"}
      name={"DOB"}
      label={"Date of Birth"}
      component={FormInput}
      type={"date"}
    />
    <Field
      key={"email"}
      id={"email"}
      name={"email"}
      label={"Email"}
      hint={"Hint: Enter your personal email address."}
      type={"email"}
      component={FormInput}
    />
    <Field
      key={"Address"}
      id={"Address"}
      name={"Address"}
      label={"What is your Home Address ?"}
      hint={"Street"}
      component={FormInput}
    />
    <Field
      key={"suburb"}
      id={"suburb"}
      name={"suburb"}
      hint={"Suburb"}
      component={FormInput}
    />
    <Field
      key={"postcode"}
      id={"postcode"}
      name={"postcode"}
      hint={"Post Code"}
      component={FormInput}
    />
    <Field
      key={"phone"}
      id={"phone"}
      name={"phone"}
      label={"What are your phone numbers ? (Please provide atleast two)"}
      hint={"Hint: Your personal number"}
      component={FormInput}
    />
    <Field
      key={"a_phone"}
      id={"a_phone"}
      name={"a_phone"}
      hint={"Hint: Your Home or Work number"}
      component={FormInput}
    />
    <Field
      key={"resident"}
      id={"resident"}
      name={"resident"}
      label={"Are you a NZ Resident ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={resident}
    />
    <Field
      key={"driverlicence"}
      id={"driverlicence"}
      name={"driverlicence"}
      label={"What is your Driver Licence Number ?"}
      placeholder={"Number"}
      component={FormInput}
    />
    <Field
      key={"driverlicence_ver"}
      id={"driverlicence_ver"}
      name={"driverlicence_ver"}
      placeholder={"Version"}
      component={FormInput}
    />
    <Field
      key={"lihold"}
      id={"lihold"}
      name={"lihold"}
      label={"What type of Licence do you hold ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={lihold}
    />
    <Field
      key={"children"}
      id={"children"}
      name={"children"}
      label={"How many dependent children do you have ?"}
      component={FormInput}
    />
    <Field
      key={"emp"}
      id={"emp"}
      name={"emp"}
      label={"Are you employed ?"}
      layout={"horizontal"}
      component={FormRadioGroup}
      data={emp}
    />
    <Field
      key={"occupation"}
      id={"occupation"}
      name={"occupation"}
      label={"What is your occupation ?"}
      component={FormInput}
    />
    <Field
      key={"employer"}
      id={"employer"}
      name={"employer"}
      label={"Who is your employer ?"}
      hint={"Employeer Name"}
      component={FormInput}
    />
    <Field
      key={"employer_address"}
      id={"employer_address"}
      name={"employer_address"}
      hint={"Employer Address"}
      component={FormInput}
    />
    <Field
      key={"employer_suburb"}
      id={"employer_suburb"}
      name={"employer_suburb"}
      hint={"Employer Suburb"}
      component={FormInput}
    />
    <Field
      key={"emp_duration"}
      id={"emp_duration"}
      name={"emp_duration"}
      label={"How long have you been employed there ?"}
      component={FormInput}
    />
  </div>
);
