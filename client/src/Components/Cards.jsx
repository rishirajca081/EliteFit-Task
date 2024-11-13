import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {setFormdata} from "../features/Form/formDataReducer" 
import {setShowForm} from "../features/Form/ShowFormslice"
import {updateui} from "../features/Loadpage/Loadcontent"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Card = ({ title, description, dueDate, priority, status, onDelete, onToggleComplete ,id}) => {
    const dispatch = useDispatch()
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
    
  const toggleMenu = () => setShowMenu(!showMenu);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const onEdit =()=>{
        const data = {title,description,priority,dueDate,id};
        dispatch(setFormdata(data))
        dispatch(setShowForm(true))
  }
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      width: '250px',
      height: '280px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h2 style={{ margin: '0 0 10px' }}>{title}</h2>
      <p style={{ margin: '0 0 10px', color: '#555' }}>{description}</p>
      <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>Due Date: {dueDate}</p>
      <p style={{ margin: '0 0 10px' }}>Priority: {priority}</p>
      <p style={{ color: status === 'completed' ? 'green' : 'red' }}>
        Status: {status === 'completed' ? 'Completed' : 'Pending'}
      </p>

      {/* Action buttons (edit, delete, complete) at the bottom */}
      <div style={{
        position: 'absolute',
        bottom: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
      }}>
        <button
          onClick={onEdit}
          style={iconButtonStyle}
          title="Edit Task"
        >
          <FontAwesomeIcon icon={faEdit} style={{ color: '#007bff' }} />
        </button>
        <button
          onClick={onDelete}
          style={iconButtonStyle}
          title="Delete Task"
        >
          <FontAwesomeIcon icon={faTrashAlt} style={{ color: '#dc3545' }} />
        </button>
        <button
          onClick={onToggleComplete}
          style={iconButtonStyle}
          title={status === 'completed' ? 'Set Not Completed' : 'Set Completed'}
        >
          <FontAwesomeIcon icon={status === 'completed' ? faTimesCircle : faCheckCircle} style={{ color: '#28a745' }} />
        </button>
      </div>
    </div>
  );
};

const iconButtonStyle = {
  padding: '8px',
  backgroundColor: '#fff',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
};

const Cards = () => {
    const dispatch = useDispatch();
  
    
    const filter = useSelector((state) => state.filters);          // Priority filter
    const sortdata = useSelector((state) => state.sortdata);       // Sort option
    const taskviewfilter = useSelector((state) => state.taskviewfilter); // Task view filter
    const searchbar = useSelector((state) => state.searchbar);     // Search bar input
    const load = useSelector((state) => state.rerender);           // Trigger re-render on update
  
    const [cards, setCards] = useState([]);
  
    const handleDelete = (id) => {
      const updated = cards.filter(card => card.id !== id);
      localStorage.setItem('tasks', JSON.stringify(updated));
      dispatch(updateui());
    };
  
    const handleToggleComplete = (id) => {
      const updatedCards = cards.map(card =>
        card.id === id ? { ...card, status: card.status === 'completed' ? 'pending' : 'completed' } : card
      );
      setCards(updatedCards);
      localStorage.setItem('tasks', JSON.stringify(updatedCards));
    };
  
    useEffect(() => {
     
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
      
      if (filter) {
        tasks = tasks.filter(task => filter.includes(task.priority));
      }
  
      
      const currentDate = new Date().toISOString().split('T')[0];
      if (taskviewfilter === 'Upcoming') {
        tasks = tasks.filter(task => task.dueDate >= currentDate && task.status !== 'completed');
      } else if (taskviewfilter === 'Missed') {
        tasks = tasks.filter(task => task.dueDate < currentDate && task.status !== 'completed');
      } else if (taskviewfilter === 'Completed') {
        tasks = tasks.filter(task => task.status === 'completed');
      }
  
      
      tasks.sort((a, b) => {
        if (sortdata === 'Date') {
      
          return new Date(a.dueDate) - new Date(b.dueDate);
        } else if (sortdata === 'Priority') {
      
          const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        }
        return 0; 
      });
  
    
      if (searchbar) {
        tasks = tasks.filter(task =>
          task.title.toLowerCase().includes(searchbar.toLowerCase()) ||
          task.description.toLowerCase().includes(searchbar.toLowerCase())
        );
      }
  
    
      setCards(tasks);
    }, [filter, sortdata, taskviewfilter, searchbar, load]);
  
    return (
        <>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          padding: '20px',
          margin: '5px',
          justifyContent: 'center'
        }}>
          {cards.map(card => (
            <div 
              key={card.id} 
              style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',  
                ':hover': {
                  transform: 'scale(1.05)', 
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.5)'
                }
              }}
            >
              <Card
                id={card.id}
                title={card.title}
                description={card.description}
                dueDate={card.dueDate}
                priority={card.priority}
                status={card.status}
                onDelete={() => handleDelete(card.id)}
                onToggleComplete={() => handleToggleComplete(card.id)}
              />
            </div>
          ))}
        </div>
          {cards.length===0 && (
            <div style={{display:"flex", justifyContent:"center"}}> No Tasks Found !</div>
          )}
          </>
    );
  };

export default Cards;

