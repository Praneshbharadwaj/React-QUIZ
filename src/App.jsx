import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";



function App() {
  const [username, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 4,
      question: "What is the largest planet in our solar system?",
      answers: [
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Saturn",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the author of the book series 'The Chronicles of Narnia'?",
      answers: [
        {
          text: "C.S. Lewis",
          correct: true,
        },
        {
          text: "J.R.R. Tolkien",
          correct: false,
        },
        {
          text: "Roald Dahl",
          correct: false,
        },
        {
          text: "J.K. Rowling",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which country is famous for producing tequila?",
      answers: [
        {
          text: "Mexico",
          correct: true,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Spain",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the largest mammal on Earth?",
      answers: [
        {
          text: "Blue whale",
          correct: true,
        },
        {
          text: "African elephant",
          correct: false,
        },
        {
          text: "Polar bear",
          correct: false,
        },
        {
          text: "Giraffe",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the chemical symbol for the element oxygen?",
      answers: [
        {
          text: "O",
          correct: true,
        },
        {
          text: "Ox",
          correct: false,
        },
        {
          text: "Ol",
          correct: false,
        },
        {
          text: "Om",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In Greek mythology, who is the god of thunder?",
      answers: [
        {
          text: "Zeus",
          correct: true,
        },
        {
          text: "Poseidon",
          correct: false,
        },
        {
          text: "Apollo",
          correct: false,
        },
        {
          text: "Hermes",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which city is known as the 'Big Apple'?",
      answers: [
        {
          text: "New York City",
          correct: true,
        },
        {
          text: "Los Angeles",
          correct: false,
        },
        {
          text: "Chicago",
          correct: false,
        },


      ],
    },
    {
      id: 12,
      question: "Who is the main protagonist of the 'Harry Potter' book series?",
      answers: [
        {
          text: "Harry Potter",
          correct: true,
        },
        {
          text: "Hermione Granger",
          correct: false,
        },
        {
          text: "Ron Weasley",
          correct: false,
        },
        {
          text: "Severus Snape",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Neptune",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who painted the famous artwork 'Mona Lisa'?",
      answers: [
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which country is famous for the Taj Mahal?",
      answers: [
        {
          text: "India",
          correct: true,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Egypt",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
      ],
    }
  ];

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1000" },
      { id: 6, amount: "$ 2000" },
      { id: 7, amount: "$ 4000" },
      { id: 8, amount: "$ 8000" },
      { id: 9, amount: "$ 16000" },
      { id: 10, amount: "$ 32000" },
      { id: 11, amount: "$ 64000" },
      { id: 12, amount: "$ 125000" },
      { id: 13, amount: "$ 250000" },
      { id: 14, amount: "$ 500000" },
      { id: 15, amount: "$ 1000000" },

    ].reverse(),
    [])
  useEffect(() => {
    questionNumber > 1 && questionNumber <= 15 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? <h1 className="endText">
                   CONGRATS!
              You earned: {earned}
            </h1> : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom"><Trivia data={data} setStop={setStop} setQuestionNumber={setQuestionNumber} questionNumber={questionNumber} /></div>
              </>)}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (<Start setUsername={setUserName} />)}

    </div>
  );
}

export default App;
