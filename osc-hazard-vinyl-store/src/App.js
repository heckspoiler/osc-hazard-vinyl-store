import "./App.css";
import { Header } from "./Components/Header/Header";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <h1>Hurensohn</h1>
    </div>
  );
}

export default App;
