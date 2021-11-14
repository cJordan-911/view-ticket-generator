import './App.css';
import { Generator } from './views/generator/Generator';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import GeneratorTicket from './views/generatorTicket/GeneratorTicket';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generator" element={<Generator />} />
        <Route path="/generator/ticket-simple" element={<GeneratorTicket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
