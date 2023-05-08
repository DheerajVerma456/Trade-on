import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { StockOverviewPage } from './Pages/StockOverviewPage';
import { StockDetailPage } from './Pages/StockDetailPage';
import { WatchListContextProvider } from './context/context';
import Trading from './Pages/Trading.jpg'

function App() {
  const myStyle={
    backgroundImage: `url(${Trading})` ,
    height:'100vh',
    marginTop:'0px',
    // opacity: '0.4',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div id = "block"className="image" style= {myStyle}>
      <main className="container">
      <div id = "ds"className='imgd'>
      <WatchListContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path = "/" element= {<StockOverviewPage/>}/>
        <Route path = "/detail/:symbol" element = {<StockDetailPage/>}/>
      </Routes>
      </BrowserRouter>
      </WatchListContextProvider>
      </div>
      </main>
    </div>
  );
}

export default App;
