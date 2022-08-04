import React from 'react';
import { AppBar, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

const FrontpageMenuButton = () => {

    return (
        <div className='Menu'>
            <AppBar style={{background: 'none', fontFamily: 'Nunito Sans'}} elevation={0}>
                <Toolbar style={{width: '82%', margin: '0 auto'}}>
                <h1 style={{flexGrow: '1', fontSize: '3rem'}}>
                    Scam<span style={{color: '#47EA35'}}>Prevent</span>
                </h1>
                    <IconButton>
                        <SortIcon style={{color: '#fff', fontSize: '3rem'}} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default FrontpageMenuButton 