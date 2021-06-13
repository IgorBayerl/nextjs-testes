import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import styled from 'styled-components';



export const CardContainer = styled.div`
  /* background-color: red; */
  /* height: 30em; */
  width: clamp( 300px , 70em , 80vw );
  min-height: 20em;
  height: fit-content;
  width: 70em;
  max-width: 80vw;
  /* font-size: inherit; */
  margin: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media( max-width: 480px ) {
    margin: 1em;
  }

`;

export const CardContent = styled.div`
  width: 100%;
  height: 300vh;
  z-index: 0;    
  position: absolute;
  pointer-events: none;
`;

export const LeftArrowDownContainer = styled.div`
  margin-right: 40px;
  
  @media( max-width: 480px ) {
    margin-right: 15px ;
  }
`;

export const ArrowLine = styled.div`
  border-left: 1px solid;
  border-color: #dedede;
  height: 100%;
  min-height: 20em;
  /* box-shadow: 1px 0 0 0px #dedede inset; */
  transform: translateX(+50%);
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  div{
    position: absolute;
    padding: 5px;
    box-shadow: 1px -1px 0 0.5px #dedede inset;
    border: solid transparent;
    border-width: 0 0 1px 1px;
    transform: translateX(calc(-50% - 0.5px)) translateY(55%) rotate(-45deg);
    /* transform: ; */
  }
`;


export const RightContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
`;

export const Title = styled.h1`
  font-size: 6em;
  padding-left: 40px;
  /* pointer-events: auto; */
  transition: all 0.3s;
  @media( max-width: 850px ) {
    font-size: 4em;
  }
  @media( max-width: 480px ) {
    font-size: 3em;
  }
`;

export const SmallTitle = styled.h1`
  font-size: 3em;
  padding-left: 0;
  /* pointer-events: auto; */
  transition: all 0.3s;
  @media( max-width: 850px ) {
    font-size: 2em;
  }
  @media( max-width: 480px ) {
    font-size: 2em;
  }
`;

export const MainContentContainer = styled.h1`
  padding-left: 40px;
`;





