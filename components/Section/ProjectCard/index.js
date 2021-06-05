//// Style
import {CardContainer, CardContent , LeftArrowDownContainer , ArrowLine, RightContentContainer} from './styles';


export default function ProjectCard({children, title, description, link, image1, image2, image3}) {
    return (
        <CardContainer className="pointerEventAuto">
            <div >
                <div >
                    {/* <img src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"/> */}
                    <h3>Yoomy Web Page</h3>
                </div>
            </div>
            <div >
                <div >
                    <p>[ReactJS] - [NextJS] - [StyledComponents]</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </CardContainer>
    )
}
  