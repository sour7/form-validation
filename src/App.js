import { Forms } from './components/Forms';
import './App.css';
// import { useRef } from 'react';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:"username should be 3-16 character and shouldn't include any special character ",
      required:true,
      label: 'Username',
      pattern:"^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage:"email address is not valid",
      required:true,
      label: 'Email',
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:"greater than 8 character and must include 1 number, 1 letter, 1 special character ",
      required:true,
      label: 'Password',
      pattern:`^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$`,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'ConfirmPassword',
      errorMessage:"password doesn't match",
      required:true,
      label: 'Confirm Password',
      pattern:values.password,
    },
  ];

  // console.log(username);
  // console.log('re-rendered');

  // const usernameRef = useRef()
  // console.log(usernameRef)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(usernameRef)
    // const data= new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="App">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        {/* <Forms placeholder="username" refer={usernameRef} /> */}
        {inputs.map((input) => (
          <Forms key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
