import {CardContainer, ImageBall , TopLayer , Technologies, MidLayer, BottomLayer} from './styles';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

export default function ProjectCard({children, title, subTitle, isOpen, description, link, image1, image2, image3}) {
    const [openCard, setOpenCard] = useState(false);
    const imgProps = useSpring({
        config: { duration: 150 },
        top: openCard ? "-1em" : "3.5em"
    });
    const cardProps = useSpring({
        config: { duration: 150 },
        height: openCard ? "30em" : "8em",
        width: openCard ? "30em" : "20em",
        
    });
    return (
        <CardContainer className="pointerEventAuto" as={animated.div} style={cardProps} onClick={() => setOpenCard(!openCard)}>
            <TopLayer>
                <ImageBall as={animated.div} style={imgProps}>
                    <img src={image1}/>
                </ImageBall>
                <Technologies>
                    <img src="https://github.com/IgorBayerl.png"/>
                    <img src="https://github.com/IgorBayerl.png"/>
                    <img src="https://github.com/IgorBayerl.png"/>
                    <img src="https://github.com/IgorBayerl.png"/>
                    <img src="https://github.com/IgorBayerl.png"/>
                </Technologies>
            </TopLayer>
            <MidLayer>
                <div>
                    <h2>{title}</h2>
                    <p>{subTitle}</p>
                </div>
            </MidLayer>
            <BottomLayer>
                <img src={image2}/>
            </BottomLayer>
        </CardContainer>
    )
}
  