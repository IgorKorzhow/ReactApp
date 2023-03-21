import MyLabel from "../Components/MyLabel/MyLabel";
import MyInput from "../Components/MyInput/MyInput";
import MyButton from "../Components/MyButton/MyButton";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

function LogIn(props) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
        <MyButton onClick = {changeLogin}>LogIn</MyButton>
      </div>
    </>
  );
}

export default LogIn;