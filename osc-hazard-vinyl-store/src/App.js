import "./App.css";
import { Header } from "./Components/Header/Header";
import { Body } from "./Components/Body/Body";
import { Footer } from "./Components/Footer/Footer";
import { AppRoutes } from "./routes";
import { HeaderSubpages } from "./Components/Subpages/HeaderSubpages/HeaderSubpages";
import { BackgroundBlobs } from "./Components/Body/BackgroundBlobs/BackgroundBlobs";

function App() {
  const isHomePage = window.location.pathname === "/";
  return (
    <div className="App overflow-x-hidden">
      <BackgroundBlobs />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
