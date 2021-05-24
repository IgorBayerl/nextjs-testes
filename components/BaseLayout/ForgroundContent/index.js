//// Style
import {FgContent, Limiter } from './styles';


export default function ForgroundContent({children}) {
    return (
        <FgContent>
            <Limiter>
                {children}
            </Limiter>
        </FgContent>
    )
}
  