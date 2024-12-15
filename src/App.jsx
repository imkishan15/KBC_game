import { useEffect, useState } from "react";
import "./App.css"
import Kbc from "./components/kbc";
import Time from "./components/time";

function App() {
  const [questionNumber, setquestionnumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earn, setEarn] = useState("Rs 0")
  const data = [
    {
      id: 1,
      question: "What is capital of UK?",
      answers: [
        {
          text: "Birmingham",
          correct: false,
        },
        {
          text: "London",
          correct: true,
        },
        {
          text: "Manchester",
          correct: false,
        },
        {
          text: "Leeds",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is president of India?",
      answers: [
        {
          text: "Ramnath Kovind",
          correct: false,
        },
        {
          text: "Murmu drapadi",
          correct: true,
        },
        {
          text: "Narendra Modi",
          correct: false,
        },
        {
          text: "Amit Shah",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "How many states are there in USA?",
      answers: [
        {
          text: "49",
          correct: false,
        },
        {
          text: "51",
          correct: false,
        },
        {
          text: "52",
          correct: false,
        },
        {
          text: "50",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "How much miles far is Earth away from Sun?",
      answers: [
        {
          text: "9.3 million",
          correct: false,
        },
        {
          text: "81 million",
          correct: false,
        },
        {
          text: "49 million",
          correct: false,
        },
        {
          text: "93 million",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is the clodest city of the world?",
      answers: [
        {
          text: "Verkhoyansk",
          correct: false,
        },
        {
          text: "Yakutsh",
          correct: true,
        },
        {
          text: "Vostok",
          correct: false,
        },
        {
          text: "Montreal",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who scored most test runs for Australia?",
      answers: [
        {
          text: "Don Bradman",
          correct: false,
        },
        {
          text: "Michael Clarke",
          correct: false,
        },
        {
          text: "Ricky Pointing",
          correct: true,
        },
        {
          text: "Allan Border",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which US president appeared in 'Laugh-In'?",
      answers: [
        {
          text: "Lyndon Johnson",
          correct: false,
        },
        {
          text: "Gerald Ford",
          correct: false,
        },
        {
          text: "Jimmy Carter",
          correct: false,
        },
        {
          text: "Richard Nixon",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Which mughal king ruled for longest period in India?",
      answers: [
        {
          text: "Babar",
          correct: false,
        },
        {
          text: "Akbar",
          correct: false,
        },
        {
          text: "Aurangzeb",
          correct: true,
        },
        {
          text: "Shah Jahan",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which was the first movie in India?",
      answers: [
        {
          text: "Raja Harishchandra",
          correct: true,
        },
        {
          text: "Prem Sanyas",
          correct: false,
        },
        {
          text: "Lanka Dahan",
          correct: false,
        },
        {
          text: "Mohini Bhasmasur",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which is the first IT company in India?",
      answers: [
        {
          text: "Accenture",
          correct: false,
        },
        {
          text: "Oracle",
          correct: false,
        },
        {
          text: "IBM",
          correct: false,
        },
        {
          text: "CUC",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "Who became the world's yougest chess grandmaster?",
      answers: [
        {
          text: "Ramesh Pragnand",
          correct: false,
        },
        {
          text: "Abhimanyu Mishra",
          correct: true,
        },
        {
          text: "Beth Harmon",
          correct: false,
        },
        {
          text: "Glenn Fischer",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "In children's book series where is Paddington Bear originally from?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "Canada",
          correct: false,
        },
        {
          text: "Peru",
          correct: true,
        },
        {
          text: "Iceland",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "Rs: 10,000" },
    { id: 2, amount: "Rs: 20,000" },
    { id: 3, amount: "Rs: 30,000" },
    { id: 4, amount: "Rs: 50,000" },
    { id: 5, amount: "Rs: 1,00,000" },
    { id: 6, amount: "Rs: 2,50,000" },
    { id: 7, amount: "Rs: 5,00,000" },
    { id: 8, amount: "Rs: 12,00,000" },
    { id: 9, amount: "Rs: 25,00,000" },
    { id: 10, amount: "Rs: 50,00,000" },
    { id: 11, amount: "Rs: 1,00,00,000" },
    { id: 12, amount: "Rs: 5,00,00,000" }
  ].reverse();
  useEffect(() => {
    questionNumber > 1 && setEarn(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber]);
  return (
    <div className="App">
      <div className="main">
        {stop ? (
          <h1 className="end">
            You earned: {earn}
          </h1>
        ) : (
          <>

            <div className="top">
              <div className="timer">
                <Time setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>
            <div className="bottom">
              <Kbc
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setquestionnumber={setquestionnumber}
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneylist">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneylistitem active" : "moneylistitem"}>
              <span className="moneylistnumber">{m.id}</span>
              <span className="moneylistamount">{m.amount}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
