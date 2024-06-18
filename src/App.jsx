/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Inputfield";
import "./CSS/index.css";

export default function App() {
  const [typing, setTyping] = useState("");
  const [task, setTask] = useState([]);
  const url = "http://localhost:8000/";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTask(data);
      });
  }, []);

  const enteredTask = (e) => {
    const typedData = e.target.value;
    setTyping(typedData);
  };

  const addTask = () => {
    const addedData = [
      ...task,
      {
        task: typing,
      },
    ];
    setTask(addedData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const updateTask = () => {
    const findingIndex = task.findIndex(task);
    console.log(findingIndex);
  };

  return (
    <>
      <div className="to-do-wrapper">
        <div className="heading">
          <h1>TO DO LIST</h1>
        </div>
        <div className="add-input">
          <div className="input-wrapper">
            <Input placeholder="Enter your task here" typing={enteredTask} />
          </div>
          <div>
            <Button btn="ADD" click={addTask} />
          </div>
        </div>
        {task?.map((value, index) => {
          return (
            <div className="task-wrapper" key={index}>
              <div className="checkbox-wrapper">
                <input type="checkbox" className="checkbox" />
              </div>
              <div>
                <label className="task">{value.task}</label>
              </div>
              <div>
                <Button btn="UPDATE" click={updateTask} />
              </div>
              <div>
                <Button
                  btn="DELETE"
                  click={() => {
                    const updatedArr = task?.filter((value, idx) => {
                      const deletedData = index !== idx;
                      fetch(url, {
                        method: "DELETE",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(deletedData),
                      })
                        .then((res) => {
                          return res.json();
                        })
                        .then((data) => {
                          setTask(data);
                        });
                    });
                    setTask(updatedArr);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
