import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RaisedButton } from 'material-ui'
import styled from 'styled-components'

import {
  renderTextField,
  renderPasswordField,
  validator
} from '../../components/InputFields'

import ColorRegistry from '../../assets/ColorRegistry'
import { FlexDiv } from '../../components/common'
import logo from '../../assets/Images/ChekRiteLogo.svg'

const Logo = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  width: 60px;
  height: 60px;
  margin: auto;
  margin-bottom: 10px;
`

const LineBar = styled.div`
  border: 2px solid #1ad077;
  margin-left: -3%;
  margin-bottom: 10px;
  width: 106%;
`

let SignInForm = props => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={ handleSubmit }>
      <Logo />
      <LineBar />
      <FlexDiv style={{justifyContent: 'flex-start', color: 'black'}}>
        <span style={{fontWeight: 'bold'}}>Sign In &nbsp;</span>
      </FlexDiv>
      <Field
        name="user_name"
        component={renderTextField}
        validate={[validator.required, validator.email]}
        label="Username"/><br/>
      <Field
        name="password"
        component={renderPasswordField}
        validate={validator.required}
        label="Password"/> <br/>
      { props.children}
      <RaisedButton type="submit" label="Signin" backgroundColor={ColorRegistry.ActiveFontColor} labelStyle={{color: '#ffffff'}} /><br/>
      
    </form>
  )
}

SignInForm = reduxForm({
  form: 'signinForm'
})(SignInForm);

export default SignInForm;
