import React from 'react';

import { Form, Input } from 'react-awesome-form';
import 'react-awesome-form/dist/index.css';

const App = () => {
  const [user, setUser] = React.useState({
    name: '',
    email: ''
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <Form>
      <Input
        style={{ border: '2px solid red' }}
        type='text'
        placeholder='Nombre'
        name='name'
        minLength={2}
        value={user.name}
        onChange={handleChange}
      />

      <Input
        type='email'
        placeholder='email'
        name='email'
        value={user.email}
        onChange={handleChange}
      />
    </Form>
  );
};

export default App;
