import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './route/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider route={routes}></RouterProvider>
    </div>
  );
}

export default App;
