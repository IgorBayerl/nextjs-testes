//// Style
import {CardContainer, CardContent , LeftArrowDownContainer , ArrowLine, RightContentContainer , Title , MainContentContainer} from './styles';


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
                <Title>{bigTitle}</Title>
                <MainContentContainer>{mainContent}</MainContentContainer>
                {children}
                {afterContent}
            </RightContentContainer>
        </CardContainer>
    )
}
  