

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './tasks/Navbar';
import Mainlinks from './tasks/Mainlinks';
import Mainpage from './tasks/Mainpage';
import Content from './tasks/Content';



function App() {
  return (
    <>
    <Navbar>
            <Mainlinks/>
      
    </Navbar>
<Mainpage>
</Mainpage>
  

    </>
  );
}

export default App;
