import React, { useState } from "react";
import "./loginPage.css";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
export default function LoginPage() {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { name: name, adress: adress };
    setAllEntry([...allEntry, newEntry]);

    //the above line is used to store the future entries together with old entries

    console.log(allEntry);
  };

  const goToTravel = () => {
    console.log("gototravel");
  };

  // function onPlaceSelect(value) {
  //   console.log(value);
  // }

  // function onSuggectionChange(value) {
  //   console.log(value);
  // }

  return (
    <>
      <div className="container bigBoss">
        <div className="my-5 box">
          <h1 className="heading">Where are You?</h1>
          <hr />
          <form action="" onSubmit={submitForm}>
            <div>
              <label htmlFor="name" className="question">
                Email
              </label>
              <input
                placeholder="abc@gmail.com"
                type="email"
                name="name"
                id="name"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
             <div>
              <label htmlFor="adress" className="question">
                Your Adress
              </label>
              <input
                type="text"
                name="adress"
                id="adress"
                value={adress}
                autoComplete="off"
                onChange={(e) => setAdress(e.target.value)}
              />
            </div> 

            {/* <GeoapifyContext apiKey="d7b07be003e54a02bce4d5e4609269fe">
              <GeoapifyGeocoderAutocomplete
                placeholder="Enter address here"
                type={type}
                lang={language}
                position={position}
                countryCodes={country_code}
                limit={limit}
                value={displayValue}
                placeSelect={onPlaceSelect}
                suggestionsChange={onSuggectionChange}
              />
            </GeoapifyContext> */}
            <button type="submit" className="go" onClick={goToTravel}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

{
  /* <div>
  {
      allEntry.map((currEle)=>{
          return(
              <div >
                  <p>{currEle.name}</p>
                  <p>{currEle.adress}</p>

              </div>
          )
      })
  }
</div> */
}
