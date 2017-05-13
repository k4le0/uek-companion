import React from 'react';
import styled from 'styled-components';

import BottomNavigationItem from './../BottomNavigationItem'

const BottomNavigation = styled.div`
    position:fixed;
    left:0px;
    bottom:0px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #E8E8E8;
    height: 56px;
    box-shadow: 0px -2px 2px rgba(0, 0, 0, 0.16);
`

export default () => {
    // Render these styled components like normal react components. They will pass on all props and work
    // like normal react components – except they're styled!
    return (
        <BottomNavigation>
            <BottomNavigationItem />
            <BottomNavigationItem />
            <BottomNavigationItem />
            <BottomNavigationItem />
            <BottomNavigationItem />
        </BottomNavigation>
    );
}
