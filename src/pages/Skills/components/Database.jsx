import SkillsList from "./SkillsList/SkillsList";
import msSQLLogo from "../../../data/sql-server.svg";
import mySQLLogo from "../../../data/mysql.svg";

const Database = () => {
  const title = "Database Technologies";
  const listItems = [
    {
      link: "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
      logo: msSQLLogo,
      content: <strong>Microsoft SQL Server</strong>,
    },
    {
      link: "https://dev.mysql.com/doc/",
      logo: mySQLLogo,
      content: <strong>MySQL</strong>,
    },
  ];

  return <SkillsList title={title} listItems={listItems} />;
};

export default Database;
