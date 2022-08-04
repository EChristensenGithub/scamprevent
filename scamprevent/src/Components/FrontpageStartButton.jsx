import React from 'react';
import { AppBar, Button, IconButton } from '@material-ui/core';
import ComponentCSS from '../Styles/ComponentCSS.css';
import { useNavigate } from "react-router-dom";

const FrontpageStartButton = () => {

    let navigate = useNavigate();

    const toQuiz = () => {
        navigate("/Quizpage");
    }

    return (
        <div >
            <div onClick={toQuiz} class="btn btn-one" style={{left: '45%', top: '68%', position: 'absolute'}}>
                <span>Start</span>
            </div>
        </div>
    );
}

export default FrontpageStartButton