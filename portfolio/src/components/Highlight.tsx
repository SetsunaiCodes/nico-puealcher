import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaArrowDown,
} from "react-icons/fa";

interface LanguageCardProps {
  tag: IconType;
}
function LanguageCard(props: LanguageCardProps) {
  const TagName = props.tag;
  return (
    <div className="quad-box flex flex-center debugging-red">
      <TagName />
    </div>
  );
}

function LanguageCardList() {
  return (
    <div className="flex flex-center gap">
      <LanguageCard tag={FaJava} />
      <LanguageCard tag={FaHtml5} />
      <LanguageCard tag={FaCss3} />
      <LanguageCard tag={FaJs} />
      <LanguageCard tag={FaReact} />
      <LanguageCard tag={FaAngular} />
      <LanguageCard tag={FaPython} />
    </div>
  );
}

export default function Highlight() {
  return (
    <div className="static-section bg-dark  flex flex-center flex-column">
      <div className="dynamic-container  flex flex-center flex-column">
        <div className="naming">
          <p>I'm</p>
          <h1 className="rainbow-heading">Nico Puelacher</h1>
          <p>Webdeveloper | Appdeveloper | PyGamedeveloper</p>
        </div>

        <img className="pb" src="/NeueBild.png" alt="Image of Nico Puelacher" />

        <LanguageCardList />

        <a className="arrow text-heading-md btn-rounded" href="">
          <FaArrowDown />
        </a>
      </div>
    </div>
  );
}
