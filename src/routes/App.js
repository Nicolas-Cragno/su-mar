import Layout from '../compounds/Layout.js';
import Home from '../containers/Home.js';
import Info from '../containers/Info.js';
import References from '../containers/References.js';
import About from '../containers/About.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/informacion' element={<Info/>}></Route>
            <Route exact path='/referencias' element={<References/>}></Route>
            <Route exact path='/sobre-mi' element={<About/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
