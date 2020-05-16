import React, { useState } from 'react'

import { FormProps, InputProps } from './interfaces'

const Form: React.FunctionComponent<FormProps> = ({ formStyle, children }) => {
  return <form style={formStyle}>{children}</form>
}

const Input: React.FunctionComponent<InputProps> = ({
  autoComplete,
  name,
  type,
  inputStyle,
  placeholder,
  onChange,
  minLength,
  maxLength,
  value,
  errorLabelStyle
}) => {
  const emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  const emojiRegExp = /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/
  const [errorLabel, setErrorLabel] = useState<string>('')
  return (
    <>
      <div style={errorLabelStyle}>{minLength ? errorLabel : ''}</div>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete !== undefined ? autoComplete : 'on'}
        style={inputStyle}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength !== undefined ? parseInt(maxLength) : 524288}
        onBlur={() => {
          switch (type) {
            case 'text':
              if (minLength) {
                const minLen = parseInt(minLength)
                if (value.toString().length < minLen) {
                  setErrorLabel(`El ${name} debe ser mayor a ${minLength}`)
                } else {
                  emojiRegExp.test(value.toString())
                    ? setErrorLabel(`El formato de ${name} es incorrecto`)
                    : setErrorLabel('')
                }
              }
              break
            case 'email':
              if (!emailRegExp.test(value.toString())) {
                setErrorLabel(`El formato de ${name} es incorrecto`)
              } else {
                setErrorLabel('')
              }
              break
            case 'number':
              if (minLength) {
                const minLen = parseInt(minLength)
                if (value < minLen) {
                  setErrorLabel(`El ${name} debe ser mayor a ${minLength}`)
                } else {
                  setErrorLabel('')
                }
              }
          }
        }}
      />
    </>
  )
}

export { Form, Input }
