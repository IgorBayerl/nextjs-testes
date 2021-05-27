//// Style
import {CardContainer, CardContent , LeftArrowDownContainer , ArrowLine, RightContentContainer} from './styles';


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
                <h1>{bigTitle}</h1>
                {mainContent}
                {children}
                {afterContent}
            </RightContentContainer>
        </CardContainer>
    )
}
  