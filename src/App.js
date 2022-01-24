
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Home } from './Component/Home';
import { About } from './Component/About';
import { Navbar } from './Component/Layout/Navbar';
import { Contact } from './Component/Contact';
import {Routes,Route} from 'react-router-dom';
import { NotFound } from './Component/NotFound';
import { AddStudent } from './Student/AddStudent';
import { EditStudent } from './Student/EditStudent';



function App(props) {
  return (
    <div className='App'>


      <Navbar/>
      <Routes>
      
     

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/student/add" element={<AddStudent/>} />
  <Route path='/edit/:id' element={< EditStudent/>}></Route>
   
      <Route  element={<NotFound/>} />
 
   
</Routes>
</div>
 
  );
}

export default App;
