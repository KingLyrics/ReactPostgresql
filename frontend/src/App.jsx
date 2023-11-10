import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Banner from "./components/Banner";
import CreatePost from "./pages/CreatePost";
const App = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/NewPost" element={<CreatePost />} />
      </Routes>
    </>
  );
};

export default App;
