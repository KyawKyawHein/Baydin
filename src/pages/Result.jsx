import React from 'react'
import { StateContextCustom } from '../Context/StateContext'
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Result = () => {
    const {state:{question,selectedNum,answersList},dispatch} = StateContextCustom();
    const nav = useNavigate();
    console.log(question,selectedNum);
    console.log(answersList);
    const [filteredArr] = answersList.filter((answer)=>answer.questionNo==question.questionNo && answer.answerNo==selectedNum);
    console.log(filteredArr);
    if(!question && !selectedNum){
      return (
        nav('/')
      )
    }
  return (
    <div className='flex flex-col items-center'>
        <div className="question my-10 text-center">
          <span className='text-2xl text-orange-500'>မေးခွန်း</span>
          <h5 className='text-2xl mt-5 text-green-500 min-[300px]:p-3'>{question.questionName}</h5>
        </div>
        <h1 className='text-2xl text-orange-500'>ရလဒ် :</h1>
        <h3 className="mt-5 text-2xl mb-10 min-[300px]:p-2 text-center">{filteredArr.answerResult}</h3>
        <Link to={'/'}><Button name="ထပ်မေးမယ်" /></Link>        
    </div>
  )
}

export default Result
