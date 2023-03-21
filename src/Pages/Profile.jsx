import MyLabel from "../Components/MyLabel/MyLabel";
import MyInput from "../Components/MyInput/MyInput";
import MyButton from "../Components/MyButton/MyButton";
import classes from "./Profile.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Profile(props) {

  const [nickName, setNickName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const navigate = useNavigate();

  const changeSave = (e) => {
    e.preventDefault();
    props.saveInf();
  }

  useEffect(() => {
    props.save && navigate("/");
    props.saveInf();
  },[props.save]);


  return(
    <div>
      <div className={classes.container}>
        <div>
          <MyLabel style="black" for="nick"></MyLabel>
        </div>
        <MyInput
          value={nickName} setValue={setNickName}
          id="nick" type="text" placeholder="MyNick"/>
        <div>
          <MyLabel style="black"  for="height">Height</MyLabel>
        </div>
        <MyInput
          value={height} setValue={setHeight}
          id="height" type="text" placeholder="180cm"/>
        <div>
          <MyLabel style="black" for="weight">Weight</MyLabel>
        </div>
        <MyInput
          value={weight} setValue={setWeight}
          id="weight" type="text" placeholder="80kg"/>
        <MyButton onClick={changeSave}>Save</MyButton>
      </div>
    </div>
  );
}

export default Profile;