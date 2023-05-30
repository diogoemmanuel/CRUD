
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CreateEstoque from './CreateEstoque';
import Estoque from './Estoque';
import UpdateEstoque from './UpdateEstoque';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Estoque />}></Route>
        <Route path='/create' element={<CreateEstoque />}></Route>
        <Route path='/update:id' element={<UpdateEstoque />}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
