import React from "react";
import { useState } from "react";
import "./loginPage.css";
export default function LogInAcc() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, password: password };
    setAllEntry([...allEntry, newEntry]);

    //the above line is used to store the future entries together with old entries

    console.log(allEntry);
  };

  const goToTravel = () => {
    console.log("gototravel");
  };

  return (
    <>
      <div className="container bigBoss d-flex">
        <div className="my-5 box b1">
          <h1 className="heading">Welcome Back !</h1>
          <hr />
          <form action="" onSubmit={submitForm}>
            <div>
              <label htmlFor="name" className="question">
                Email&nbsp;
              </label>
              <input
                required
                type="email"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="question">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="go" onClick={goToTravel}>
              Submit
            </button>
          </form>
        </div>
        <div className="my-5 b2">
        <img src={process.env.PUBLIC_URL + '/loginDoor.png'} alt="Example" />

        </div>
      </div>
    </>
  );
}
