import React from 'react';
import styled, {keyframes} from 'styled-components';

const wiggle = keyframes`
  0% { 
    transform:translateY(0px)
  }
  25% {
    transform:translateY(-10px)
  }
  50% {
    transform:translateY(0px)
  }
  75% {
    transform:translateY(10px)
  }
  100% {
    transform:translateY(0px)
  }
`

const WiggleHeader = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  animation: 2.0s linear ${wiggle} infinite;
`

export default function Loading() {

  return (
    <WiggleHeader>
      Loading
    </WiggleHeader>
  )
}