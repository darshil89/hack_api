import React, { useState } from "react";
import "./loginPage.css";
import axios from 'axios';
export default function SignUp(props) {
  const [firstName, setName1] = useState("");
  const [lastName, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [allentry, setAllentry] = useState([]);

  const Submit = (e) => {
    e.preventDefault();

    if (password1.localeCompare(password2) === 0) {
      const newEntry = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password1,
        password2: password2,
      };
      setAllentry([...allentry, newEntry]);
      console.log(allentry);
      axios.post('http://localhost:3001/signin', newEntry)
      
    } else {
      props.showAlert("Password Not Matched", "warning");
    }
  };
  const register= async()=>{
    const UserData = await fetch(
      "http://localhost:3001/signin",
      {
        method : "POST",

      }
    )
    // We gonna send them to login page after this with the user data


    goToTravel()
  }
  const goToTravel = () => {
    console.log("gototravel");
  };

  return (
    <>
      <div className="container bigboss d-flex">
        <div className="my-5 b1">
          <form action="signin" className="box" onSubmit={Submit} method="post">
            <h1 className="heading">Create Yourself</h1>
            <hr />
            <div className="one">
              <label htmlFor="firstName" className="question">
                First Name
              </label>
              <input
                onChange={(e) => setName1(e.target.value)}
                type="text"
                required
                placeholder="Enter Your First Name"
                name="firstName"
                autoComplete="off"
                id="firstName"
              />
            </div>

            <div className="two">
              <label htmlFor="lastName" className="question">
                Last Name
              </label>
              <input
                autoComplete="off"
                onChange={(e) => setName2(e.target.value)}
                type="text"
                placeholder="Enter Your Last Name"
                required
                name="lastName"
                id="lastName"
              />
            </div>

            <div className="three">
              <label htmlFor="email" className="question">
                Email
              </label>

              <input
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="abc@gmail.com"
                required
                name="email"
                id="email"
              />
            </div>

            <div className="fur">
              <label htmlFor="password" className="question">
                Password
              </label>
              <input
                autoComplete="off"
                onChange={(e) => setPassword1(e.target.value)}
                type="password"
                required
                name="password"
                placeholder="New Password"
                id="password"
              />
            </div>

            <div className="five">
              <label htmlFor="Cpassword" className="question">
                Confirm Password
              </label>
              <input
                autoComplete="off"
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                required
                name="Cpassword"
                placeholder="ReEnter Password"
                id="Cpassword"
              />
            </div>
            <button type="submit" onClick={register} className="go">
              Submit
            </button>
          </form>
        </div>
        <div className="my-5 b2">
        <img src={process.env.PUBLIC_URL + '/door.png'} alt="Cant load image" className="door" />
        </div>
      </div>
    </>
  );
}
