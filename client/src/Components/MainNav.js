import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap'

const MainNav = () => {
    // Initialize state vars to false
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <Navbar color="dark" dark >
                <NavbarBrand>PestoPonics</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} >
                    <Nav>
                        <NavItem>Item</NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default MainNav