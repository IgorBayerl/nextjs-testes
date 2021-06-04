
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
                

            </div>
            <div >
                
                <NavLinks className="menuNavLinkSmall" href="https://www.linkedin.com/in/igorbayerl/">
                    LinkedIn
                </NavLinks>
                <NavLinks className="menuNavLinkSmall">
                    GitHub
                </NavLinks>
                <NavLinks className="menuNavLinkSmall" href="mailto:bayerl.igor@gmail.com">
                    Email
                </NavLinks>

            </div>
        </RightNavbar>
    )
}
  