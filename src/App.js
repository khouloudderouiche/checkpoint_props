
import './App.css';
import Profile from "./components/Profile";
import  Myimage from './My_image/DSC_0007.JPG';

function App() {
  function handleName(el){
    alert(`this is ${el}`)
     }

return (
    <div className= "App" > 
        <Profile  
        fullname='derouich khouloud'
        bio='j ai eu mon maitrise en sciences de la vie et de la terre en 2009 et un diplome de delf a viser profesionel aussi un diplome en marcketing  '
        profession='web developper'
        handleName={handleName}>
        {Myimage}
        </ Profile>     
        
 </div>
  );  
}


export default App;
