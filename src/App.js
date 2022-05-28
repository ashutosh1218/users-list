import React, { useState } from "react"
import CreateArea from "./components/CreateArea";
import Display from "./components/Display";
import Footer from "./components/Footer";
function App() {
  const [users, updateUsers] = useState([]);
  function handleClick(item) {
    const email = item.email
    var ok = true
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) ok = false
    }
    ok
      ? updateUsers((prevItems) => {
        return [...prevItems, item]
      })
      : alert("Enter an unique email Id")
  }
  return (
    <div className="App page-wrapper bg-gra-03 p-t-45 p-b-50 row">
      <CreateArea click={handleClick} />
      <div className="col-6 right bg-gra-03">
        <div className="row">
        {users.map((user, index) =>
          <Display
            key={index}
            name={user.name}
            email={user.email}
            phone={user.phone}
            dob={user.dob}
          />
        )}
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
