import { useState } from "react";
import AccItem from "./AccItem";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((item, index) => (
        <AccItem
          key={item.title}
          title={item.title}
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={`0${index + 1}`}
        >
          {item.text}
        </AccItem>
      ))}
      <AccItem
        title={"This is a manual title"}
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={23}
      >
        <p>Hello there good peoples!!</p>
      </AccItem>
    </div>
  );
}

export default Accordion;
