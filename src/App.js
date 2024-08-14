import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Pizza from "./Components/Pizza";
import {Routes, Route} from 'react-router-dom';
import AddPizza from "./Components/AddPizza";
import UpdatePizza from "./Components/UpdatePizza";



function App(){
  return(
    <>
   <Menu/>

   
   <Routes>
<Route path="/home" element={<Home/>}/> 
<Route path="/about" element={<About/>}/> 
<Route path="/pizza" element={<Pizza/>}/>
<Route path="/contactus" element={<ContactUs/>}/>
<Route path="/add-pizza" element={<AddPizza/>}/>
<Route path="/update-pizza/:id" element={<UpdatePizza/>}/>  
<Route path="/menu" element={<Menu/>}/> 
<Route path="/footer" element={<Footer/>}/> 
  </Routes>




   <Footer/>
  
    </>
  )
}

export default App;


