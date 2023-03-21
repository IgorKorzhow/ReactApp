import MyLabel from "../Components/MyLabel/MyLabel";
import MyInput from "../Components/MyInput/MyInput";
import MyButton from "../Components/MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function SingUpPage(props) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setrPassword] = useState("");

  const navigate = useNavigate();

  const changeLogin = (e) => {
    e.preventDefault();
    props.auth();
  }

  useEffect(() => {
    props.login && navigate("/");
  },[props.login]);

  return (
    <>
      <div>
        <MyLabel for="login">Login</MyLabel>
      </div>
      <MyInput value={login} setValue={setLogin}
               id="login" type="text" placeholder="Something@gmail.com"/>
      <div>
        <MyLabel for="password">Password</MyLabel>
      </div>
      <MyInput value={password} setValue={setPassword}
        id="password" type="text" placeholder="MyPassword1234"/>
      <div>
        <MyLabel for="repeatPassword">Repeat your password</MyLabel>
      </div>
      <MyInput value={rpassword} setValue={setrPassword}
        id="repeatPassword" type="text" placeholder="MyPassword1234"/>
      <MyButton onClick={changeLogin}>Register</MyButton>
    </>
  );
}

export default SingUpPage;