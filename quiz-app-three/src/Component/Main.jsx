import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from './Question.json'
import '../Main.css'

function Main(){

    const [index, setIndex] = useState(0);
    const [data, setData] = useState({
        attempted : 0,
        correct : 0,
        wrong : 0,
        score : 0
    })

    const Navigate = useNavigate()

    const previous = () => {
        if(index === 0){
            setIndex(Data.length - 1);
        } else {
            setIndex(index - 1)
        }
    };

    console.log(Data)
    const next = () => {
        if(index === Data.length - 1){
            setIndex(0);
        }else{
            setIndex(index + 1)
        }
    };

    const quit = () => {
        alert("Are you sure you want to quit?")
        setIndex(index + 1);
    };

    

    const handleChange = (event) => {
        const questoinIndex = index;
        const optionChosed = event.target.innerHTML;
        const correctAnswer = Data[questoinIndex].answer;

        if(optionChosed === correctAnswer){
            alert("Correct Answer");
            setData({...data, correct:data.correct+1, attempted:data.attempted+1, score:data.score+1})
        } else{
            alert("Wrong Answer");
            setData({...data, correct: data.correct, attempted:data.attempted+1,wrong: data.wrong+1, score:data.score})
        }
    };


    return(
        <div>
            <div className="container">
                <h1 className="head">Question</h1>
                <p>
                    {index + 1} of 15
                </p>
                <p className="ques">{Data[index].question}</p>
                <div className="options">
                    <div className="option">
                        <p onClick={(e) => handleChange(e)}>{Data[index].optionA}</p>
                    </div >
                    <div className="option">
                        <p onClick={(e) => handleChange(e)}>{Data[index].optionB}</p>
                    </div>
                    <div className="option">
                        <p onClick={(e) => handleChange(e)} >{Data[index].optionC}</p>
                    </div>
                    <div className="option">
                        <p onClick={(e) => handleChange(e)}>{Data[index].optionD}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={previous} className="previous">Previous</button>
                    <button onClick={next} className="next">Next</button>
                    <button onClick={quit} className="quit">Quit</button>
                    <button onClick={() => {Navigate("/Result",{state : data})}} className="finish">Finish</button>
                </div>
            </div>
        </div>
    );
}

export default Main;