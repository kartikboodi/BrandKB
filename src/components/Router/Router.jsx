import { Routes, Route, Navigate } from "react-router-dom";

import PageNotFound from "../../pages/PageNotFound";
import Profile from "../../pages/Profile";
import { PATHS } from "./constants";
import Skills from "../../pages/Skills";
import Career from "../../pages/Career";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Navigate to={PATHS.profileSummary} />} />
      <Route exact path={PATHS.profileSummary} element={<Profile />} />
      <Route exact path={PATHS.skills} element={<Skills />} />
      <Route exact path={PATHS.experience} element={<Career />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
