import logo from './logo.svg';
import './App.css';
import FullName from './profile/FullName'
import Adress from './profile/Adress';
import ProfilePhoto from './profile/ProfilePhoto';



function App() {
  return (
    <div className="App">
      <FullName/>
      <Adress/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
