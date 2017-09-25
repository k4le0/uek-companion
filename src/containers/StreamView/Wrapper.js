import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    padding-left: 8px;
    margin-top: 8px;
    margin-bottom: 64px;
    left:0;
    width: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
`

export default Wrapper;
