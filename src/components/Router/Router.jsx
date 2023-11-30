import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "../../pages/PageNotFound";
import Profile from "../../pages/Profile";
import { PATHS } from "./constants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={PATHS.profileSummary} />} />
        <Route path={PATHS.profileSummary} element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
