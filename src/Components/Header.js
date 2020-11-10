import React, { useState }  from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

  import {Link} from 'react-router-dom';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/">TODO Trycatch</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/add">Add ToDO</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/">View TODO</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/life-cycle-methods">Life Cycle Methods</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    )
}
