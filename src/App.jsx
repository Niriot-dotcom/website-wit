import "./App.css";
import AppNavbar from "./components/common/AppNavbar";
import AppRouter from "./components/common/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <AppNavbar />
    </div>
  );
}

export default App;
