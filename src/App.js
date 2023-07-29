import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Acheive from './Component/Acheive/Acheive';
import Form from './Component/Form/Form'
import Images from './Component/Images/Images';
import AboutUs from './Component/AboutUs/AboutUs';
import Testimonial from './Component/Testimonial/Testimonial';
import Question from './Component/Question/Question';
import Journey from './Component/Journey/Journey';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Home/>
      <Acheive/>
      <Form/>
      <Images/>
      <AboutUs/>
      <Testimonial/>
      <Question/>
      <Journey/>
      <Footer/>
    </div>
  );
}

export default App;
