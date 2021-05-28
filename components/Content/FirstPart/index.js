////Components
import Section from '../../Section/Section'
import Card from '../../Section/Card'

//// Style
import {SectionContainer, CardContent } from './styles';

function MainContent(){
    return(
        <>
            <p>
            FullStack Software Engineer
            </p>
            
        </>
    );
}

export default function FirstPart() {
    return (
        <Section>
            <Card
            title={"Igor"}
            bigTitle={"Igor Bayerl"}
            mainContent={<MainContent/>}
            // beforeContent={}
            // afterContent={}
            />
        </Section>
    )
}
  