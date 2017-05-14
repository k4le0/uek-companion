import React from 'react';
import styled from 'styled-components';

import Wrapper from './Wrapper';
import Label from './Label';
import Icon from './Icon'

function BottomNavigationItem(props){
  return (
    <Wrapper>
      <Icon />
      <Label>{props.label}</Label>
    </Wrapper>
  );
}

export default BottomNavigationItem;