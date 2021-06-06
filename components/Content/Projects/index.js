import {CardContainer, CardContent , LeftArrowDownContainer , ArrowLine, RightContentContainer} from './styles';
import ProjectCard from '../../Section/ProjectCard';
import { useState } from 'react';

export default function Projects({arrayProjects}) {
    const [openCard, setOpenCard] = useState(1);

    function handleClick(itemId){
        console.log(itemId)
    }
    return (
        <>
            <ProjectCard 
                title = {"Yoomy Web Page"}
                subTitle = {"Yoomy"}
                image1 = {"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {true}
            />
            <ProjectCard 
                title = {"Title2"}
                subTitle = {"Sub1"}
                image1 = {"data:image/jpeg;base64,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"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title3"}
                subTitle = {"Yoomy"}
                image1 = {"data:image/jpeg;base64,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"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title4"}
                subTitle = {"Yoomy"}
                image1 = {"data:image/jpeg;base64,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"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title5"}
                subTitle = {"Yoomy"}
                image1 = {"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title6"}
                subTitle = {"Yoomy"}
                image1 = {"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title7"}
                subTitle = {"Yoomy"}
                image1 = {"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title8"}
                subTitle = {"Yoomy"}
                image1 = {"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
            <ProjectCard 
                title = {"Title9"}
                subTitle = {"Yoomy"}
                image1 = {"https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"}
                image2 = {"https://www.publicitarioscriativos.com/wp-content/uploads/2017/05/publicitarios-criativos-12.png"}
                isOpen = {false}
            />
        </>
    )
}
  