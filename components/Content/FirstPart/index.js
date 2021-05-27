////Components
import Section from '../../Section/Section'
import Card from '../../Section/Card'

//// Style
import {SectionContainer, CardContent } from './styles';

function MainContent(){
    return(
        <>
            <p>
            Lorem ipsum dolor metus. Maecenas odio ante, viverra id dui tempus,pellentesque enim, at imperdiet elit.
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
  