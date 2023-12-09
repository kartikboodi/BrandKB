import SkillsList from "./SkillsList/SkillsList";
import gitLogo from "../../../data/git.svg";
import visualStudioLogo from "../../../data/visual-studio.svg";
import vsCodeLogo from "../../../data/vs-code.svg";
import jiraLogo from "../../../data/jira.svg";

const Tools = () => {
  const title = "Tech Tools";
  const listItems = [
    {
      link: "https://docs.github.com/en/get-started/using-git/about-git",
      logo: gitLogo,
      content: <strong>Version control system (Git) / GitHub</strong>,
    },
    {
      link: "https://code.visualstudio.com/docs",
      logo: vsCodeLogo,
      content: <strong>Visual Studio Code</strong>,
    },
    {
      link: "https://learn.microsoft.com/en-us/visualstudio/ide/?view=vs-2022",
      logo: visualStudioLogo,
      content: <strong>Visual Studio IDE</strong>,
    },
    {
      link: "https://confluence.atlassian.com/jira",
      logo: jiraLogo,
      content: <strong>Agile scrum boards - Jira, ADO board</strong>,
    },
  ];

  return <SkillsList title={title} listItems={listItems} />;
};

export default Tools;
