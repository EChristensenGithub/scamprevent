import React from 'react';
import {CssBaseline} from '@material-ui/core';
import background from "../Assets/FrontpageBackground.jpg";

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
            <FrontpageWelcomeBox/>
            <FrontpageMenuButton/>
            <FrontpageStartButton/>
            
            {/* Eliminate padding and nodging */}
            <CssBaseline/> 
        </div>
    );
}

export default WelcomePage