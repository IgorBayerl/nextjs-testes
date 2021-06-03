import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import { Row } from './styles';

export default function AnimateRowRail(props){
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    const items = props.trailArray;
    const [toggle, setToggle] = useState(0);

    useEffect(async() => {
        await sleep(500)
        setToggle(1)
    },[])

    const config = { mass: 5, tension: 2000, friction: 200 };

    const trail = useTrail(items.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 200,
        from: { opacity: 0, x: 200 }
    });

    return (
        <Row>
            {trail.map(({ x, ...rest }, index) => (
            <animated.div
                key={items[index]}
                style={{
                    ...rest,
                    transform: x.to((x) => `translate3d(${x}px,0,0)`)
                }}
            >
                <animated.div >{items[index]}</animated.div>
            </animated.div>
            ))}
        </Row>
    );
}