import { useEffect, useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question: "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function App() {
  const [opened, setOpened] = useState(null);

  return (
    <main>
      {questions.map((q) => (
        <Box key={q.id} id={q.id} question={q.question} answer={q.answer} setOpened={setOpened} opened={opened} />
      ))}
    </main>
  );
}

export default App;

function Box({ question, id, answer, setOpened, opened }) {
  const [selected, setSelected] = useState(false);

  function handleBoxClick() {
    if (selected) {
      setSelected(false);
    } else {
      setOpened(id);
      setSelected(true);
    }
  }

  const check = opened === id && selected;

  return (
    <div className={`box ${check ? "selected" : ""}`} onClick={handleBoxClick}>
      <h1>{check ? answer : question}</h1>
    </div>
  );
}
