import "./App.css";
import Home from "./Pages/Home";
import ToastProvider from "./Components/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Home />
      </div>
    </ToastProvider>
  );
}

export default App;
