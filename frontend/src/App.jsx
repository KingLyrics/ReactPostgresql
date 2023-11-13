import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Banner from "./components/Banner";
import CreatePost from "./pages/CreatePost";
import BlogPost from "./pages/BlogPost";
import EditPost from "./pages/EditPost";
const App = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<BlogPost />} />
        <Route path="/NewPost" element={<CreatePost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  );
};

export default App;
