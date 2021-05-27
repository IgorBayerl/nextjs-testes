//// Style
import {CardContainer, CardContent , LeftArrowDownContainer , ArrowLine, RightContentContainer} from './styles';


export default function ProjectCard({children, title, description, link, image1, image2, image3}) {
    return (
        <div class="card">
            <div class="face face1">
                <div class="content">
                    {/* <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"> */}
                    <h3>Design</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
    )
}
  