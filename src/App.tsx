import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { Aside } from './components/Aside';
import { Routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Aside />
        <Routes />
      </div>

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
