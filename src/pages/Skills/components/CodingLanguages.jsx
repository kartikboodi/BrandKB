import Csharp from "../../../data/Csharp.svg";
import Python from "../../../data/python.svg";
import JS from "../../../data/javascript.svg";
import TS from "../../../data/typescript.svg";
import SkillsList from "./SkillsList/SkillsList";

const CodingLanguages = () => {
  const title = "Coding Languages";
  const listItems = [
    {
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      logo: Csharp,
      content: (
        <span>
          <strong>C-Sharp:</strong> An object-oriented, and type-safe language
          that run in .Net.
        </span>
      ),
    },
    {
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: JS,
      content: (
        <span>
          <strong>Javascript:</strong> The scripting language for Web pages.
        </span>
      ),
    },
    {
      link: "https://www.typescriptlang.org/docs/",
      logo: TS,
      content: (
        <span>
          <strong>Typescript:</strong> A strongly typed programming language
          that builds on JavaScript.
        </span>
      ),
    },
    {
      link: "https://devguide.python.org/",
      logo: Python,
      content: (
        <span>
          <strong>Python:</strong> An interpreted, object-oriented, high-level
          programming language with dynamic semantics.
        </span>
      ),
    },
  ];

  return <SkillsList title={title} listItems={listItems} />;
};

export default CodingLanguages;
