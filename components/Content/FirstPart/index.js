////Components
import Section from '../../Section/Section'
import Card from '../../Section/Card'

//// Style
import {GradientLine , Row , Bolinha, ContentText} from './styles';


function BeforeContent(){
    return(
        <>
            <Row>
                <GradientLine hue={162} width={10} />
                <GradientLine hue={200} width={2} />
                <GradientLine hue={350} width={5} />
            </Row>
            <Row>
                <GradientLine hue={5} width={20} />
                <GradientLine hue={288} width={3} />
                <Bolinha hue={418}  />
                <GradientLine hue={288} width={15} />
            </Row>
            <Row>
                <GradientLine hue={17} width={10} />
                <GradientLine hue={162} width={2} />
                <GradientLine hue={162} width={5} />
            </Row>
        </>
    );
}

function MainContent(){
    return(
        <>
            <ContentText>
            FullStack Software Engineer
            </ContentText>
            
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
            beforeContent={<BeforeContent/>}
            afterContent={<BeforeContent/>}
            />
        </Section>
    )
}
  