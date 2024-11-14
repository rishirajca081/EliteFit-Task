import React ,{useEffect, useState}from "react";
import Cards from "./Cards";
import Form from "./Form";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const openForm = useSelector((state) => state.form);
  const [upCount, setUpCount] = useState(0);
  const [missCount, setMissCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const load = useSelector((state) => state.rerender); 
  useEffect(() => {
   
    const today = new Date().toISOString().split('T')[0];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

   
    const upcomingCount = tasks.filter(task => task.dueDate >= today && task.status !== 'completed').length;
    const missedCount = tasks.filter(task => task.dueDate < today && task.status !== 'completed').length;
    const completedCount = tasks.filter(task => task.status === 'completed').length;
    const totalCount = tasks.length;

   
    setUpCount(upcomingCount);
    setMissCount(missedCount);
    setCompleteCount(completedCount);
    setTotalCount(totalCount);
  }, [load]);


  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#e9ecef",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Total Tasks */}
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Total Tasks <span style={{ fontWeight: "bold" }}>{totalCount}</span>
        </button>

        {/* Completed Tasks */}
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "linear-gradient(45deg, #4CAF50 30%, #81C784 90%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Completed Tasks <span style={{ fontWeight: "bold" }}>{completeCount}</span>
        </button>

        {/* Missed Tasks */}
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "linear-gradient(45deg, #FF3D00 30%, #FF8A65 90%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Missed Tasks <span style={{ fontWeight: "bold" }}>{missCount}</span>
        </button>

        {/* Upcoming Tasks */}
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "linear-gradient(45deg, #3F51B5 30%, #7986CB 90%)",
            color: "white",
            border: "none",
            borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          Upcoming Tasks <span style={{ fontWeight: "bold" }}>{upCount}</span>
        </button>
      </div>

      {!openForm ? <Cards /> : <Form />}
    </div>
  );
};

export default Dashboard;
