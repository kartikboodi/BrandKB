import "./SubHeader.css";

const SubHeader = ({ children }) => {
  return (
    <div className="SubHeader">
      <span>{children}</span>
    </div>
  );
};

export default SubHeader;
