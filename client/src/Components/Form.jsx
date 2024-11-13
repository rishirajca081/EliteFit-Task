import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowForm } from "../features/Form/ShowFormslice";
import { removeFormdata } from "../features/Form/formDataReducer";

const Form = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.formdata);
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    priority: data.priority,
    dueDate: data.dueDate,
    completed: false,
  });

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
  };

  const [tasks, setTasks] = useState(loadTasks);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: data.id || Date.now(), 
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      dueDate: formData.dueDate,
      completed: formData.completed,
    };

    
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const filteredTasks = existingTasks.filter((task) => task.id !== data.id);
   
    const updatedTasks = [...filteredTasks, newTask];

   
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);

   
    setFormData({
      id: "", 
      title: "",
      description: "",
      priority: "",
      dueDate: "",
      completed: false,
    });

    dispatch(setShowForm(false)); 
    dispatch(removeFormdata());
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50px", 
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "400px",
        maxWidth: "100%",
      }}
    >
      <h2>{data.length !== 0 ? "Update Task" : "Add Task"}</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
            maxLength="20"
          />
        </div>

        {/* Description */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
            maxLength={120}
          />
        </div>

        {/* Priority */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            required
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Due Date */}
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            onFocus={(e) => e.target.showPicker()} 
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            min={new Date().toISOString().split("T")[0]} 
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "40%",
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#007acc",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {data.length !== 0 ? "Update Task" : "Add Task"}{" "}
          </button>
          <button
            style={{
              width: "40%",
              padding: "10px",
              cursor: "pointer",
              backgroundColor: "#007acc",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => {
              dispatch(setShowForm(false));
              dispatch(removeFormdata());
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
