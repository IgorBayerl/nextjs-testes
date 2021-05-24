////Components
import Section from '../../Section/Section'
import Card from '../../Section/Card'

//// Style
import {SectionContainer, CardContent } from './styles';

function MainContent(){
    return(
        <>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet diam eget orci commodo gravida. Donec nec convallis metus. Maecenas odio ante, viverra id dui tempus, suscipit iaculis turpis. Proin sed sagittis justo. Integer at consectetur lorem. Aenean accumsan sed dolor ac pharetra. Nunc tellus lectus, tristique a ligula in, sodales lacinia sapien. Pellentesque tincidunt varius dui, ut cursus turpis egestas nec. Duis ac odio vitae velit vestibulum vestibulum. Quisque nec ligula posuere, dapibus leo vel, porttitor sapien. Vestibulum consequat quis nisi sit amet finibus. Nam eget eros ut est placerat scelerisque. Suspendisse fermentum pellentesque enim, at imperdiet elit.
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
  