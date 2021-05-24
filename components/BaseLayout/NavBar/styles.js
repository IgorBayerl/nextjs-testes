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
  padding: 10px;
  transition: all 0.25s;
  text-decoration: none;
  cursor: pointer;
  :hover{
    text-decoration: none;
    color: black;
  }
`;