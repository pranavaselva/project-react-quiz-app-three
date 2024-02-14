import { Component } from "react";
import { Link } from 'react-router-dom';
import "../Home.css";


class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1 className="quiz">Quiz App</h1>
                <Link to="/Main">
                <button className="play">Play</button>
                </Link>
            </div>
        )
    }
}

export default Home;