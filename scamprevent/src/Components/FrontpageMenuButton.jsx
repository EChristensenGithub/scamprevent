import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import Dropdown from "./FrontpageDropdownMenu";


const FrontpageMenuButton = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div className='Menu'>
            <AppBar style={{background: 'none', fontFamily: 'Nunito Sans'}} elevation={0}>
                <Toolbar style={{width: '82%', margin: '0 auto'}}>
                <h1 style={{flexGrow: '1', fontSize: '3rem'}}>
                    Scam<span style={{color: '#47EA35'}}>Prevent</span>
                </h1>
                    <IconButton 
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}>
                        {dropdown && <Dropdown />}
                        <SortIcon 
                        style={{color: '#fff', fontSize: '3rem'}}>
                        </SortIcon>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default FrontpageMenuButton 