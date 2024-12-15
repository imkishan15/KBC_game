import React, { useEffect, useState } from 'react'
import correct_answer from './correct_answer.mp3'
import wrong from '../assets/wrong_answer.mp3' 
 

export default function Kbc(
    {data,
    setStop,
    questionNumber,
    setquestionnumber}
) {
    const[question,setquestion]=useState(null);
    const[selanswer,setselanswer]=useState(null);
    const[className,setClassName]=useState("answers");
   
    useEffect(()=>
    {
        setquestion(data[questionNumber-1]);
    },[data,questionNumber]
    );

    const delay=(duration,callback)=>
    {
        setTimeout(()=>
        {
            callback();
        },duration);
    };

    const handleclick=(a)=>
    {
        setselanswer(a);
        setClassName("answers act");
        delay(1000,()=>
            setClassName(a.correct?"answers correct":"answers wrong")
        )
        delay(3000,()=>
        {
            if(a.correct)

            {
                const audio = new Audio(correct_answer)
                audio.play()
                delay(2000,()=>{
                    setquestionnumber((prev)=>prev+1);
                    setselanswer(null);  
                })
            }
            else
            {
                const audio = new Audio(wrong)
                audio.play()
                delay(1000,()=>{
                    setStop(true)
                })
            }
        }
        )
    };
  return (
        <div className="kbc">
            <div className="question">
                {question?.question}
            </div>
            <div className="answer">
                {question?.answers.map((a)=>
                (
                    <div className={selanswer === a ? className:"answers"}
                    onClick={()=>handleclick(a)}>
                        {a.text}
                    </div>
                ))}
        </div>
    </div>
  )
}
