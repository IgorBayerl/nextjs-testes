//// Style
import {CardContainer, ImageBall , TopLayer , Technologies, MidLayer} from './styles';


export default function ProjectCard({children, title, description, link, image1, image2, image3}) {
    return (
        <CardContainer className="pointerEventAuto">
            <TopLayer>
                <ImageBall>
                    <img src="https://github.com/IgorBayerl.png"/>
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
                    <h2>Yoomy Web Page</h2>
                    <p>Yoomy</p>
                </div>
            </MidLayer>
        </CardContainer>
    )
}
  