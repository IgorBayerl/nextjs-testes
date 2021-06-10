import React, { useRef, useState, useEffect, Suspense } from 'react'
import styled from 'styled-components';
import { useSpring, animated } from "react-spring";


function ProjectCardTest(){
  const [componentSize, setComponentSize] = useState({
    h: null,
    w: null,
  })
  const [mousePosition, setMousePosition] = useState({ 
    x: null, 
    y: null,
    offsetStartX: null,
    offsetStartY: null,
    offsetCenterX: 0,
    offsetCenterY: 0,
  });

  const [hover, setHover] = useState(false);

  useEffect(() => {
    setComponentSize({
      h:ref.current.clientHeight,
      w:ref.current.clientWidth,
    })
    
  },[])

  const ref = useRef(null)

  const onMouseMove = ev => {
    setMousePosition({ 
      // x: ev.nativeEvent.offsetX, 
      // y: ev.nativeEvent.offsetY, 
      // offsetStartX: Math.round(( ev.nativeEvent.offsetX / componentSize.w ) * 100),
      // offsetStartY: Math.round(( ev.nativeEvent.offsetY / componentSize.h ) * 100),
      offsetCenterX: Math.round( ev.nativeEvent.offsetX - (componentSize.w/2)),
      offsetCenterY: Math.round( ev.nativeEvent.offsetY - (componentSize.h/2)),
    });
  };

  

  const ImgPosition = styled.div`
    background-color: blue;
    width: 5em;
    height: 5em;
    position: absolute;
    right: 5px;
    top: 0em;
    border-radius: 50%;
  `;

  const CardFollowMousePosition = styled.div`
    background-color: green;
    
    position: absolute;
    position: relative;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    z-index: 5;
    /* transform: ; */
    transform: translate(-50%, -50%) scale(0.90);
    transition: all 0.3s;
  `;

  const CardBody = styled.div`
    background-color: red;
    width: 20em;
    height: 40em;
    /* margin: 20px; */
    position: relative;
    /* border-radius: 7px; */
    
  `;
  // &:hover ${CardFollowMousePosition} {
  //   transform: translate( calc(-50% + ${mousePosition.offsetCenterX/10 + "px"}) , -50%) scale(0.95);
  // }
  const CardTriggerMousePosition = styled.div`
    position: absolute;
    /* background-color: grey; */
    opacity: 0.5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  `;

  const props = useSpring({
      config: {duration: 200},
      transform: hover ? `translate(calc(-50% + ${mousePosition.offsetCenterX/10}px) , calc(-50% + ${mousePosition.offsetCenterY/10}px)) scale(1)`: `translate(-50%,-50%) scale(0.9)` ,
  })

  return(
    <>
      <CardBody >
        <CardTriggerMousePosition 
          ref={ref} 
          onMouseMove={onMouseMove} 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
        />
        <CardFollowMousePosition as={animated.div} style={props} >
          <ImgPosition>
            <h3 className="colorDarkText pointerEventNone">Image</h3>
          </ImgPosition>
          <div>
            <p className="colorDarkText pointerEventNone">OCenter X = {mousePosition.offsetCenterX}</p>
            <p className="colorDarkText pointerEventNone">OCenter Y = {mousePosition.offsetCenterY}</p>
            <p className="colorDarkText pointerEventNone">OStart X = {mousePosition.offsetStartX}</p>
            <p className="colorDarkText pointerEventNone">OStart Y = {mousePosition.offsetStartY}</p>
          </div>
          <div>
            <p className="colorDarkText pointerEventNone">Tech</p>
            <p className="colorDarkText pointerEventNone">Tech</p>
            <p className="colorDarkText pointerEventNone">Tech</p>
          </div>
        </CardFollowMousePosition>
        
      </CardBody>
    </>
  );
}


export default function BirdsPage (){
  const CardsGrid = styled.div`
    background-color: magenta;
    display: flex;
    flex-wrap: wrap;
  `;
  return (
    <CardsGrid>
      <ProjectCardTest/>
      <ProjectCardTest/>
      <ProjectCardTest/>
      <ProjectCardTest/>
      <ProjectCardTest/>
      <ProjectCardTest/>
    </CardsGrid>
  )
}

