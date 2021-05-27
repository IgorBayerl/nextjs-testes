import styled from 'styled-components';



export const RightNavbar = styled.div`
  height: 100vh;
  width: 3em;
  /* background-color: blue; */
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const NavLinks = styled.a`
  color: white;
  writing-mode: vertical-lr;
  transform: rotateZ(180deg);
  /* margin: -20px; */
  padding: 10px 5px ;
  transition: all 0.25s;
  text-decoration: none;
  cursor: pointer;
  /* background-color: #de2424; */
  border-radius: 20px;
  :hover{
    text-decoration: none;
    color: black;
    background-color: blue;
    color: white;
    /* transform: rotateZ(200deg); */
  }


`;