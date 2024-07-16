import { useState } from 'react';

export const Login = () => {
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [message, setMassege] = useState('');
  const user = { user1: { usarname: 'admin', password: 'password' } };
  const usernameOnChange = (event) => {
    setUsername(event.target.value);
  };
  const passwordOnChange = (event) => {
    setPass(event.target.value);
  };
  const handlerClick = () => {
    if (user.user1.usarname === username && user.user1.password === pass) {
      setMassege('login saccess');
      document.getElementsByTagName('p')[0].style.color = 'green';
    } else {
      setMassege('wrong  username & password!!!');
      document.getElementsByTagName('p')[0].style.color = 'red';
    }
  };
  return (
    <div id="container">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg"
        alt="ig-logo"
      ></img>
      <input
        type="text"
        placeholder="Username & email"
        onChange={usernameOnChange}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={passwordOnChange}
      />
      <p>{message}</p>
      <button onClick={handlerClick}>Sign in</button>
    </div>
  );
};
