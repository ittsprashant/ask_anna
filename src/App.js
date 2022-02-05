import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar';
import DateTime from './Components/DateTime';
import Test from './Components/Test';
import Button from 'react-bootstrap/Button';
import Editor from './Components/Editor';
import RioHome from './Components/RioHome';

function App() {
  return (
    <div className="App">
      {/* <DateTime/> */}
      {/* <NavbarComponent/> */}
      {/* <Test/> */}
      {/* <Editor/> */}
      <RioHome/>
    </div>
  );
}

export default App;
