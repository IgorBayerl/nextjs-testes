import Link from 'next/link'
import styled from 'styled-components'
import Introduction from './Home_Introduction'

const LayoutContainer = styled.div`
    padding-top: 90px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function HomeLayout(){
    return(
        <LayoutContainer>
            
            <Introduction/>
        </LayoutContainer>
    );
}