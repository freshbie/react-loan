import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import {
  FormInput,
  FormRadioGroup,
  FormDropDownList
} from "./form-components.jsx";

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
      placeholder={"If Known"}
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
      placeholder={" Enter your personal email address."}
      type={"email"}
      component={FormInput}
    />
    <Field
      key={"Address"}
      id={"Address"}
      name={"Address"}
      label={"What is your Home Address ?"}
      placeholder={"Street"}
      component={FormInput}
    />
    <Field
      key={"suburb"}
      id={"suburb"}
      name={"suburb"}
      placeholder={"Suburb"}
      component={FormInput}
    />
    <Field
      key={"postcode"}
      id={"postcode"}
      name={"postcode"}
      placeholder={"Post Code"}
      component={FormInput}
    />
    <Field
      key={"phone"}
      id={"phone"}
      name={"phone"}
      label={"What are your phone numbers ? (Please provide atleast two)"}
      placeholder={" Your personal number"}
      component={FormInput}
    />
    <Field
      key={"a_phone"}
      id={"a_phone"}
      name={"a_phone"}
      placeholder={" Your Home or Work number"}
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
      key={"children"}
      id={"children"}
      name={"children"}
      label={"How many dependent children do you have ?"}
      component={FormInput}
    />
    <br />
    <p>
      <b>Driver Licence Details</b>
    </p>
    <Field
      key={"driverlicence"}
      id={"driverlicence"}
      name={"driverlicence"}
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
      key={"driverlicence_eff"}
      id={"driverlicence_eff"}
      name={"driverlicence_eff"}
      component={FormInput}
      label={"Effective"}
      type={"date"}
    />
    <Field
      key={"driverlicence_exp"}
      id={"driverlicence_exp"}
      name={"driverlicence_exp"}
      component={FormInput}
      label={"Expiry"}
      type={"date"}
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
    <br />
    <p>
      <b>Employment Details</b>
    </p>
    <Field
      key={"emp"}
      id={"emp"}
      name={"emp"}
      label={"Are you employed ?"}
      component={FormDropDownList}
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
      placeholder={"Employeer Name"}
      component={FormInput}
    />
    <Field
      key={"employer_address"}
      id={"employer_address"}
      name={"employer_address"}
      placeholder={"Employer Address"}
      component={FormInput}
    />
    <Field
      key={"employer_industry"}
      id={"employer_industry"}
      name={"employer_industry"}
      placeholder={"Employer Industry"}
      component={FormInput}
    />
    <Field
      key={"emp_duration"}
      id={"emp_duration"}
      name={"emp_duration"}
      label={"How long have you been employed there ?"}
      component={FormInput}
      type={"date"}
    />
    <Field
      key={"Hours_per_week"}
      id={"Hours_per_week"}
      name={"Hours_per_week"}
      label={"Hour Per Week"}
      component={FormInput}
    />
  </div>
);
