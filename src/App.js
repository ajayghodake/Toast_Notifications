import './App.css';
import Home from './Pages/Home';
import ToastProvider from './Components/ToastProvider';

function App() {
  return (
    <div className="App">
      <Home/>
      <ToastProvider/>
    </div>
  );
}
export default App;
