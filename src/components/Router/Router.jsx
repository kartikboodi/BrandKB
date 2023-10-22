import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";
import Profile from "../../pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
