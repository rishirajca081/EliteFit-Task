import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
function App() {
  return (
    <>
    <Header/>
      <div style={{display:"flex",flexDirection:"row"}}>
        <Sidebar/>
        <Dashboard/>
      </div>
    </>
  );
}

export default App;
