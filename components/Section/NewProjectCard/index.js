import {CardContainer, ImageBall , TopLayer ,Bolinha , Technologies, MidLayer, ActionsMenu, CardBody, GradientLine} from './styles';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";

export default function NewProjectCard({children, title, subTitle, isOpen, description, link, image1, image2, image3}) {
    
    
    
    return (
        <CardContainer className="pointerEventAuto" as={animated.div}>
            <CardBody>
                {/* <ActionsMenu>
                    <ul>
                        <a>
                            Github
                        </a>
                        <a>
                            Demo
                        </a>
                    </ul>
                </ActionsMenu> */}
                <TopLayer>
                    <GradientLine hue={10} width={7} />
                    
                    {/* <ImageBall as={animated.div} >
                        <img src={image1}/>
                    </ImageBall> */}
                    <Technologies>
                        <img src="http://victorvhpg.github.io/minicurso-react.js/slides/img/logo.png"/>
                        <img src="https://i1.wp.com/png.pngitem.com/pimgs/s/168-1680234_nodejs-logo-svg-hd-png-download.png"/>
                        <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg"/>
                    </Technologies>
                </TopLayer>
                <MidLayer>
                    <div>
                        <h2>{title}</h2>
                        <p><Bolinha hue={10}/>{subTitle}</p>
                    </div>
                    
                </MidLayer>
                
            </CardBody>
        </CardContainer>
    )
}
  