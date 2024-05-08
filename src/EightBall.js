//import useState method
import React, {useState} from 'react'

//import css
import './EightBall.css';
//props is array of objects; each object has key for msg and color;
const EightBall = (props) => {
    // const [color, setColor] = useState(black)
    //use object for useState
    const [answer, setAnswer] = useState({msg:'Think of a question', color:'black'})

    function randomIndex (){
        return Math.floor((Math.random() * 20))
    }
    // const randomIndex = Math.floor((Math.random() * 20))
    
//props.answer
    return (
//add onClick to div instead of creating a button;      
        <div className='circle' style={{backgroundColor : answer.color}} onClick={() => {
            let idx = randomIndex();
            console.log(idx);
//console.log(setAnswer(props.answers[idx].msg)); doesn't work b/c need to log message directly
            console.log(props.answers[idx].msg); // Log the message directly
// 'setAnswer(props.answers[idx].msg)' and 'setAnswer(props.answers[idx].color)' don't work; need to set msg and color together in a single setAnswer
            setAnswer({ // Set both msg and color together
            msg: props.answers[idx].msg,
            color: props.answers[idx].color})
        }}>
            <h1>{ answer.msg }</h1>
            
        </div>
    )

}

export default EightBall