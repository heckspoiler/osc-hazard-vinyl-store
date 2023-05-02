import { Routes, Route, useLocation } from "react-router-dom";
import { News } from "./Components/Subpages/News/News";
import { Body } from "./Components/Body/Body";

import { AnimatePresence } from "framer-motion";

// const Body = () => <h2></h2>;
// const WarehouseFinds = () => <h2></h2>;
// const Genres = () => <h2></h2>;
// const Releases = () => <h2></h2>;
// const EquipmentAndMore = () => <h2></h2>;

export const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Body />} />
        <Route path="/news" element={<News />} />
        {/* <Route path="/warehouse-finds" element={<WarehouseFinds />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/releases" element={<Releases />} />
      <Route path="/equipment" element={<EquipmentAndMore />} /> */}
      </Routes>
    </AnimatePresence>
  );
};
