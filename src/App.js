import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const showAlert = (show = false, type = "", message = "") => {
    setAlert({ show, type, message });
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name) {
      //display alert
      showAlert(true, "danger", "please enter value");
      setAlert({ show: true, message: "please enter value", type: "danger" });
    } else if (name && isEditing) {
      //deal with edit
    } else {
      //show alert

      showAlert(true, "success", "item added to the list");
      setAlert({ show: true, message: "please enter value", type: "success" });

      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn" onClick={clearList}>
            clear Items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
