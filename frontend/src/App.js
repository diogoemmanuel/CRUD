
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CreateEstoque from './CreateEstoque';
import Estoque from './Estoque';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Estoque />}></Route>
        <Route path='/create' element={<CreateEstoque />}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
