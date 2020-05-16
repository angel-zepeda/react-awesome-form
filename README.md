# react-awesome-form

> React form component with validations

[![NPM](https://img.shields.io/npm/v/react-ez-form.svg)](https://www.npmjs.com/package/react-awesome-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-awesome-form
```

## Usage

```tsx
import React, { Component } from 'react';

import { Form, Input } from 'react-awesome-form';

const MyFunction = () => {
  return (
    <Form>
      <Input
        type='email'
        placeholder='EMAIL'
        name='email'
        value={user.email}
        minLength='2'
        errorLabelStyle={{ color: 'white', width: '100%' }}
        autoComplete='off'
        inputStyle={{ width: '90%', padding: '10px', marginBottom: '10px' }}
        onChange={handleChange}
      />
    </Form>
  );
};
```

## License

MIT © [angel-zepeda](https://github.com/angel-zepeda)
