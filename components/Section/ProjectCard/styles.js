import styled from 'styled-components';


//// Style Compact

export const MidLayer = styled.div`
  position: absolute;
  top: 0em;
  left: 0em;
  width: 100%;
  padding-top: 5px;
  padding-left: 5px;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  overflow: hidden;
  /* z-index: 2; */
  /* background-color: blue; */
  h2{
    font-size: 1.4em;
    margin-bottom: 2px;
  }
  p{
    font-size: 0.8em;
    margin-bottom: 3px;
  }
  ::after{
    content: "";
    width: 600px;
    height: 600px;
    position: absolute;
    top: -100px;
    left: -100px;
    background-color: #ff3cac;
    background-image: linear-gradient(225deg, #27d86c, #26caf8, #c625d0);
    z-index: -1;
    transition: transform 0.5s ease;
  }
  /* :hover::after{
    transform: rotate(150deg);
  } */
  
`;


export const CardContainer = styled.div`
  
  max-width: 80vw;
  width: 20em;
  height: 8em;
  background-color: #49BEB6;
  border-radius: 8px;
  margin-bottom: 1.2em;
  z-index: 0 ;
  position: relative;

  &:hover ${MidLayer}::after {
    transform: rotate(150deg);
  }
`;

export const ImageBall = styled.div`
  border-radius: 50%;
  height: 4em;
  width: 4em;
  overflow: hidden;
  position: absolute;
  right: -1.5em;
  top: 3.5em;
  transition: all 0.3s;

  img{
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }
  @media ( max-width: 530px ){
    right: 0.2em;
    top: 3.8em;
  }
`;

export const TopLayer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  /* background-color: #de2424; */
`;


export const Technologies = styled.div`
  border-radius: 7px;
  height: 2em;
  width: fit-content;
  padding-right: 3px;
  padding-left: 3px;
  background-color: #fff;
  /* padding: 3px; */
  position: absolute;
  left: 0.5em;
  bottom: -0.2em;
  display: flex;

  img{
    height: 100%;
    padding: 3px;
    border-radius: 3px;
    object-fit: scale-down;
  }
`;


export const BottomLayer = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  overflow: hidden;
  border-radius: 7px;
  img{
    min-height: 110%;
    min-width: 110%;
    max-width:160%;
    max-height:160%;
    /* margin-left: -3em; */
    transition: all 0.3s;

    object-fit: scale-down;
  }
`;







//// Style Open Mobile
//// Style Open BigScreen

