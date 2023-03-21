import SingUpPage from "./Pages/SingUpPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LogIn from "./Pages/LogIn";
import Account from "./Components/Layouts/Account";
import {useState} from "react";
import Profile from "./Pages/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Pages/Programs";
import CurrentProgram from "./Pages/CurrentProgram";
import Exercises from "./Pages/Exercises";
import Results from "./Pages/Results";
import AddExercise from "./Pages/AddExercise";
import PageWithChart from "./Pages/PageWithChart";

function App() {

  let ListOfexercises = [
    ["2014-2-12", "arms", "Поднятие штанги стоя", "3", "23"],
    [ "2018-12-11", "legs", "Присидания", "2", "100"],
    [ "2022-5-12", "back", "Подтягивания", "1", "-"],
    [ "2002-2-2", "back", "Тяга", "5", "150"],
    [ "2022-11-15", "back", "Тяга в наклоне", "5", "70"],
    [ "2022-11-12", "arms", "Молоты", "5", "11"],
    [ "2022-11-12", "chest", "Жим лежа", "5", "90"],
  ];

  const [exercises, setExercises] = useState(ListOfexercises);


  const [login, setLogin] = useState(false);
  const [save, setSave] = useState(false);
  const auth = () => {
    setLogin((current) => !current);
  }

  const saveInf = () => {
    setSave((current) => !current);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar login={login} auth={auth}/>}>
          <Route index element={<MainPage />}/>
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<CurrentProgram />}/>
          <Route path="exercises" element={<Exercises />} />
          {
            login?
              <>
                <Route path="profile/:id" element={<Profile save={save} saveInf={saveInf}/>}/>
                <Route path="Results" element={<Results exercises={exercises}
                            setExercises={setExercises}
                            ListOfexercises={ListOfexercises}/>}/>
                <Route path="Results/addExercise" element={<AddExercise
                            setExercises={setExercises}
                            ListOfexercises={ListOfexercises}/>}/>}/>
                <Route path="MyChart" element={<PageWithChart />}/>
              </>
              :
              <Route path="account/" element={<Account/>} >
                <Route path="singUp" element={<SingUpPage login={login} auth={auth}/>}/>
                <Route path="logIn" element={<LogIn login={login} auth={auth}/>}/>
              </Route>
          }

          <Route path="*" element={<MainPage login={login} auth={auth}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
