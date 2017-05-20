import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    margin-top: 4px;
    margin-bottom: 64px;
    top: 64px;
    left:0;
    width: 100%;
    z-index: -1;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
`

export default Wrapper;
