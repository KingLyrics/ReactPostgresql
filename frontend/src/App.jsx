import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Banner from "./components/Banner";
const App = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
