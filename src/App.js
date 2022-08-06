import './App.css';
import Person from './profile/profile';

function App() {
const  handleName = FullName => alert(FullName); 
return (
    <div className="App">
      <Person FullName="NebliMohamedAmine" Profession="student" handleName={handleName} ><img src={process.env.PUBLIC_URL + "/nebli - Copie.jfif"} alt="pic"></img></Person>
    
    </div>
  );
}

export default App;
