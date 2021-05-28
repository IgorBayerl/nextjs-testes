
// Style
import {RightNavbar, NavLinks } from './styles';


export default function Navbar() {
    return (
        <RightNavbar>
            <div className={"bloob"}>
                <NavLinks>
                    *
                </NavLinks>
                <NavLinks>
                    
                    Projects
                </NavLinks>
                <NavLinks>
                    About
                </NavLinks>
                <NavLinks>
                    Contact
                </NavLinks>
                <svg id="gooey">
                    <filter>
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10"/>
                        <feColorMatrix
                        values="
                        1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0 
                        0 0 0 20 -10
                        "
                        
                        />
                    </filter>
                </svg>

            </div>
            <div>
                <NavLinks href="https://www.linkedin.com/in/igorbayerl/">
                    LinkedIn
                </NavLinks>
                <NavLinks>
                    Email
                </NavLinks>
                <NavLinks>
                    Instagram
                </NavLinks>
                <NavLinks >
                    Facebook
                </NavLinks>

            </div>
        </RightNavbar>
    )
}
  