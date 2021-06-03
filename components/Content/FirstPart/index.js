////Components
import React, { useState, useEffect } from "react";
import Section from '../../Section/Section'
import Card from '../../Section/Card'
import { useTrail, useSpring, animated } from "react-spring";
import AnimateRowRail from "../../Section/AnimatedRowRail";
//// Style
import {GradientLine , Row , Bolinha, ContentText} from './styles';




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function BeforeContent(){

    return(
        <>
            <AnimateRowRail
                trailArray = {[
                    <GradientLine hue={200} width={6} />,
                    <GradientLine hue={43} width={4} />,
                    <Bolinha hue={127}  />,
                    <GradientLine hue={5} width={10} />,
                ]}
            />
            <AnimateRowRail
                trailArray = {[
                    <GradientLine hue={190} width={20} />,
                    <GradientLine hue={240} width={1} />,
                    <GradientLine hue={82} width={6} />,
                ]}
            />
            <AnimateRowRail
                trailArray = {[
                    <GradientLine hue={5} width={20} />,
                    <GradientLine hue={120} width={3} />,
                    <Bolinha hue={418}  />,
                    <GradientLine hue={162} width={15} />,
                ]}
            />
            <AnimateRowRail
                trailArray = {[
                    <GradientLine hue={5} width={2} />,
                    <GradientLine hue={162} width={4} />,
                    <GradientLine hue={5} width={7} />,
                    <GradientLine hue={255} width={3} />,
                    <GradientLine hue={56} width={1} />,
                    <GradientLine hue={145} width={8} />,
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
  