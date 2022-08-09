import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import background from "../Assets/FrontpageBackground.jpg";
import FrontpageStartButtonCSS from '../Styles/FrontpageStartButtonCSS.css';

/* Components */
import FrontpageMenuButton from '../Components/FrontpageMenuButton';
import FrontpageWelcomeBox from '../Components/FrontpageWelcomeBox';
import FrontpageStartButton from '../Components/FrontpageStartButton';

const WelcomePage = () => {


    return (
        <div className='WelcomePage' style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        WebkitBackgroundSize: 'cover'
        }}> 
            <FrontpageMenuButton/>
            <div className='frontpagegrid'>
               <FrontpageWelcomeBox/> 
               <FrontpageStartButton/> 
            </div>
            {/* Eliminate padding and nodging */}
            <CssBaseline/> 
        </div>
    );
}

export default WelcomePage