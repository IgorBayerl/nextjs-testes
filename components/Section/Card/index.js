//// Style
import {CardContainer, CardContent , LeftArrowDownContainer} from './styles';


export default function Card({children, title, bigTitle, mainContent, beforeContent, afterContent}) {
    return (
        <CardContainer>
            <LeftArrowDownContainer>
                <h1>--------</h1>
            </LeftArrowDownContainer>
            <div>
                {beforeContent}
                <h1>{bigTitle}</h1>
                {mainContent}
                {children}
                {afterContent}
            </div>
        </CardContainer>
    )
}
  