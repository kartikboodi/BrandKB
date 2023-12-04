import reactLogo from "../../../data/react.svg";
import reduxLogo from "../../../data/redux.png";
import html from "../../../data/html.png";
import css from "../../../data/css.png";
import bootstrap from "../../../data/bootstrap.svg";
import SkillsList from "./SkillsList/SkillsList";

const FrontEnd = () => {
  const titleFE = "Front-end/UI Development";
  const listItemsFE = [
    {
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
      logo: reactLogo,
      content: <strong>React (Javascript / Typescript)</strong>,
    },
    {
      link: "https://redux.js.org/introduction/getting-started",
      logo: reduxLogo,
      content: <strong>Redux - State Container</strong>,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      logo: html,
      content: <strong>HTML - HyperText Markup Language</strong>,
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      logo: css,
      content: <strong>CSS - Cascading Style Sheets</strong>,
    },
    {
      link: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
      logo: bootstrap,
      content: <strong>UI Libraries (bootstrap, material-ui, etc.)</strong>,
    },
  ];

  return <SkillsList title={titleFE} listItems={listItemsFE} />;
};

export default FrontEnd;
