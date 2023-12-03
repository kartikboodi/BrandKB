import ContactInfo from "./components/ContactDetails/ContactDetails";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import ProfileName from "./components/ProfileName/ProfileName";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProfileImage />
      <ProfileName />
      <hr />
      <ContactInfo />
    </div>
  );
};

export default Sidebar;
