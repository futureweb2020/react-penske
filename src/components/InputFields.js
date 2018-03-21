import React from 'react'
import TextField from 'material-ui/TextField'
import { RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'

import ColorRegistry from '../assets/ColorRegistry'

export const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    floatingLabelStyle={{color: ColorRegistry.DisableFontColor}}
    underlineFocusStyle={{borderColor: ColorRegistry.DisableFontColor}}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

export const renderPasswordField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    type="password"
    floatingLabelText={label}
    floatingLabelStyle={{color: ColorRegistry.DisableFontColor}}
    underlineFocusStyle={{borderColor:ColorRegistry.DisableFontColor}}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

export const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
)

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}/>
)

export const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}>
    {children}
  </SelectField>
)

export const validator = {
  required: (value) => (value == null ? 'Required' : undefined),
  email: (value) => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i.test(value)
    ? 'Invalid email' : undefined),
  password: (value) => (value && (value.length < 6 || value.length > 128) ? 'Must be between 6 and 128 characters' : undefined),
  match: (value, fields) => (value && fields.password !== fields.password_confirmation ? 'Passwords do not match' : undefined)
};
