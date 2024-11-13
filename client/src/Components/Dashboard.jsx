import React from 'react'
import Cards from './Cards'
import Form from './Form'
import { useSelector } from 'react-redux'
const Dashboard = () => {
    const openForm = useSelector((state)=>state.form);
  return (
    <div style={{ width: "100%", backgroundColor: "#e9ecef", position: "relative" }}>
    {!openForm ?
     (   <Cards />) : (<Form />)
    }
      
    </div>
  );
}

export default Dashboard;
