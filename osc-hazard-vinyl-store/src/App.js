import "./App.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/Body";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Body />
    </div>
  );
}

export default App;
