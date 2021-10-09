import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [credentials, setCredentials] = useState([]);
  console.log(credentials);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/contact")
      .then((response) => {
        console.log("response data------>", response.data.user);
        setCredentials(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      {credentials.map((item) => (
        <div
          style={{ border: "1px solid red", width: "40%", margin: "0 auto" }}
        >
          <h1>Email: {item.email}</h1>
          <h2>Username: {item.username}</h2>
          <h3>role_id: {item.role_id}</h3>
          <form>
            <input type="text" name="name" placeholder="enter text" />
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;
