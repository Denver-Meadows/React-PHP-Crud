import React from "react";
import { useState } from "react";
import axios from "axios";

// basic form and handle functions.  Only worried about functionality of app.

const CreateUser = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // sending data to php via axios -- need to verify path which is the current Apache port
    // setup a new API directory in xampp htdocs and echo "testing" to ensure it was setup correctly.
    // we received an XMLHTTPRequest error because CORS was blocked when trying to post the below data to port 80
    // To solve this, we copied some .htaccess code from lumen and added that file to our php API directory.
    // To confirm it was working, when hitting save on form, go to network, select save and preview, we saw our "testing" message fromt he serverr
    axios.post("http://localhost:80/api/user/save", inputs);

    console.log(inputs);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Email: </label>
        <input type="eamil" name="email" onChange={handleChange} />
        <br />
        <label>Mobile: </label>
        <input type="number" name="mobile" onChange={handleChange} />
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
