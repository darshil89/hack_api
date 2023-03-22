import React, { useState } from "react";
import "./loginPage.css";

export default function SignUp(props) {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [allentry, setAllentry] = useState([]);

  const Submit = (e) => {
    e.preventDefault();

    if (password1.localeCompare(password2) == 0) {
      const newEntry = {
        FirstName: name1,
        LastName: name2,
        email: email,
        password: password1,
        password: password2,
      };
      setAllentry([...allentry, newEntry]);
      console.log(allentry);
    } else {
      props.showAlert("Password Not Matched", "warning");
    }
  };
  const goToTravel = () => {
    console.log("gototravel");
  };

  return (
    <>
      <div className="container bigboss d-flex">
        <div className="my-5 b1">
          <form action="" className="box" onSubmit={Submit}>
            <h1 className="heading">Create Yourself</h1>
            <hr />
            <div className="one">
              <label htmlFor="name1" className="question">
                First Name
              </label>
              <input
                onChange={(e) => setName1(e.target.value)}
                type="text"
                required
                placeholder="Enter Your First Name"
                name="name"
                autoComplete="off"
                id="name"
              />
            </div>

            <div className="two">
              <label htmlFor="name2" className="question">
                Last Name
              </label>
              <input
                autoComplete="off"
                onChange={(e) => setName2(e.target.value)}
                type="text"
                placeholder="Enter Your Last Name"
                required
                name="name2"
                id="name2"
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
            <button type="submit" onClick={goToTravel} className="go">
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
