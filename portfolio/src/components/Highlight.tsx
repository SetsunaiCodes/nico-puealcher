import { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaAngular,
  FaPython,
  FaJava,
  FaDiscord,
  FaInstagram,
  FaGithub,
  FaArrowDown,
} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

function SocialMediaList() {
  return (
    <div className="social-media-nav flex flex-center">
      <a href="">
        <FaDiscord />
      </a>
      <a href="https://www.instagram.com/nicojin.css/">
        <FaInstagram />
      </a>
      <a href="https://github.com/SetsunaiCodes">
        <FaGithub />
      </a>
    </div>
  );
}

interface LanguageCardProps {
  tag: IconType;
}
function LanguageCard(props: LanguageCardProps) {
  const TagName = props.tag;
  return (
    <div className="quad-box flex flex-center">
      <TagName />
    </div>
  );
}

function LanguageCardList() {
  return (
    <div className="mobile-lang-card-list flex flex-center mobile-flex-wrap gap">
      <LanguageCard tag={FaJava} />
      <LanguageCard tag={FaHtml5} />
      <LanguageCard tag={FaCss3} />
      <LanguageCard tag={FaJs} />
      <LanguageCard tag={TbBrandNextjs} />
      <LanguageCard tag={BiLogoTypescript} />
      <LanguageCard tag={FaReact} />
      <LanguageCard tag={FaAngular} />
      <LanguageCard tag={FaPython} />
    </div>
  );
}

export default function Highlight() {
  return (
    <div className="static-section bg-dark  flex flex-center flex-column mobile-highlight-container">
      <div className="dynamic-container  flex flex-center flex-column">
        <div className="naming">
          <p>I'm</p>
          <h1 className="rainbow-heading">Nico Puelacher</h1>
          <div className="flex flex-a-center mobile-flex-column">
            <p>Webdeveloper | Appdeveloper | PyGamedeveloper |</p>
            <SocialMediaList />
          </div>
        </div>

        <img className="pb" src="/NeueBild.png" alt="Image of Nico Puelacher" />

        <LanguageCardList />

        <a className="arrow text-heading-md btn-rounded" href="#timeline">
          <FaArrowDown />
        </a>
      </div>
    </div>
  );
}
