//// Style
import {CardContainer, CardContent , LeftArrowDownContainer , ArrowLine, RightContentContainer , Title , MainContentContainer} from './styles';

import AnimateRowRail from "../AnimatedRowRail";

export default function Card({children, title, bigTitle, mainContent, beforeContent, afterContent}) {
    return (
        <CardContainer>
            <LeftArrowDownContainer>
                <ArrowLine>
                    <div/>
                </ArrowLine>
            </LeftArrowDownContainer>
            <RightContentContainer>
                {beforeContent}
                <AnimateRowRail
                    trailArray={[
                        <Title>{bigTitle}</Title>
                    ]}
                />
                <AnimateRowRail
                    trailArray={[
                        <MainContentContainer>{mainContent}</MainContentContainer>
                    ]}
                />
                
                {children}
                {afterContent}
            </RightContentContainer>
        </CardContainer>
    )
}
  