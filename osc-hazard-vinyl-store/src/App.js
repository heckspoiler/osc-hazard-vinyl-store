import "./App.css";
import { Header } from "./Components/Header/Header";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
