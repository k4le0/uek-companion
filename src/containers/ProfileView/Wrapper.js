import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    margin-bottom: 64px;
    top: 64px;
    left:0;
    width: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
`

export default Wrapper;
