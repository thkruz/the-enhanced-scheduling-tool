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
  animation: 5.0s linear ${wiggle} infinite;
  span:nth-child(2) {
    animation-delay: 4s;
  }
  span:nth-child(3) {
    animation-delay: 8s;
  }
`

export default function Loading() {

  return (
    <WiggleHeader>
      Loading
    </WiggleHeader>
  )
}