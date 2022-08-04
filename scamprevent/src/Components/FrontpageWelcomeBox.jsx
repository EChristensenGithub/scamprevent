import React from 'react';
import { AppBar, Button, IconButton } from '@material-ui/core';

const FrontpageWelcomeBox = () => {
    
    let text = [
    <center>Velkommen til Scam<span style={{color: '#47EA35'}}>Prevent</span></center> ,<br/>,
    "Dette er en interaktiv side der vil hjælpe dig til at tænke mere kritisk når du befærder dig på nettet ",
    "for at undgå at blive snydt.",<br/>,
    "Når du trykker på start nedenfor vil du blive præsenteret for en række bedrageriske scenarier, hvor du skal udpege ",
    "hvad der gør at man kan se, at det er bedrag."
    ];

    return (
        <div className='FrontpageBox'style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            lineHeight: '1.2'
        }}>
            <h1 style={{fontFamily: 'Nunito Sans', width: '30%', height: '40%', color: '#fff', textAlign: 'justify'}}>
            {text}
            </h1>

        </div>
    );
}

export default FrontpageWelcomeBox