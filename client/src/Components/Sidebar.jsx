import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setShowForm} from "../features/Form/ShowFormslice"
import {setSearchbar} from "../features/Search/SearchbarReducer"
import { setFilter } from '../features/Search/FilterReducer';
import { setTaskview } from '../features/Search/TaskViewReducer';
import {setsortdata} from "../features/Search/SortReducer"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedTaskView, setSelectedTaskView] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [searchbarinput,Setsearchbarinput] = useState('')
const dispatch=useDispatch();
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleFilterChange = (filter) => {
    const data = selectedFilter === filter ? "" : filter
    setSelectedFilter(data);
    dispatch(setFilter(data))
  };

  const handleTaskViewChange = (view) => {
    const data = selectedTaskView === view ? "" : view;
    setSelectedTaskView(data);
    dispatch(setTaskview(data))
  };

  const handleSortChange = (sortOption) => {
    const data = selectedSortOption === sortOption ? "" : sortOption
    setSelectedSortOption(data);
    dispatch(setsortdata(data))
  };

  const clearFilters = () => {
    setSelectedFilter("");
    setSelectedTaskView("");
    setSelectedSortOption("");
    dispatch(setFilter(""));
    dispatch(setTaskview(""));
    dispatch(setsortdata(""));
    Setsearchbarinput("");
    dispatch(setSearchbar(""))

  };

  const handleSearchbarChange = (e)=>{
    Setsearchbarinput(e.target.value);
    dispatch(setSearchbar(e.target.value))
  }
  return (
    <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#212529", color: "white" }}>
      <div 
        onClick={toggleSidebar} 
        style={{
          cursor: "pointer",
          padding: "2px",
          backgroundColor: "#ced4da",
          color: "white",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          width: "40px",
          border: "2px solid white",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        ☰
      </div>

      <div style={{
        width: isOpen ? "250px" : "0",
        overflow: "hidden",
        backgroundColor: "#343a40",
        height: "92vh",
        padding: isOpen ? "20px" : "0",
        color: "white",
        fontFamily: "Arial, sans-serif",
        transition: "width 0.3s ease, padding 0.3s ease",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "all 0.3s ease"
      }}>
        {isOpen && (
          <>
            <input 
              type="text" 
              placeholder="Search or Add Task" 
              style={{
                width: "92%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                marginBottom: "15px",
              }}
              value={searchbarinput}
              onChange={handleSearchbarChange}
            />
            <button style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              backgroundColor: "#007acc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }} onClick={()=>{dispatch(setShowForm(true))}}>Add Task</button>
            
            <div style={{ marginBottom: "20px" }}>
              <h3>Filters</h3>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedFilter === "High"}
                  onChange={() => handleFilterChange("High")} 
                  style={{ marginRight: "10px" }} 
                />
                High Priority
              </label>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedFilter === "Medium"}
                  onChange={() => handleFilterChange("Medium")} 
                  style={{ marginRight: "10px" }} 
                />
                Medium Priority
              </label>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedFilter === "Low"}
                  onChange={() => handleFilterChange("Low")} 
                  style={{ marginRight: "10px" }} 
                />
                Low Priority
              </label>
            </div>
            
            <div style={{ marginBottom: "20px" }}>
              <h3>Task Views</h3>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedTaskView === "Upcoming"}
                  onChange={() => handleTaskViewChange("Upcoming")} 
                  style={{ marginRight: "10px" }} 
                />
                Upcoming Tasks
              </label>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedTaskView === "Missed"}
                  onChange={() => handleTaskViewChange("Missed")} 
                  style={{ marginRight: "10px" }} 
                />
                Missed Tasks
              </label>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedTaskView === "Completed"}
                  onChange={() => handleTaskViewChange("Completed")} 
                  style={{ marginRight: "10px" }} 
                />
                Completed Tasks
              </label>
            </div>
            
            <div>
              <h3>Sort</h3>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedSortOption === "Date"}
                  onChange={() => handleSortChange("Date")} 
                  style={{ marginRight: "10px" }} 
                />
                Sort by Date
              </label>
              <label style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <input 
                  type="checkbox" 
                  checked={selectedSortOption === "Priority"}
                  onChange={() => handleSortChange("Priority")} 
                  style={{ marginRight: "10px" }} 
                />
                Sort by Priority
              </label>
            </div>

            {/* Clear Filters Button */}
            <button 
              onClick={clearFilters}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "20px",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Clear Filters
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
