import { Image, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import SubHeader from "../../../components/SubHeader";
import Csharp from "../../../data/Csharp.svg";
import Python from "../../../data/python.svg";
import JS from "../../../data/javascript.svg";
import TS from "../../../data/typescript.svg";

import "./CodingLanguages.css";

const CodingLanguages = () => {
  const tooltip = "Click icons to explore more.";

  return (
    <div className="coding-languages">
      <SubHeader>Coding Languages</SubHeader>
      <OverlayTrigger
        placement="top-start"
        delay={{ show: 250, hide: 200 }}
        overlay={<Tooltip id="language-tooltip">{tooltip}</Tooltip>}
      >
        <ListGroup className="languages-list">
          <ListGroup.Item>
            <a
              href="https://learn.microsoft.com/en-us/dotnet/csharp/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Csharp} />
            </a>
            <strong>C-Sharp:</strong> An object-oriented, and type-safe language
            that run in .Net
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={JS} />
            </a>
            <strong>Javascript:</strong> The scripting language for Web pages
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://www.typescriptlang.org/docs/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={TS} />
            </a>
            <strong>Typescript:</strong> A strongly typed programming language
            that builds on JavaScript,
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              href="https://devguide.python.org/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Python} />
            </a>
            <strong>Python:</strong> An interpreted, object-oriented, high-level
            programming language with dynamic semantics
          </ListGroup.Item>
        </ListGroup>
      </OverlayTrigger>
    </div>
  );
};

export default CodingLanguages;
