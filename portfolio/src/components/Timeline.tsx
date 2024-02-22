interface TimeLineEntryProps {
  year: string;
  img: string;
  des: string;
}

function TimelineEntry(props: TimeLineEntryProps) {
  return (
    <div className="timeline-entry-container">
      <div className="flex flex-a-center-j-start">
        <div className="timeline-entry-divider"></div>
        <p className="text-heading-md text-bold no-margin">{props.year}</p>
      </div>
      <div className="margin-timeline flex gap">
        <img className="timeline-image" src={props.img} alt="undefined" />
        <p className="no-margin default-text">{props.des}</p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <div className="dynamic-secion bg-dark-2 flex flex-a-start-j-center">
      <div className="dynamic-container">
        <TimelineEntry
          year="2023"
          img="/Uni.png"
          des="Since 2023, I have been studying computer science at the Rhine-Waal University of Applied Sciences in Kamp-Lintfort, where I have already gained experience with various programming languages and frameworks such as Unity, C#, C++, and Python. Furthermore, I have been able to explore the world of theoretical computer science, including Turing machines, finite deterministic automata, as well as algorithms and data structures. I have also had the opportunity to learn about applied computer science in modules such as operating systems and technical computer science."
        />

        <TimelineEntry
          year="2022"
          img="/Abi.png"
          des="In 2022, I successfully completed my high school diploma and, on top of that, was given the opportunity to deliver a speech in which I could thank my fellow students and specially selected teachers for successfully guiding us through the time of Corona and making it possible for us to stand on this stage on that day."
        />
      </div>
    </div>
  );
}
