import './App.css';
import Footer from './Components/Footer';
import Top from './Components/Top';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';
import NewNavbar from './Components/NewNavbar';


function App() {


  return (
    <div className="App">
      <Top/>
      <NewNavbar/>
      <MainRoutes />
      <Footer />
      
    </div>
  );
}

export default App;
