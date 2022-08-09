import React from 'react';

const FrontpageWelcomeBox = () => {
    
    let text = [
    <center>Velkommen til Scam<span style={{color: '#47EA35'}}>Prevent</span></center> ,<br/>,
    "Dette er en interaktiv side der vil hjælpe dig til at tænke mere kritisk når du befærder dig på nettet ",
    "for at undgå at blive snydt.",<br/>,
    "Når du trykker på start nedenfor vil du blive præsenteret for en række scenarier, hvor du skal udpege ",
    "hvordan man kan se, at det er bedrag."
    ];

    return (
        <div className='FrontpageBox'style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: '1.2'
        }}>
            <h1 style={{fontFamily: 'Nunito Sans', width: '37%', height: '40%', color: '#fff', textAlign: 'center'}}>
            {text}
            </h1>

        </div>
    );
}

export default FrontpageWelcomeBox