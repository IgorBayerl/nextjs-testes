////Components
import React from "react";
import Section from '../../Section/Section'
import Card from '../../Section/Card'
import AnimateRowRail from "../../Section/AnimatedRowRail";
//// Style
import {GradientLine , Row , Bolinha, ContentText , BgTextSection} from './styles';

function BeforeContent(){

    return(
        <>
            <AnimateRowRail
                trailArray = {[
                    <GradientLine time={0} hue={200} width={6}  />,
                    <GradientLine time={20} hue={43} width={4} />,
                    <Bolinha hue={127}  />,
                    <GradientLine time={5} hue={5} width={10} />,
                ]}
            />
            <AnimateRowRail
                trailArray = {[
                    <GradientLine time={0} hue={190} width={22} />,
                    <GradientLine time={8} hue={240} width={1} />,
                    <GradientLine time={15} hue={82} width={6} />,
                ]}
            />
            <AnimateRowRail
                trailArray = {[
                    <GradientLine time={5} hue={5} width={20} />,
                    <GradientLine time={16} hue={120} width={3} />,
                    <Bolinha hue={418}  />,
                    <GradientLine time={14} hue={162} width={15} />,
                ]}
            />
            <AnimateRowRail
                trailArray = {[
                    <GradientLine time={9} hue={5} width={2} />,
                    <GradientLine time={0} hue={162} width={4} />,
                    <GradientLine time={7} hue={5} width={7} />,
                    <GradientLine time={0} hue={255} width={3} />,
                    <GradientLine time={4} hue={56} width={1} />,
                    <GradientLine time={12} hue={145} width={8} />,
                ]}
            />
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

export default function FirstPart({id}) {

    return (
        <Section id={id}>
            {/* <BgTextSection >
                <p className={"bg-bold-font"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis at enim nec aliquam. Curabitur finibus lectus congue ipsum congue, eu laoreet mauris malesuada. Praesent urna erat, sollicitudin vitae pulvinar bibendum, luctus eget turpis. Mauris at lorem ut urna faucibus faucibus. Nulla facilisi. Fusce quis pharetra urna, ac lacinia ipsum. Ut porta porta aliquet. Curabitur pharetra ex bibendum, lacinia metus non, eleifend enim. Proin dolor libero, ullamcorper ac efficitur ac, posuere in lacus. Nam tincidunt congue neque vitae finibus. Integer ac leo non massa accumsan consectetur et ac sem. Pellentesque eu venenatis nisi. In rhoncus urna ac dolor hendrerit vestibulum.


                </p>
            </BgTextSection> */}
            <Card
            bigTitle={"Igor Bayerl"}
            mainContent={<MainContent/>}
            // beforeContent={<BeforeContent/>}
            // afterContent={<BeforeContent/>}
            />
        </Section>
    )
}
  