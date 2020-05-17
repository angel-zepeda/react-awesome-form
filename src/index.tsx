import React, { useState } from 'react';

import { FormProps, InputProps } from './interfaces';

const validateValue = (value: string, type: string) => {
  const emojiRegExp = /\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]/;
  const emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  switch (type) {
    case 'text':
      return emojiRegExp.test(value);
    case 'email':
      return emailRegExp.test(value);
    default:
      return;
  }
};

const Form: React.FunctionComponent<FormProps> = (props) => {
  return <form {...props}>{props.children}</form>;
};

const Input: React.FunctionComponent<InputProps> = (props) => {
  const [errorLabel, setErrorLabel] = useState<string>('');

  return (
    <div>
      <div style={props.errorLabelStyle}>{errorLabel}</div>
      <input
        {...props}
        onBlur={() => {
          switch (props.type) {
            case 'text':
              if (props.minLength) {
                const minLen = props.minLength;
                if (props.value.toString().length < minLen) {
                  setErrorLabel(
                    `El ${props.name} debe ser mayor a ${props.minLength}`
                  );
                } else {
                  validateValue(props.value.toString(), 'text')
                    ? setErrorLabel(`El formato de ${props.name} es incorrecto`)
                    : setErrorLabel('');
                }
              } else {
                validateValue(props.value.toString(), 'text')
                  ? setErrorLabel(`El formato de ${props.name} es incorrecto`)
                  : setErrorLabel('');
              }
              break;
            case 'email':
              validateValue(props.value.toString(), 'email')
                ? setErrorLabel('')
                : setErrorLabel(`El formato de ${props.name} es incorrecto`);
              break;
            case 'number':
              if (props.minLength) {
                const minLen = props.minLength;
                if (props.value < minLen) {
                  setErrorLabel(
                    `El ${name} debe ser mayor a ${props.minLength}`
                  );
                } else {
                  setErrorLabel('');
                }
              }
          }
        }}
      />
    </div>
  );
};

export { Form, Input };
