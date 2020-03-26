import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem, 
    NavLink,
    Nav
} from 'reactstrap'
import {Link} from 'react-router-dom'
import GitHubButton from 'react-github-btn'

const MainNav = () => {
    // Initialize state vars to false
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <Navbar color="dark" dark>
                <NavbarBrand href="/" className="mr-auto">PestoPonics</NavbarBrand>
                <Nav navbar className="mr-2">
                    <NavItem>
                    <GitHubButton href="https://github.com/aeroponics" aria-label="Follow @aeroponics on GitHub">
                        Follow @aeroponics
                    </GitHubButton>
                    </NavItem>
                </Nav>
                <NavbarToggler onClick={toggle} className="mr-2" />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="https://github.com/aeroponics/" target="blank">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">About</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav