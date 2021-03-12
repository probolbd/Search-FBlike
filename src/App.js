import logo from "./logo.svg";
import "./App.css";
import { AccessAlarm, ThreeDRotation, HomeIcon } from "@material-ui/icons";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { useEffect, useState } from "react";
import MealDetail from "./Components/MealDetail/MealDetail";
import MealFind from "./Components/MealDetail/MealFind";

function App() {
  const [likeColor, setLikeColor] = useState("");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [randomUser, setRandomUser] = useState({});
  useEffect(() => {
    //All user
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    //single user
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setSingleUser(data));

    //Random User
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setRandomUser(data.results[0]));
  }, []);
  return (
    <div>
      <ThumbUpIcon
        onClick={() => setLikeColor(likeColor ? "" : "secondary")}
        color={likeColor}
      ></ThumbUpIcon>
      {users.map((user) => (
        <li>{user.name}</li>
      ))}
      <h2>Name: {singleUser.name}</h2>
      <h2>Email: {randomUser.name?.last}</h2>
      <MealDetail></MealDetail>
      <MealFind></MealFind>
    </div>
  );
}

export default App;
