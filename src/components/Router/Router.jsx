import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "../../pages/PageNotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageNotFound />}>
          <Route index element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
