import { Link, useLocation } from "react-router-dom";
import "../Result.css"


function Result(){

    let location = useLocation()
    let valuefromProps = location.state
    

    return(
        <div>
            <p className="head">Result</p>
            <div className="container">
                <p className="practice">You need more practice!</p>
                <h1 className="score">Your score is {valuefromProps.score}</h1>
                <div className="details">
                    <p>Total number of questions</p>
                    <p>{valuefromProps.attempted}</p>
                </div>
                <div className="details">
                    <p>Number of correct answers</p>
                    <p>{valuefromProps.correct}</p>
                </div>
                <div className="details">
                    <p>Number of wrong answers</p>
                    <p>{valuefromProps.wrong}</p>
                </div>
            </div>

            <div className="buttons">
                <Link to='/Main'>
                    <button className="playagain">Play Again</button>
                </Link>
                <Link to="/">
                    <button className="home">Back to home</button>               
                </Link>
            </div>
        </div>
    )
}

export default Result;